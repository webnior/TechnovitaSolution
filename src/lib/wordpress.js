/**
 * WordPress API utilities for headless CMS integration
 * Fetches data from WordPress REST API
 */

// Replace with your WordPress site URL
const WORDPRESS_API_URL = 'http://blog.technovitasolution.com/wp-json/wp/v2';

/**
 * Fetch all posts with pagination support
 * @param {number} page - Page number
 * @param {number} perPage - Posts per page
 * @param {number} categoryId - Category ID (optional)
 * @returns {Promise<{posts: Array, totalPages: number}>}
 */
export async function getPosts(page = 1, perPage = 10, categoryId = null) {
  try {
    // Build query parameters
    let queryParams = `?_embed=true&page=${page}&per_page=${perPage}`;
    if (categoryId) {
      queryParams += `&categories=${categoryId}`;
    }

    // Fetch posts with embedded featured media, categories, and authors
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts${queryParams}`,
      { next: { revalidate: 3600 } }
    );
    
    // Get total pages from headers
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0', 10);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    
    const posts = await response.json();
    return { posts, totalPages };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], totalPages: 0 };
  }
}

/**
 * Fetch a single post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object>} - Post data
 */
export async function getPostBySlug(slug) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts[0] || null; // Return first post or null
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

/**
 * Fetch all categories
 * @returns {Promise<Array>} - Categories data
 */
export async function getCategories() {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/categories`,
      { next: { revalidate: 86400 } } // Revalidate daily
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Fetch posts by category ID
 * @param {number} categoryId - Category ID
 * @param {number} page - Page number
 * @param {number} perPage - Posts per page
 * @returns {Promise<{posts: Array, totalPages: number}>}
 */
export async function getPostsByCategory(categoryId, page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?categories=${categoryId}&_embed=true&page=${page}&per_page=${perPage}`,
      { next: { revalidate: 3600 } }
    );
    
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0', 10);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts by category: ${response.status}`);
    }
    
    const posts = await response.json();
    return { posts, totalPages };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return { posts: [], totalPages: 0 };
  }
}

/**
 * Format WordPress post data for frontend use
 * @param {Object} post - WordPress post object
 * @returns {Object} - Formatted post data
 */
export function formatPostData(post) {
  if (!post) return null;
  
  // Extract featured image if available
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  
  // Extract author info
  const author = post._embedded?.['author']?.[0] || {};
  
  // Extract categories
  const categories = post._embedded?.['wp:term']?.[0] || [];
  
  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = post.content.rendered.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  
  return {
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    slug: post.slug,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    modified: new Date(post.modified).toISOString(),
    featuredImage,
    author: {
      id: author.id,
      name: author.name,
      avatar: author.avatar_urls?.['96'] || null,
    },
    categories: categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
    })),
    readingTime,
  };
}
