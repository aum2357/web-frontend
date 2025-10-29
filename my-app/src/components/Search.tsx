"use client";

import { useState, useEffect } from "react";

interface SearchResult {
  id: number;
  name: string;
  type: "restaurant" | "dish" | "cuisine";
  description: string;
  rating: number;
  image: string;
  price?: number;
  location?: string;
}

const searchData: SearchResult[] = [
  {
    id: 1,
    name: "Spice Garden",
    type: "restaurant",
    description: "Authentic Indian cuisine with modern twist",
    rating: 4.8,
    image: "🏪",
    location: "Sector 18, Noida"
  },
  {
    id: 2,
    name: "Butter Chicken",
    type: "dish",
    description: "Creamy tomato-based curry with tender chicken",
    rating: 4.6,
    image: "🍛",
    price: 350
  },
  {
    id: 3,
    name: "Italian Cuisine",
    type: "cuisine",
    description: "Pizza, pasta, and authentic Italian dishes",
    rating: 4.5,
    image: "🍝"
  },
  {
    id: 4,
    name: "Pizza Palace",
    type: "restaurant",
    description: "Wood-fired pizzas and Italian delicacies",
    rating: 4.7,
    image: "🍕",
    location: "CP, Delhi"
  },
  {
    id: 5,
    name: "Biryani Special",
    type: "dish",
    description: "Aromatic basmati rice with spices and meat",
    rating: 4.9,
    image: "🍚",
    price: 420
  }
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "restaurant" | "dish" | "cuisine">("all");

  useEffect(() => {
    const searchResults = () => {
      setLoading(true);
      
      setTimeout(() => {
        if (searchQuery.trim() === "") {
          setResults([]);
        } else {
          let filteredResults = searchData.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filter !== "all") {
            filteredResults = filteredResults.filter(item => item.type === filter);
          }

          setResults(filteredResults);
        }
        setLoading(false);
      }, 300);
    };

    searchResults();
  }, [searchQuery, filter]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "restaurant":
        return "bg-blue-100 text-blue-700";
      case "dish":
        return "bg-green-100 text-green-700";
      case "cuisine":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Search
          </h1>
          <p className="text-gray-600 text-xl">Find restaurants, dishes, and cuisines</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg mb-8">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for restaurants, dishes, cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-4 pl-12 bg-white/90 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {["all", "restaurant", "dish", "cuisine"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as any)}
                className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                  filter === filterType
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Searching...</p>
          </div>
        )}

        {/* Search Results */}
        {!loading && searchQuery && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Search Results ({results.length})
              </h2>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try searching with different keywords</p>
              </div>
            ) : (
              results.map((result) => (
                <div
                  key={result.id}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{result.image}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{result.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{result.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-gray-700 font-semibold">{result.rating}</span>
                          </div>
                          {result.location && (
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {result.location}
                            </div>
                          )}
                          {result.price && (
                            <div className="text-lg font-bold text-blue-600">₹{result.price}</div>
                          )}
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                          {result.type === "restaurant" ? "View Menu" : 
                           result.type === "dish" ? "Add to Cart" : "Explore"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              {["Biryani", "Pizza", "Chinese", "Italian", "North Indian", "South Indian", "Desserts", "Beverages"].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}