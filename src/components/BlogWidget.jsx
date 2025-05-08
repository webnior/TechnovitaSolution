import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { getPosts, formatPostData } from '../lib/wordpress';

// Create a fetcher function
const fetcher = async () => {
  const { posts } = await getPosts(1, 3);
  return posts.map(formatPostData);
};

export default function BlogWidget() {
  const { data: posts, error, isLoading } = useSWR('latest-posts', fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 60000, // Refresh every minute
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-gray-600 mb-8">Failed to load blog posts</p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!posts?.length) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {post.featuredImage && (
                <div className="relative h-48">
                  <Image 
                    src={post.featuredImage} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-colors duration-500" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                  <div className="flex gap-2">
                    {post.categories.map((cat) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <div 
                  className="text-gray-600 line-clamp-2 mb-4 prose prose-sm"
                  dangerouslySetInnerHTML={{ 
                    __html: post.excerpt.replace(/<p>/g, '').replace(/<\/p>/g, '') 
                  }} 
                />
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read More
                  <i className="ml-2 fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            View All Posts
            <i className="ml-2 fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
