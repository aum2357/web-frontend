"use client";

import { useState } from "react";

interface Review {
  id: string;
  customerName: string;
  customerImage: string;
  restaurant: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  images: string[];
  orderType: "delivery" | "pickup" | "dine-in";
  verified: boolean;
  response?: {
    restaurantName: string;
    content: string;
    date: string;
  };
}

const reviews: Review[] = [
  {
    id: "REV001",
    customerName: "Priya Sharma",
    customerImage: "👩",
    restaurant: "Spice Garden",
    rating: 5,
    title: "Amazing food quality and service!",
    content: "Ordered the butter chicken and garlic naan. The food was incredibly fresh and flavorful. Delivery was on time and the packaging was excellent. Definitely ordering again!",
    date: "2024-03-15",
    helpful: 23,
    images: ["🍛", "🥘"],
    orderType: "delivery",
    verified: true,
    response: {
      restaurantName: "Spice Garden",
      content: "Thank you so much for your wonderful review! We're delighted you enjoyed our butter chicken. Looking forward to serving you again.",
      date: "2024-03-16"
    }
  },
  {
    id: "REV002",
    customerName: "Rahul Kumar",
    customerImage: "👨",
    restaurant: "Pizza Palace",
    rating: 4,
    title: "Great pizza but delivery was a bit slow",
    content: "The pizza was delicious with fresh toppings and perfect crust. However, delivery took longer than expected. Overall good experience.",
    date: "2024-03-14",
    helpful: 18,
    images: ["🍕"],
    orderType: "delivery",
    verified: true
  },
  {
    id: "REV003",
    customerName: "Anita Patel",
    customerImage: "👩‍💼",
    restaurant: "Green Bowl",
    rating: 5,
    title: "Healthy and tasty options!",
    content: "Love the quinoa bowl! Fresh ingredients, generous portions, and very nutritious. Perfect for my diet goals. The green smoothie was also refreshing.",
    date: "2024-03-13",
    helpful: 31,
    images: ["🥗", "🥤"],
    orderType: "pickup",
    verified: true,
    response: {
      restaurantName: "Green Bowl",
      content: "We're thrilled you enjoyed our healthy options! Thank you for choosing us for your wellness journey.",
      date: "2024-03-14"
    }
  },
  {
    id: "REV004",
    customerName: "Vikram Singh",
    customerImage: "👨‍💻",
    restaurant: "Sushi Master",
    rating: 4,
    title: "Fresh sushi, great presentation",
    content: "The sushi was very fresh and beautifully presented. The salmon roll was particularly good. Slightly expensive but worth it for the quality.",
    date: "2024-03-12",
    helpful: 15,
    images: ["🍣", "🍱"],
    orderType: "dine-in",
    verified: true
  },
  {
    id: "REV005",
    customerName: "Meera Reddy",
    customerImage: "👩‍🎓",
    restaurant: "Burger Junction",
    rating: 3,
    title: "Average burger experience",
    content: "The burger was okay, nothing exceptional. Fries were crispy though. Service was friendly but the wait time was a bit long.",
    date: "2024-03-11",
    helpful: 7,
    images: ["🍔"],
    orderType: "dine-in",
    verified: true
  }
];

const stats = {
  totalReviews: 1247,
  averageRating: 4.3,
  distribution: {
    5: 650,
    4: 380,
    3: 150,
    2: 45,
    1: 22
  }
};

export default function Reviews() {
  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  const filterOptions = [
    { key: "all", label: "All Reviews", icon: "⭐" },
    { key: "5", label: "5 Stars", icon: "🌟" },
    { key: "4", label: "4 Stars", icon: "⭐" },
    { key: "3", label: "3 Stars", icon: "⭐" },
    { key: "delivery", label: "Delivery", icon: "🚚" },
    { key: "verified", label: "Verified", icon: "✅" }
  ];

  const sortOptions = [
    { key: "newest", label: "Newest First" },
    { key: "oldest", label: "Oldest First" },
    { key: "rating", label: "Highest Rated" },
    { key: "helpful", label: "Most Helpful" }
  ];

  const filteredReviews = reviews.filter(review => {
    if (filter === "all") return true;
    if (filter === "verified") return review.verified;
    if (filter === "delivery") return review.orderType === "delivery";
    if (["5", "4", "3", "2", "1"].includes(filter)) {
      return review.rating === parseInt(filter);
    }
    return true;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

  const getProgressWidth = (count: number, total: number) => {
    return (count / total) * 100;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Customer Reviews
          </h1>
          <p className="text-gray-600 text-xl">Real experiences from our valued customers</p>
        </div>

        {/* Overview Stats */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stats.averageRating}</div>
              <div className="flex justify-center mb-2">{renderStars(Math.round(stats.averageRating))}</div>
              <div className="text-gray-600">Based on {stats.totalReviews} reviews</div>
            </div>
            
            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-6">{star}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressWidth(stats.distribution[star as keyof typeof stats.distribution], stats.totalReviews)}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12">{stats.distribution[star as keyof typeof stats.distribution]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters & Sorting */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setFilter(option.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    filter === option.key
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                    {review.customerImage}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{review.customerName}</h3>
                      {review.verified && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{review.restaurant} • {formatDate(review.date)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {review.orderType}
                  </span>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                <p className="text-gray-700 leading-relaxed">{review.content}</p>
              </div>

              {/* Review Images */}
              {review.images.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {review.images.map((image, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl"
                    >
                      {image}
                    </div>
                  ))}
                </div>
              )}

              {/* Review Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <span>👍</span>
                  <span>Helpful ({review.helpful})</span>
                </button>
                <div className="flex gap-4">
                  <button className="text-gray-600 hover:text-blue-600 transition-colors">Reply</button>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors">Share</button>
                </div>
              </div>

              {/* Restaurant Response */}
              {review.response && (
                <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-blue-900">{review.response.restaurantName}</span>
                    <span className="text-xs text-blue-700 bg-blue-200 px-2 py-1 rounded-full">Restaurant</span>
                  </div>
                  <p className="text-blue-800 text-sm mb-2">{review.response.content}</p>
                  <div className="text-xs text-blue-600">{formatDate(review.response.date)}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
          <p className="text-blue-100 mb-6">
            Had a great meal? Help other customers by sharing your review.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
}