import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, formatPostData } from '../lib/wordpress';

export default function BlogWidget() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts: latestPosts } = await getPosts(1, 3);
        setPosts(latestPosts.map(formatPostData));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-4"></div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {post.featuredImage && (
                <div className="relative h-48 md:h-64">
                  <Image 
                    src={post.featuredImage} 
                    alt={post.title}
                    layout="fill"
                    objectFit="contain"
                    quality={85}
                    className="transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-colors duration-500" />
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <div className="text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ 
                  __html: post.excerpt.replace(/<p>/g, '').replace(/<\/p>/g, '') 
                }} />
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
