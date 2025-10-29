"use client";

import { useState } from "react";

interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  dealPrice: number;
  discount: number;
  restaurant: string;
  image: string;
  validUntil: string;
  itemsIncluded: string[];
  category: "combo" | "discount" | "bogo" | "special";
  isActive: boolean;
  soldCount: number;
  maxLimit: number;
}

const deals: Deal[] = [
  {
    id: "DEAL001",
    title: "Family Feast Combo",
    description: "Perfect meal for 4 people with variety of dishes",
    originalPrice: 1200,
    dealPrice: 799,
    discount: 33,
    restaurant: "Spice Garden",
    image: "🍽️",
    validUntil: "2024-03-25",
    itemsIncluded: ["2x Butter Chicken", "4x Naan", "2x Rice", "Dessert"],
    category: "combo",
    isActive: true,
    soldCount: 45,
    maxLimit: 100
  },
  {
    id: "DEAL002", 
    title: "Buy 1 Get 1 Pizza",
    description: "Order any large pizza and get another one free",
    originalPrice: 600,
    dealPrice: 300,
    discount: 50,
    restaurant: "Pizza Palace",
    image: "🍕",
    validUntil: "2024-03-20",
    itemsIncluded: ["2x Large Pizza", "Free Garlic Bread"],
    category: "bogo",
    isActive: true,
    soldCount: 78,
    maxLimit: 150
  },
  {
    id: "DEAL003",
    title: "Healthy Bowl Special",
    description: "Nutritious and delicious bowl at special price",
    originalPrice: 350,
    dealPrice: 249,
    discount: 29,
    restaurant: "Green Bowl",
    image: "🥗",
    validUntil: "2024-03-30",
    itemsIncluded: ["Quinoa Bowl", "Fresh Juice", "Salad"],
    category: "special",
    isActive: true,
    soldCount: 32,
    maxLimit: 80
  },
  {
    id: "DEAL004",
    title: "Sushi Platter Deal",
    description: "Premium sushi experience at unbeatable price",
    originalPrice: 1500,
    dealPrice: 999,
    discount: 33,
    restaurant: "Sushi Master",
    image: "🍣",
    validUntil: "2024-03-22",
    itemsIncluded: ["20pc Mixed Sushi", "Miso Soup", "Wasabi & Ginger"],
    category: "discount",
    isActive: true,
    soldCount: 15,
    maxLimit: 50
  }
];

export default function Deals() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Deals", icon: "🎯" },
    { key: "combo", label: "Combo Deals", icon: "🍽️" },
    { key: "bogo", label: "Buy 1 Get 1", icon: "🎁" },
    { key: "discount", label: "Discounts", icon: "💰" },
    { key: "special", label: "Special Offers", icon: "⭐" }
  ];

  const filteredDeals = filter === "all" 
    ? deals 
    : deals.filter(deal => deal.category === filter);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getProgressPercentage = (sold: number, max: number) => {
    return Math.min((sold / max) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Today's Deals
          </h1>
          <p className="text-gray-600 text-xl">Limited time offers you can't miss</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  filter === category.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Deal Header */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-bold">
                  {deal.discount}% OFF
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{deal.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{deal.title}</h3>
                    <p className="text-red-100 text-sm mb-2">{deal.restaurant}</p>
                    <p className="text-red-50 text-sm">{deal.description}</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>

              {/* Deal Content */}
              <div className="p-6">
                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-green-600">₹{deal.dealPrice}</span>
                      <span className="text-lg text-gray-500 line-through">₹{deal.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      You save ₹{deal.originalPrice - deal.dealPrice}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Valid until</div>
                    <div className="font-semibold text-orange-600">{formatDate(deal.validUntil)}</div>
                  </div>
                </div>

                {/* Items Included */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What's included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {deal.itemsIncluded.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{deal.soldCount} sold</span>
                    <span>{deal.maxLimit} available</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(deal.soldCount, deal.maxLimit)}%` }}
                    ></div>
                  </div>
                  {deal.maxLimit - deal.soldCount <= 10 && (
                    <div className="text-red-600 text-sm font-medium mt-1">
                      Only {deal.maxLimit - deal.soldCount} left!
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                  Grab This Deal
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Terms & Info */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Deal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">How It Works</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Browse available deals and select your favorite
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Add the deal to your cart and proceed to checkout
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Discount is automatically applied at checkout
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  Enjoy your meal at the discounted price
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">•</span>
                  Deals are valid for limited time only
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">•</span>
                  Subject to restaurant availability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">•</span>
                  Cannot be combined with other offers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">•</span>
                  Terms and conditions apply
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="text-blue-100 mb-6">
              These amazing deals won't last long. Order now and save big on your favorite meals.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
              View All Restaurants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}