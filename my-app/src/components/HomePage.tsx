"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Text Flip Effect Heading Component
function TextFlipHeading() {
    return (
        <div className="mb-8 text-center">
            <LayoutTextFlip
                text=""
                words={[
                    "Premium Culinary Excellence",
                    "From Soil to Soul",
                    "Crafted with Pure Passion",
                    "Elegance in Every Bite",
                    "Where Flavor Meets Emotion",
                    "Taste Perfected by Time",
                    "Artistry Served with Love"
                ]}
                duration={3000}
            />
        </div>
    );
}

interface FeaturedRestaurant {
    id: number;
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    offer: string;
}

const featuredRestaurants: FeaturedRestaurant[] = [
    {
        id: 1,
        name: "Spice Garden",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center",
        cuisine: "Indian",
        rating: 4.8,
        deliveryTime: "20-30 min",
        offer: "40% OFF"
    },
    {
        id: 2,
        name: "Pizza Palace",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center",
        cuisine: "Italian",
        rating: 4.7,
        deliveryTime: "25-35 min",
        offer: "Buy 1 Get 1"
    },
    {
        id: 3,
        name: "Sushi Master",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&crop=center",
        cuisine: "Japanese",
        rating: 4.9,
        deliveryTime: "30-40 min",
        offer: "30% OFF"
    },
    {
        id: 4,
        name: "Green Bowl",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&crop=center",
        cuisine: "Healthy",
        rating: 4.6,
        deliveryTime: "15-25 min",
        offer: "Free Delivery"
    }
];

const cuisines = [
    { name: "Indian", icon: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=150&h=150&fit=crop&crop=center", count: "120+ restaurants" },
    { name: "Italian", icon: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=150&h=150&fit=crop&crop=center", count: "85+ restaurants" },
    { name: "Chinese", icon: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=150&h=150&fit=crop&crop=center", count: "95+ restaurants" },
    { name: "Japanese", icon: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=150&h=150&fit=crop&crop=center", count: "45+ restaurants" },
    { name: "Mexican", icon: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=150&h=150&fit=crop&crop=center", count: "60+ restaurants" },
    { name: "Thai", icon: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=150&h=150&fit=crop&crop=center", count: "40+ restaurants" },
    { name: "Healthy", icon: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&crop=center", count: "30+ restaurants" },
    { name: "Desserts", icon: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=150&h=150&fit=crop&crop=center", count: "25+ restaurants" }
];

export default function HomePage() {
    const [deliveryAddress, setDeliveryAddress] = useState("");

    // Autoplay plugin configuration
    const plugin = Autoplay({ delay: 4000, stopOnInteraction: false });

    // Ultra high-quality food images for hero slider from Foodiesfeed
    const heroImages = [
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg", // Gourmet Burger
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1920&h=1080&fit=crop&crop=center&q=85", // Fried Chicken
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&crop=center&q=85", // Food Spread
        "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg", // Artisan Pizza
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&h=1080&fit=crop&crop=center&q=85", // Pancakes Stack
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&h=1080&fit=crop&crop=center&q=85"  // Fresh Salad Bowl
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
            {/* Hero Section with Sliding Food Images */}
            <div className="relative h-[50vh] overflow-hidden">
                {/* Carousel Background Images */}
                <Carousel
                    plugins={[plugin]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="absolute inset-0"
                >
                    <CarouselContent className="ml-0">
                        {heroImages.map((image, index) => (
                            <CarouselItem key={index} className="pl-0 basis-full">
                                <div className="relative w-full h-full">
                                    <img
                                        src={image}
                                        alt={`Delicious food ${index + 1}`}
                                        className="w-full h-[50vh] object-cover brightness-110 contrast-105 saturate-110"
                                        loading="lazy"
                                    />
                                    {/* Lighter Gradient Overlay for Better Image Visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/40"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20"></div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <div className="relative z-10 flex items-center justify-center h-full px-6">
                    <div className="text-center text-white max-w-5xl">
                        {/* Text Flip Effect Heading */}
                        <TextFlipHeading />

                        {/* Enhanced Value Propositions */}
                        <div className="flex flex-wrap justify-center gap-6 mb-8 text-base">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/30 shadow-xl">
                                <span className="text-2xl">⚡</span>
                                <span className="font-semibold text-white font-sans">30 Min Delivery</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/30 shadow-xl">
                                <span className="text-2xl">💳</span>
                                <span className="font-semibold text-white font-sans">Safe Payments</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/30 shadow-xl">
                                <span className="text-2xl">🏆</span>
                                <span className="font-semibold text-white font-sans">4.8★ Rating</span>
                            </div>
                        </div>

                        {/* Statistics Tags */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
                            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-lg">
                                <span className="text-lg font-bold text-white font-sans">500+</span>
                                <span className="text-white/90 font-medium font-sans">Partner Restaurants</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-lg">
                                <span className="text-lg font-bold text-white font-sans">1M+</span>
                                <span className="text-white/90 font-medium font-sans">Happy Customers</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-lg">
                                <span className="text-lg font-bold text-white font-sans">4.8★</span>
                                <span className="text-white/90 font-medium font-sans">Customer Rating</span>
                            </div>
                        </div>

                        {/* Order Now Section */}
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto border border-white/20">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        value={deliveryAddress}
                                        onChange={(e) => setDeliveryAddress(e.target.value)}
                                        placeholder="Enter delivery address"
                                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-gray-900 font-medium placeholder-gray-500 text-base"
                                    />
                                </div>
                                <Link
                                    href="/restaurants"
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center whitespace-nowrap shadow-xl text-base"
                                >
                                    Order Now
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Popular Cuisines */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 font-sans">
                            Popular Cuisines
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
                            Order from your favorite cuisine types with fast delivery
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {cuisines.map((cuisine, index) => (
                            <Link
                                key={index}
                                href={`/restaurants?cuisine=${cuisine.name.toLowerCase()}`}
                                className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-xl overflow-hidden text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group hover:from-blue-600 hover:to-indigo-800"
                            >
                                <div className="relative h-24 mb-4">
                                    <img
                                        src={cuisine.icon}
                                        alt={cuisine.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-110 contrast-105 saturate-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="px-4 pb-4">
                                    <div className="font-bold text-xl text-white mb-2 drop-shadow font-sans">{cuisine.name}</div>
                                    <div className="text-lg text-white/90 font-medium font-sans">{cuisine.count}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Restaurants */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-sans">
                                Top Restaurants Near You
                            </h2>
                            <p className="text-gray-600 font-sans">
                                Highest rated restaurants with fastest delivery
                            </p>
                        </div>
                        <Link
                            href="/restaurants"
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                        >
                            View All
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredRestaurants.map((restaurant) => (
                            <Link
                                key={restaurant.id}
                                href={`/restaurants/${restaurant.id}`}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                    {restaurant.offer && (
                                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                                            {restaurant.offer}
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <h3 className="font-bold text-xl text-gray-900 mb-3 font-sans">{restaurant.name}</h3>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-orange-500 text-lg">★</span>
                                            <span className="font-semibold text-lg font-sans">{restaurant.rating}</span>
                                        </div>
                                        <span className="text-base text-gray-600 font-medium font-sans">{restaurant.deliveryTime}</span>
                                    </div>
                                    <div className="text-gray-600 text-base font-medium font-sans">{restaurant.cuisine}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Features */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Enterprise-Grade Food Delivery
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Advanced technology and professional partnerships ensure the highest quality service for our customers
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 rounded-xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-center drop-shadow">Quality Assurance</h3>
                            <p className="text-white/90 text-center text-base leading-relaxed">ISO certified kitchens with regular health inspections and quality control</p>
                        </div>

                        <div className="bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 rounded-xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-center drop-shadow">Real-Time Tracking</h3>
                            <p className="text-white/90 text-center text-base leading-relaxed">Advanced GPS tracking with live updates from kitchen to doorstep</p>
                        </div>

                        <div className="bg-gradient-to-br from-rose-500 via-pink-600 to-red-700 rounded-xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-center drop-shadow">Data Security</h3>
                            <p className="text-white/90 text-center text-base leading-relaxed">Bank-level encryption and secure payment processing with PCI compliance</p>
                        </div>

                        <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 rounded-xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-center drop-shadow">24/7 Support</h3>
                            <p className="text-white/90 text-center text-base leading-relaxed">Professional customer service with multilingual support and instant resolution</p>
                        </div>
                    </div>
                </div>
            </section>





            {/* Business Intelligence & Analytics */}
            <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Advanced Business Intelligence
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Leveraging cutting-edge technology and data analytics to optimize every aspect of the food delivery experience
                        </p>
                    </div>

                    {/* Main Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

                        {/* Real-Time Analytics Card */}
                        <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center mb-6">
                                <div className="w-18 h-18 bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white drop-shadow-lg">Predictive Analytics</h3>
                                    <p className="text-white/90">AI-powered demand forecasting</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-white/95">Order Volume Prediction</span>
                                    <span className="text-yellow-300 font-semibold drop-shadow">96% Accuracy</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/95">Peak Hour Analysis</span>
                                    <span className="text-yellow-300 font-semibold drop-shadow">Real-Time</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/95">Supply Chain Optimization</span>
                                    <span className="text-yellow-300 font-semibold drop-shadow">Advanced ML</span>
                                </div>
                            </div>
                        </div>

                        {/* Performance Metrics Card */}
                        <div className="bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600 rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center mb-6">
                                <div className="w-18 h-18 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white drop-shadow-lg">Performance Metrics</h3>
                                    <p className="text-white/90">Enterprise-level monitoring</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-5 bg-gradient-to-br from-purple-300 to-violet-400 rounded-lg shadow-lg">
                                    <div className="text-3xl font-bold text-white mb-2 drop-shadow">99.9%</div>
                                    <div className="text-base text-white/90 font-medium">Uptime SLA</div>
                                </div>
                                <div className="text-center p-5 bg-gradient-to-br from-violet-300 to-indigo-400 rounded-lg shadow-lg">
                                    <div className="text-3xl font-bold text-white mb-2 drop-shadow">&lt;2s</div>
                                    <div className="text-base text-white/90 font-medium">API Response</div>
                                </div>
                                <div className="text-center p-5 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg shadow-lg">
                                    <div className="text-3xl font-bold text-white mb-2 drop-shadow">15s</div>
                                    <div className="text-base text-white/90 font-medium">Avg Prep Time</div>
                                </div>
                                <div className="text-center p-5 bg-gradient-to-br from-purple-400 to-violet-500 rounded-lg shadow-lg">
                                    <div className="text-3xl font-bold text-white mb-2 drop-shadow">4.9★</div>
                                    <div className="text-base text-white/90 font-medium">Partner Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="bg-gradient-to-br from-slate-400 via-gray-500 to-zinc-600 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">Technology Infrastructure</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-zinc-600 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-2 drop-shadow text-lg">Microservices</h4>
                                <p className="text-base text-white/90">Scalable Architecture</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-2 drop-shadow text-lg">Cloud Native</h4>
                                <p className="text-base text-white/90">AWS Infrastructure</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-2 drop-shadow text-lg">AI/ML Engine</h4>
                                <p className="text-base text-white/90">Smart Optimization</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-2 drop-shadow text-lg">Blockchain</h4>
                                <p className="text-base text-white/90">Secure Transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA with Food Background */}
            <section className="relative py-20 px-6 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&crop=center&q=85"
                        alt="Delicious food spread"
                        className="w-full h-full object-cover brightness-110 contrast-105 saturate-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 via-red-600/40 to-orange-700/50"></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg font-sans">
                            Ready to Order?
                        </h2>
                        <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow font-sans">
                            Join over 1 million satisfied customers. Get your favorite food delivered in minutes with our premium service.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link
                                href="/restaurants"
                                className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 font-sans"
                            >
                                🍽️ Order Now
                            </Link>
                            <Link
                                href="/offers"
                                className="bg-white/15 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold hover:bg-white/25 transition-all duration-300 text-lg border-2 border-white/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-sans"
                            >
                                🎯 View Offers
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white drop-shadow">1M+</div>
                                <div className="text-white/90 text-sm">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white drop-shadow">500+</div>
                                <div className="text-white/90 text-sm">Restaurant Partners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white drop-shadow">30min</div>
                                <div className="text-white/90 text-sm">Avg Delivery Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}