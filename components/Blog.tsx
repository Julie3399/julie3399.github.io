import React from 'react';
import { SectionHeading } from './SectionHeading';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Dev_Logs" />

        <div className="space-y-px bg-white/10 border border-white/10">
          {BLOG_POSTS.map((post) => (
            <a key={post.id} href={post.link} className="group block bg-background p-6 md:p-8 hover:bg-surfaceHighlight transition-colors">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
                  <div className="w-32 shrink-0 font-mono text-xs text-accent border border-accent/20 text-center py-1 px-2 bg-accent/5">
                    {post.date}
                  </div>
                  
                  <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-sans group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-sm font-mono mb-3 max-w-3xl">
                        {post.summary}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-white/40 font-mono">
                        <span>DIR: {post.category}</span>
                        <span>// {post.readTime}</span>
                      </div>
                  </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};