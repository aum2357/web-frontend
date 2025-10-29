"use client";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  itemCount: number;
  bgColor: string;
  popularItems: string[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "North Indian",
    description: "Rich gravies, tandoor delights, and aromatic biryanis",
    icon: "🍛",
    itemCount: 156,
    bgColor: "from-red-500 to-orange-500",
    popularItems: ["Butter Chicken", "Naan", "Biryani", "Dal Makhani"]
  },
  {
    id: 2,
    name: "South Indian",
    description: "Crispy dosas, fluffy idlis, and coconut-based curries",
    icon: "🥞",
    itemCount: 98,
    bgColor: "from-green-500 to-teal-500",
    popularItems: ["Masala Dosa", "Idli Sambhar", "Uttapam", "Rasam"]
  },
  {
    id: 3,
    name: "Chinese",
    description: "Stir-fried noodles, dumplings, and authentic Chinese flavors",
    icon: "🍜",
    itemCount: 87,
    bgColor: "from-yellow-500 to-red-500",
    popularItems: ["Hakka Noodles", "Manchurian", "Spring Rolls", "Fried Rice"]
  },
  {
    id: 4,
    name: "Italian",
    description: "Wood-fired pizzas, creamy pastas, and Mediterranean delights",
    icon: "🍝",
    itemCount: 124,
    bgColor: "from-green-600 to-red-600",
    popularItems: ["Margherita Pizza", "Pasta Alfredo", "Lasagna", "Risotto"]
  },
  {
    id: 5,
    name: "Fast Food",
    description: "Quick bites, burgers, sandwiches, and street food favorites",
    icon: "🍔",
    itemCount: 203,
    bgColor: "from-purple-500 to-pink-500",
    popularItems: ["Burger", "French Fries", "Sandwich", "Wraps"]
  },
  {
    id: 6,
    name: "Desserts",
    description: "Sweet treats, ice creams, cakes, and traditional sweets",
    icon: "🍰",
    itemCount: 89,
    bgColor: "from-pink-500 to-purple-500",
    popularItems: ["Ice Cream", "Gulab Jamun", "Chocolate Cake", "Kulfi"]
  },
  {
    id: 7,
    name: "Beverages",
    description: "Fresh juices, smoothies, coffee, tea, and refreshing drinks",
    icon: "🥤",
    itemCount: 67,
    bgColor: "from-blue-500 to-cyan-500",
    popularItems: ["Fresh Lime", "Coffee", "Smoothie", "Lassi"]
  },
  {
    id: 8,
    name: "Healthy",
    description: "Nutritious salads, organic foods, and health-conscious options",
    icon: "🥗",
    itemCount: 78,
    bgColor: "from-green-400 to-emerald-500",
    popularItems: ["Greek Salad", "Quinoa Bowl", "Smoothie Bowl", "Grilled Chicken"]
  },
  {
    id: 9,
    name: "Seafood",
    description: "Fresh catch, grilled fish, prawns, and coastal delicacies",
    icon: "🦐",
    itemCount: 54,
    bgColor: "from-blue-600 to-indigo-600",
    popularItems: ["Fish Curry", "Prawn Fry", "Crab Masala", "Fish Tikka"]
  }
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
      {/* Header Section with Food Background */}
      <div className="py-16 px-6 relative overflow-hidden min-h-[500px]">
        {/* Background Food Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529042410759-befb1204b468?w=1920&h=600&fit=crop&crop=center" 
            alt="Fresh Food Variety Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Wider Header Container with Footer-Matched Gradient */}
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-2xl backdrop-blur-sm border border-white/20 font-sans">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Culinary Categories
            </div>
            <h1 className="text-4xl font-bold font-sans text-white mb-4 drop-shadow-2xl">
              Food Categories
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-sans">
              Explore delicious cuisines from around the world with our curated selection
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div className="px-2 pb-12 pt-12">
        {/* Categories Grid - 4 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-start max-w-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Category Header with Gradient */}
              <div className={`bg-gradient-to-br ${category.bgColor} p-8 text-center text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <div className="text-white/90 text-sm font-medium">
                    {category.itemCount} items available
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
              </div>

              {/* Category Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Items:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.popularItems.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group-hover:shadow-lg">
                  Explore {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Categories */}
        {/* Enhanced Footer Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-12 mt-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sans mb-4">Why Choose Our Food Categories?</h2>
            <p className="text-gray-300 text-xl font-sans max-w-2xl mx-auto">
              Discover culinary excellence through our carefully curated food categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <div className="text-3xl font-bold font-sans text-blue-400 mb-2">9+</div>
              <div className="text-gray-300 font-medium font-sans">Curated Categories</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">🌟</div>
              <div className="text-3xl font-bold font-sans text-green-400 mb-2">500+</div>
              <div className="text-gray-300 font-medium font-sans">Premium Partners</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <div className="text-3xl font-bold font-sans text-yellow-400 mb-2">1000+</div>
              <div className="text-gray-300 font-medium font-sans">Food Items</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">⭐</div>
              <div className="text-3xl font-bold font-sans text-purple-400 mb-2">4.8★</div>
              <div className="text-gray-300 font-medium font-sans">Excellence Rating</div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-bold font-sans mb-2">Quality Selection</h3>
              <p className="text-gray-400 font-sans">Hand-picked restaurants and verified quality standards</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-xl font-bold font-sans mb-2">Category Experts</h3>
              <p className="text-gray-400 font-sans">Curated by food experts for authentic experiences</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl font-bold font-sans mb-2">Premium Experience</h3>
              <p className="text-gray-400 font-sans">Exclusive categories and priority recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}