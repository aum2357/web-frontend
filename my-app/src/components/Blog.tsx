"use client";

import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Must-Try Street Foods in Delhi",
    excerpt: "Discover the vibrant street food scene of Delhi with our curated list of must-try dishes that will tantalize your taste buds.",
    content: "Delhi's street food scene is legendary, offering an incredible variety of flavors, textures, and experiences...",
    author: "Priya Sharma",
    date: "2024-03-15",
    category: "Food Guide",
    image: "🍛",
    readTime: "5 min read",
    tags: ["Delhi", "Street Food", "Guide"]
  },
  {
    id: 2,
    title: "The Rise of Cloud Kitchens in India",
    excerpt: "Explore how cloud kitchens are revolutionizing the food delivery industry and changing the way we think about restaurants.",
    content: "Cloud kitchens, also known as ghost kitchens or virtual restaurants, have emerged as a game-changer...",
    author: "Rahul Singh",
    date: "2024-03-12",
    category: "Industry Trends",
    image: "👨‍🍳",
    readTime: "8 min read",
    tags: ["Cloud Kitchen", "Technology", "Business"]
  },
  {
    id: 3,
    title: "Healthy Eating on a Budget",
    excerpt: "Learn practical tips and tricks to maintain a healthy diet without breaking the bank with our expert nutritionist advice.",
    content: "Eating healthy doesn't have to be expensive. With the right planning and knowledge...",
    author: "Dr. Anjali Patel",
    date: "2024-03-10",
    category: "Health & Nutrition",
    image: "🥗",
    readTime: "6 min read",
    tags: ["Health", "Budget", "Nutrition"]
  },
  {
    id: 4,
    title: "Regional Cuisines: A Journey Through India",
    excerpt: "Take a culinary journey through different Indian states and discover the unique flavors that make each region special.",
    content: "India's culinary landscape is as diverse as its culture, with each region offering unique flavors...",
    author: "Chef Vikram Kumar",
    date: "2024-03-08",
    category: "Culture & Food",
    image: "🌶️",
    readTime: "10 min read",
    tags: ["Indian Cuisine", "Culture", "Regional Food"]
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ["all", "Food Guide", "Industry Trends", "Health & Nutrition", "Culture & Food"];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            ← Back to Blog
          </button>

          <article className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{selectedPost.image}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              <div className="flex items-center justify-center gap-6 text-gray-600 text-sm">
                <span>By {selectedPost.author}</span>
                <span>{formatDate(selectedPost.date)}</span>
                <span>{selectedPost.readTime}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{selectedPost.category}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl font-medium mb-6">{selectedPost.excerpt}</p>
              <div className="whitespace-pre-line">{selectedPost.content}</div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Food Blog
          </h1>
          <p className="text-gray-600 text-xl">Discover food stories, tips, and culinary adventures</p>
        </div>

        {/* Categories */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "All Posts" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Post Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center text-white">
                <div className="text-4xl mb-3">{post.image}</div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  <div className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600">Subscribe to our newsletter for the latest food stories and tips</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { name: "Recipe Tips", icon: "👨‍🍳", count: "12 articles" },
            { name: "Healthy Eating", icon: "🥗", count: "8 articles" },
            { name: "Food Culture", icon: "🌍", count: "15 articles" },
            { name: "Restaurant Reviews", icon: "⭐", count: "6 articles" }
          ].map((topic, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-xl p-4 border border-gray-200/50 shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="text-2xl mb-2">{topic.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{topic.name}</h3>
              <p className="text-sm text-gray-500">{topic.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}