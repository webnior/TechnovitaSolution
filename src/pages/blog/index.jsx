import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogLayout from '../../layouts/BlogLayout';
import { getPosts, getCategories, formatPostData } from '../../lib/wordpress';

export default function Blog({ initialPosts, totalPages, categories }) {
  const [posts, setPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const loadMorePosts = async () => {
    if (currentPage >= totalPages || loading) return;
    
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const { posts: newPosts } = await getPosts(nextPage);
      
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
      title="Blog | Technovita Solution"
      description="Latest insights, guides, and news of e-commerce from Technovita Solution"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Latest insights, guides, and news from Technovita Solution
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pr-12 text-sm border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i className="absolute right-3 top-1/2 transform -translate-y-1/2 fas fa-search text-blue-500" />
                </div>
              </div>
              <select
                className="w-full md:w-auto px-6 py-4 text-sm border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  if (selectedCategory === 'all') {
                    setFilteredPosts(posts);
                  } else {
                    const filtered = posts.filter(post =>
                      post.categories.some(cat => cat.slug === selectedCategory)
                    );
                    setFilteredPosts(filtered);
                  }
                }}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="py-4">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="inline-flex items-center">
                <span className="text-sm font-medium text-gray-500">Blog</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {post.featuredImage && (
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image 
                        src={post.featuredImage} 
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        quality={85}
                        className="transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-colors duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                      <div className="flex gap-2">
                        {post.categories.map((cat, index) => (
                          <Link 
                            key={cat.id} 
                            href={`/blog/category/${cat.slug}`} 
                            className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="text-gray-600 line-clamp-2 mb-4" dangerouslySetInnerHTML={{ 
                      __html: post.excerpt.replace(/<p>/g, '').replace(/<\/p>/g, '') 
                    }} />
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Read More
                        <i className="ml-2 fas fa-arrow-right" />
                      </Link>
                      <span className="text-sm text-gray-500">
                        {post.readingTime} min read
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  No posts found
                </h3>
                <p className="text-gray-600 mb-6">
                  Check back soon for new content!
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request a Post
                  <i className="ml-2 fas fa-envelope" />
                </Link>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {currentPage < totalPages && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMorePosts}
                disabled={loading}
                className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner animate-spin mr-2" />
                    Loading...
                  </>
                ) : (
                  'Load More Posts'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
}

export async function getStaticProps() {
  try {
    const { posts, totalPages } = await getPosts(1, 10);
    const categories = await getCategories();
    
    return {
      props: {
        initialPosts: posts.map(formatPostData),
        totalPages,
        categories,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        initialPosts: [],
        totalPages: 0,
        categories: [],
      },
      revalidate: 60,
    };
  }
}
