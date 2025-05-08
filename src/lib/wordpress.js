/**
 * WordPress API utilities for headless CMS integration
 * Fetches data from WordPress REST API
 */

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

/**
 * Fetch all posts with pagination support
 * @param {number} page - Page number
 * @param {number} perPage - Posts per page
 * @param {number} categoryId - Category ID (optional)
 * @returns {Promise<{posts: Array, totalPages: number}>}
 */
export async function getPosts(page = 1, perPage = 10, categoryId = null) {
  try {
    let url = `${API_URL}/posts?page=${page}&per_page=${perPage}&_embed`;
    
    if (categoryId) {
      url += `&categories=${categoryId}`;
    }

    const response = await axios.get(url);
    const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1', 10);

    return {
      posts: response.data,
      totalPages,
    };
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
export async function getPost(slug) {
  try {
    const response = await axios.get(`${API_URL}/posts?slug=${slug}&_embed`);
    
    if (!response.data || response.data.length === 0) {
      return null;
    }

    return response.data[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Fetch all categories
 * @returns {Promise<Array>} - Categories data
 */
export async function getCategories() {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
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
    const response = await axios.get(
      `${API_URL}/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed`
    );
    const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1', 10);

    return {
      posts: response.data,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching category posts:', error);
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

  return {
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    author: {
      name: post._embedded?.author?.[0]?.name || 'Unknown Author',
      avatar: post._embedded?.author?.[0]?.avatar_urls?.['96'] || null,
    },
    categories: post._embedded?.['wp:term']?.[0]?.map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
    })) || [],
    featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    readingTime: Math.ceil(post.content.rendered.split(' ').length / 200), // Assuming 200 words per minute
    metaDescription: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}
