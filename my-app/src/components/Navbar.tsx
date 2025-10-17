"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) {
      setShowLeftArrow(false);
      setShowRightArrow(false);
      setScrollProgress(0);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    // Only show arrows if content truly overflows
    const hasOverflow = scrollWidth > clientWidth;
    
    // Left arrow: Only show if user has scrolled past the first navigation item
    // We need to account for the ml-20 (80px) margin
    const canScrollLeft = hasOverflow && scrollLeft > 90; // 80px margin + 10px buffer
    
    // Right arrow: Show if there's more content to scroll
    const canScrollRight = hasOverflow && scrollLeft < (scrollWidth - clientWidth - 10);
    
    // Calculate scroll progress
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    
    setShowLeftArrow(canScrollLeft);
    setShowRightArrow(canScrollRight);
    setScrollProgress(Math.max(0, Math.min(100, progress)));
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Ensure we start at the beginning
    container.scrollLeft = 0;
    
    // Initial state check
    const checkArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const hasOverflow = scrollWidth > clientWidth;
      
      // Left arrow only when scrolled past the margin area (80px + buffer)
      const canScrollLeft = hasOverflow && scrollLeft > 90;
      const canScrollRight = hasOverflow && scrollLeft < (scrollWidth - clientWidth - 10);
      
      // Calculate initial scroll progress
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      
      setShowLeftArrow(canScrollLeft);
      setShowRightArrow(canScrollRight);
      setScrollProgress(Math.max(0, Math.min(100, progress)));
    };

    // Check after DOM settles
    setTimeout(checkArrows, 100);

    // Add event listeners
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkArrows);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkArrows);
    };
  }, []);

  return (
    <nav className="relative z-50 font-sans antialiased border-b border-gray-200/30 shadow-lg" style={{ fontFamily: 'var(--font-geist-sans)', backgroundColor: '#F0FFFF' }}>
      <div className="relative w-full py-4">
        {/* Left scroll arrow - with smart visibility */}
        {showLeftArrow && (
          <button 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/40 backdrop-blur-md rounded-full p-3 border border-gray-200/50 hover:border-gray-300/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-110 group"
            onClick={scrollLeft}
          >
            <span className="text-gray-700 text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">‹</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        )}
        
        {/* Right scroll arrow - with smart visibility */}
        {showRightArrow && (
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/40 backdrop-blur-md rounded-full p-3 border border-gray-200/50 hover:border-gray-300/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-110 group"
            onClick={scrollRight}
          >
            <span className="text-gray-700 text-xl font-bold group-hover:text-purple-600 transition-colors duration-300">›</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        )}

        {/* Scroll progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200/30">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/30"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollable-navbar scroll-container py-1" 
          style={{ 
            width: '100%',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: 0,
            paddingRight: 0
          }}
          onScroll={handleScroll}
        >
          {/* Navigation Links - Horizontal scrollable with enhanced styling */}
          <div className="flex items-center space-x-3 whitespace-nowrap ml-22 mr-16" style={{ width: 'max-content' }}>
            <Link 
              href="/" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🏠</span>
                  <span className="text-sm">Home</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>
            
            <Link 
              href="/dashboard" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">📊</span>
                  <span className="text-sm">Dashboard</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>
            
            <Link 
              href="/menu" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🍔</span>
                  <span className="text-sm">Menu</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/search" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🔍</span>
                  <span className="text-sm">Search</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>
            
            <Link 
              href="/restaurants" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🧑‍🍳</span>
                  <span className="text-sm">Restaurants</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/categories" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🍔</span>
                  <span className="text-sm">Categories</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/favorites" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">💖</span>
                  <span className="text-sm">Favorites</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/cart" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🛒</span>
                  <span className="text-sm">Cart</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/checkout" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">💳</span>
                  <span className="text-sm">Checkout</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/orders" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">📦</span>
                  <span className="text-sm">Orders</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/profile" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">👤</span>
                  <span className="text-sm">Profile</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/contact" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">📞</span>
                  <span className="text-sm">Support</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/about" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🌍</span>
                  <span className="text-sm">About</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/blog" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">📝</span>
                  <span className="text-sm">Blog</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/offers" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🎁</span>
                  <span className="text-sm">Offers</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/deals" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🔥</span>
                  <span className="text-sm">Hot Deals</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/reviews" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">Reviews</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            <Link 
              href="/delivery" 
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex-shrink-0"
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                <span className="relative z-10 font-semibold text-white flex items-center gap-1.5">
                  <span className="text-sm">🚚</span>
                  <span className="text-sm">Delivery</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            

          </div>
        </div>
      </div>
    </nav>
  );
}