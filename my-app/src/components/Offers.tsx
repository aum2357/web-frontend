"use client";

import { useState } from "react";

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  validUntil: string;
  minOrder: number;
  maxDiscount: number;
  category: "all" | "restaurants" | "new_users" | "premium";
  image: string;
  isActive: boolean;
}

const offers: Offer[] = [
  {
    id: "WELCOME50",
    title: "Welcome Offer",
    description: "Get 50% off on your first order",
    discount: "50% OFF",
    code: "WELCOME50",
    validUntil: "2024-12-31",
    minOrder: 200,
    maxDiscount: 150,
    category: "new_users",
    image: "🎉",
    isActive: true
  },
  {
    id: "SAVE20",
    title: "Weekend Special",
    description: "Save 20% on all orders this weekend",
    discount: "20% OFF",
    code: "SAVE20",
    validUntil: "2024-03-25",
    minOrder: 300,
    maxDiscount: 100,
    category: "all",
    image: "🎯",
    isActive: true
  },
  {
    id: "PREMIUM30",
    title: "Premium Member Exclusive",
    description: "Extra 30% off for premium members",
    discount: "30% OFF",
    code: "PREMIUM30",
    validUntil: "2024-04-30",
    minOrder: 500,
    maxDiscount: 200,
    category: "premium",
    image: "👑",
    isActive: true
  },
  {
    id: "RESTAURANT25",
    title: "Restaurant Partner Deal",
    description: "25% off on select partner restaurants",
    discount: "25% OFF",
    code: "RESTAURANT25",
    validUntil: "2024-03-20",
    minOrder: 400,
    maxDiscount: 120,
    category: "restaurants",
    image: "🏪",
    isActive: true
  }
];

export default function Offers() {
  const [filter, setFilter] = useState<"all" | "restaurants" | "new_users" | "premium">("all");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredOffers = offers.filter(offer => 
    filter === "all" ? true : offer.category === filter
  );

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "new_users":
        return "bg-green-100 text-green-700";
      case "premium":
        return "bg-purple-100 text-purple-700";
      case "restaurants":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Special Offers
          </h1>
          <p className="text-gray-600 text-xl">Save more on your favorite meals</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4">
            {[
              { key: "all", label: "All Offers" },
              { key: "new_users", label: "New Users" },
              { key: "premium", label: "Premium Members" },
              { key: "restaurants", label: "Restaurant Deals" }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  filter === tab.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Offer Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-3xl mb-2">{offer.image}</div>
                    <h3 className="text-xl font-bold mb-1">{offer.title}</h3>
                    <p className="text-blue-100">{offer.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{offer.discount}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(offer.category)} bg-white/20 backdrop-blur`}>
                      {offer.category.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
              </div>

              {/* Offer Details */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Minimum Order:</span>
                    <span className="font-semibold text-gray-900">₹{offer.minOrder}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Max Discount:</span>
                    <span className="font-semibold text-gray-900">₹{offer.maxDiscount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Valid Until:</span>
                    <span className="font-semibold text-gray-900">
                      {new Date(offer.validUntil).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Promo Code</div>
                      <div className="text-lg font-bold text-gray-900">{offer.code}</div>
                    </div>
                    <button
                      onClick={() => copyCode(offer.code)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        copiedCode === offer.code
                          ? "bg-green-500 text-white"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {copiedCode === offer.code ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                  Apply & Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">General Terms</h3>
              <ul className="space-y-2">
                <li>• Offers are valid for a limited time only</li>
                <li>• Each promo code can be used once per user</li>
                <li>• Offers cannot be combined with other promotions</li>
                <li>• Minimum order value must be met before taxes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Important Notes</h3>
              <ul className="space-y-2">
                <li>• Discounts are applied automatically at checkout</li>
                <li>• Offers are subject to restaurant availability</li>
                <li>• We reserve the right to modify or cancel offers</li>
                <li>• Contact support for any offer-related issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}