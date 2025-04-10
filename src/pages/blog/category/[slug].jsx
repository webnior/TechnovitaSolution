import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BlogLayout from '../../../layouts/BlogLayout';
import { getCategories, getPostsByCategory, formatPostData } from '../../../lib/wordpress';

export default function CategoryPage({ category, initialPosts, totalPages }) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  if (router.isFallback) {
    return (
      <BlogLayout title="Loading...">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      </BlogLayout>
    );
  }

  if (!category) {
    return (
      <BlogLayout title="Category Not Found">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Category Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The category you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
      </BlogLayout>
    );
  }

  const loadMorePosts = async () => {
    if (currentPage >= totalPages || loading) return;
    
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const { posts: newPosts } = await getPostsByCategory(category.id, nextPage);
      
      setPosts([...posts, ...newPosts.map(formatPostData)]);
      setCurrentPage(nextPage);
      
      if (searchTerm) {
        const filtered = [...posts, ...newPosts.map(formatPostData)].filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  return (
    <BlogLayout 
      title={`${category.name} | Blog | Technovita Solution`}
      description={`Browse all posts in ${category.name} category - Technovita Solution Blog`}
    >
      {/* Category Header */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600">
              Browse all posts in this category
            </p>
          </div>
        </div>
      </div>

      {/* Category Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Navigation */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts in this category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pr-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i className="absolute right-3 top-1/2 transform -translate-y-1/2 fas fa-search text-gray-400" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center">
                  <Link href="/blog" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Back to All Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Category Stats */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600">
              {posts.length} posts in this category
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 md:h-64">
                    {post.featuredImage && (
                      <Link href={`/blog/${post.slug}`}>
                        <Image 
                          src={post.featuredImage} 
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                      {post.categories.length > 0 && (
                        <div className="flex gap-2">
                          {post.categories.map((cat, index) => (
                            <Link 
                              key={cat.id} 
                              href={`/blog/category/${cat.slug}`} 
                              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      <span className="text-sm text-gray-500">
                        {post.readingTime} min read
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read More
                      <i className="ml-2 fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No posts found in this category
                </h3>
                <p className="text-gray-600">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {currentPage < totalPages && (
            <div className="text-center mt-8">
              <button 
                onClick={loadMorePosts}
                disabled={loading}
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  try {
    const categories = await getCategories();
    
    const paths = categories.map((category) => ({
      params: { slug: category.slug },
    }));
    
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const categories = await getCategories();
    const category = categories.find(cat => cat.slug === params.slug);
    
    if (!category) {
      return {
        notFound: true,
      };
    }
    
    const { posts, totalPages } = await getPostsByCategory(category.id, 1, 10);
    
    return {
      props: {
        category,
        initialPosts: posts.map(formatPostData),
        totalPages,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}
