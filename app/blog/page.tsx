import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getAllBlogPosts, getFeaturedPosts } from '@/lib/blog';
import JsonLdScript from '@/components/seo/JsonLdScript';

export const metadata: Metadata = {
  title: 'Blog | Attendance Intelligence Insights',
  description: 'Expert insights on chronic absenteeism, student attendance tracking, early intervention strategies, and K-12 education technology. From the BrainBridge team.',
  keywords: [
    'chronic absenteeism blog',
    'school attendance articles',
    'education technology insights',
    'student attendance strategies',
    'K-12 attendance management',
  ],
  openGraph: {
    title: 'Blog | Attendance Intelligence Insights',
    description: 'Expert insights on chronic absenteeism, student attendance tracking, and early intervention strategies.',
    url: 'https://brainbridge.cloud/blog',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/blog',
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const featuredPosts = await getFeaturedPosts();

  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'Blog', url: 'https://brainbridge.cloud/blog' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Attendance Intelligence Insights
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              The BrainBridge Blog
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert insights on chronic absenteeism, early intervention strategies,
              and how AI is transforming student attendance management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 text-blue-100 text-sm mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime} min read
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-blue-100 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-200">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Articles</h2>
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {post.image && (
                    <div className="aspect-video bg-slate-200">
                      {/* Image would go here */}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">{post.readingTime} min read</span>
                      <span className="text-blue-600 font-medium flex items-center gap-1">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights on attendance intelligence delivered to your inbox.
          </p>
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all"
          >
            Subscribe to Updates
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
