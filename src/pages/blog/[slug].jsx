import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import BlogLayout from '../../layouts/BlogLayout';
import { getPost, getPosts, formatPostData } from '../../lib/wordpress';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

// Create a fetcher function for SWR
const fetcher = async (url) => {
  const post = await getPost(url);
  return formatPostData(post);
};

export default function BlogPost({ post: initialPost, relatedPosts }) {
  // Use SWR for real-time updates
  const { data: post, error } = useSWR(initialPost.slug, fetcher, {
    fallbackData: initialPost,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 60000, // Refresh every minute
  });

  if (error) {
    return (
      <BlogLayout title="Error">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Error Loading Post
            </h1>
            <p className="text-gray-600 mb-6">
              There was an error loading this post. Please try again later.
            </p>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
      </BlogLayout>
    );
  }

  if (!post) {
    return (
      <BlogLayout title="Post Not Found">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
      </BlogLayout>
    );
  }

  const currentUrl = typeof window !== 'undefined'
    ? window.location.href
    : `https://technovitasolution.com/blog/${post.slug}`;

  // Convert HTML content to array of paragraphs
  const contentParagraphs = post.content.split(/<\/p>/).map(p => p.replace(/<p>/, ''));

  return (
    <BlogLayout
      title={`${post.title} | Technovita Solution`}
      description={post.metaDescription}
    >
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
                <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="inline-flex items-center">
                <span className="text-sm font-medium text-gray-500">{post.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blog Post Header */}
      <div className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <i className="fas fa-calendar-day text-blue-600" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-user text-blue-600" />
                <span className="text-sm">By {post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-clock text-blue-600" />
                <span className="text-sm">{post.readingTime} min read</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              {post.categories.map((cat, index) => (
                <Link
                  key={cat.id}
                  href={`/blog/category/${cat.slug}`}
                  className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative mb-12">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={1200}
                  height={600}
                  objectFit="contain"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}
            {/* Content */}
            <div className="prose prose-lg max-w-none prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-headings:text-gray-900 prose-p:text-gray-600">
              {contentParagraphs.map((para, index) => (
                <div key={index} className="mb-8">
                  <p dangerouslySetInnerHTML={{ __html: para }} />
                </div>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-16 mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Share This Post:
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <FacebookShareButton url={currentUrl} quote={post.title}>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <i className="fab fa-facebook-f text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </div>
                </FacebookShareButton>
                <TwitterShareButton url={currentUrl} title={post.title}>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <i className="fab fa-twitter text-blue-400" />
                    <span className="font-medium">Twitter</span>
                  </div>
                </TwitterShareButton>
                <LinkedinShareButton url={currentUrl} title={post.title}>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <i className="fab fa-linkedin-in text-blue-700" />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                </LinkedinShareButton>
              </div>
            </div>

            {/* Author Box */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 mb-12">
              <div className="flex items-center gap-6">
                {post.author.avatar && (
                  <div className="relative w-24 h-24">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {post.author.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Author at Technovita Solution
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i className="fab fa-github" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      {post.featuredImage && (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          width={1200}
                          height={600}
                          objectFit="cover"
                          className="transform group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-colors duration-500" />
                    </div>
                    <div className="p-4 bg-white">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2 mt-2">
                        {post.excerpt.replace(/<p>/g, '').replace(/<\/p>/g, '')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center">
              <Link href="/blog" className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                <i className="fas fa-arrow-left mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  try {
    const { posts } = await getPosts(1, 100);
    
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));
    
    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const post = await getPost(params.slug);
    
    if (!post) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }
    
    const { posts } = await getPosts(1, 3);
    const relatedPosts = posts
      .filter(p => p.id !== post.id)
      .slice(0, 3)
      .map(formatPostData);
    
    return {
      props: {
        post: formatPostData(post),
        relatedPosts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
      revalidate: 60,
    };
  }
}
