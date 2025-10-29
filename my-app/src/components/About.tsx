export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-xl">Bringing delicious food to your doorstep since 2020</p>
        </div>

        {/* Story Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020 with a simple mission: to connect food lovers with their favorite restaurants 
                  and discover new culinary experiences. What started as a small startup has grown into a 
                  platform serving millions of customers across India.
                </p>
                <p>
                  We believe that great food brings people together, and technology should make it easier 
                  to access the dishes you love. From local street food to fine dining, we partner with 
                  restaurants of all sizes to deliver exceptional meals to your doorstep.
                </p>
                <p>
                  Our commitment to quality, speed, and customer satisfaction drives everything we do. 
                  We're not just a food delivery service – we're your culinary companion, helping you 
                  explore new flavors and satisfy your cravings.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">🍽️</div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Restaurant Partners</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">4.8★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Quality First",
              description: "We partner only with restaurants that maintain the highest standards of food quality and hygiene.",
              icon: "⭐",
              color: "from-yellow-500 to-orange-500"
            },
            {
              title: "Lightning Fast",
              description: "Advanced logistics and dedicated delivery partners ensure your food reaches you hot and fresh.",
              icon: "⚡",
              color: "from-blue-500 to-purple-500"
            },
            {
              title: "Customer Love",
              description: "24/7 support, easy refunds, and constant innovation to make your experience delightful.",
              icon: "❤️",
              color: "from-red-500 to-pink-500"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Priya Sharma", role: "CEO & Co-founder", avatar: "👩‍💼" },
              { name: "Rahul Singh", role: "CTO & Co-founder", avatar: "👨‍💻" },
              { name: "Anjali Patel", role: "Head of Operations", avatar: "👩‍🔧" },
              { name: "Vikash Kumar", role: "Head of Marketing", avatar: "👨‍📈" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize the food delivery experience by connecting people with diverse culinary 
              options while supporting local restaurants and creating opportunities for delivery partners. 
              We strive to make great food accessible to everyone, everywhere.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted and beloved food platform in India, fostering a vibrant food 
              ecosystem that benefits customers, restaurants, and delivery partners alike. We envision 
              a future where technology seamlessly connects food lovers with extraordinary culinary experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}