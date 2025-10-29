"use client";

import { useState, useEffect } from "react";

interface DeliveryZone {
  id: string;
  name: string;
  estimatedTime: string;
  deliveryFee: number;
  isActive: boolean;
  distance: number;
}

interface DeliveryPartner {
  id: string;
  name: string;
  rating: number;
  deliveries: number;
  image: string;
  isOnline: boolean;
  vehicleType: "bike" | "car" | "bicycle";
}

interface TrackingStatus {
  status: "preparing" | "ready" | "picked-up" | "on-way" | "delivered";
  message: string;
  time: string;
  location?: string;
}

const deliveryZones: DeliveryZone[] = [
  { id: "zone1", name: "Downtown", estimatedTime: "20-30 min", deliveryFee: 25, isActive: true, distance: 2.1 },
  { id: "zone2", name: "Uptown", estimatedTime: "25-35 min", deliveryFee: 30, isActive: true, distance: 3.5 },
  { id: "zone3", name: "Suburbs", estimatedTime: "35-45 min", deliveryFee: 40, isActive: true, distance: 5.8 },
  { id: "zone4", name: "Business District", estimatedTime: "15-25 min", deliveryFee: 20, isActive: true, distance: 1.5 }
];

const deliveryPartners: DeliveryPartner[] = [
  { id: "dp1", name: "Raj Kumar", rating: 4.8, deliveries: 1250, image: "🏍️", isOnline: true, vehicleType: "bike" },
  { id: "dp2", name: "Priya Sharma", rating: 4.9, deliveries: 890, image: "🚗", isOnline: true, vehicleType: "car" },
  { id: "dp3", name: "Ahmed Ali", rating: 4.7, deliveries: 2100, image: "🚲", isOnline: false, vehicleType: "bicycle" },
  { id: "dp4", name: "Sita Devi", rating: 4.6, deliveries: 750, image: "🏍️", isOnline: true, vehicleType: "bike" }
];

const trackingData: TrackingStatus[] = [
  { status: "preparing", message: "Restaurant is preparing your order", time: "2:30 PM", location: "Spice Garden Kitchen" },
  { status: "ready", message: "Order is ready for pickup", time: "2:45 PM", location: "Spice Garden" },
  { status: "picked-up", message: "Delivery partner picked up your order", time: "2:50 PM", location: "Spice Garden" },
  { status: "on-way", message: "On the way to your location", time: "2:55 PM", location: "Main Street" },
];

export default function Delivery() {
  const [selectedZone, setSelectedZone] = useState<string>("");
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev < trackingData.length - 1 ? prev + 1 : prev));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isTracking]);

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case "bike": return "🏍️";
      case "car": return "🚗";
      case "bicycle": return "🚲";
      default: return "🚚";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing": return "👨‍🍳";
      case "ready": return "📦";
      case "picked-up": return "🛵";
      case "on-way": return "🚚";
      case "delivered": return "✅";
      default: return "⏳";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Delivery Service
          </h1>
          <p className="text-gray-600 text-xl">Fast, reliable delivery to your doorstep</p>
        </div>

        {/* Delivery Coverage Map */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Coverage</h2>
          
          {/* Address Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter your delivery address</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
                placeholder="Enter your full address..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                Check
              </button>
            </div>
          </div>

          {/* Delivery Zones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryZones.map((zone) => (
              <div
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedZone === zone.id
                    ? "border-blue-500 bg-blue-50"
                    : zone.isActive
                    ? "border-gray-200 hover:border-blue-300 bg-white"
                    : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{zone.name}</h3>
                  <span className={`w-3 h-3 rounded-full ${zone.isActive ? "bg-green-500" : "bg-red-500"}`}></span>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <div>🕒 {zone.estimatedTime}</div>
                  <div>📍 {zone.distance} km</div>
                </div>
                <div className="text-lg font-bold text-blue-600">₹{zone.deliveryFee}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery Partners */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Delivery Partners</h2>
            <div className="space-y-4">
              {deliveryPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                        {getVehicleIcon(partner.vehicleType)}
                      </div>
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${partner.isOnline ? "bg-green-500" : "bg-gray-400"}`}></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>⭐ {partner.rating}</span>
                        <span>•</span>
                        <span>{partner.deliveries} deliveries</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    partner.isOnline 
                      ? "bg-green-100 text-green-700" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {partner.isOnline ? "Online" : "Offline"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Tracking Demo */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Track Your Order</h2>
              <button
                onClick={() => setIsTracking(!isTracking)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isTracking
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
                }`}
              >
                {isTracking ? "Stop Demo" : "Start Demo"}
              </button>
            </div>

            <div className="space-y-4">
              {trackingData.map((item, index) => (
                <div key={index} className={`flex items-start gap-4 ${index <= currentStep ? "opacity-100" : "opacity-40"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    index <= currentStep 
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
                      : "bg-gray-200 text-gray-500"
                  }`}>
                    {getStatusIcon(item.status)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.message}</h3>
                    <div className="text-sm text-gray-600">
                      <div>{item.time}</div>
                      {item.location && <div>📍 {item.location}</div>}
                    </div>
                  </div>
                  {index <= currentStep && (
                    <div className="text-green-600 font-bold">✓</div>
                  )}
                </div>
              ))}
            </div>

            {isTracking && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-blue-900">Live Tracking Active</span>
                </div>
                <p className="text-blue-800 text-sm">
                  Estimated delivery time: {currentStep < 2 ? "25-30 minutes" : currentStep < 3 ? "15-20 minutes" : "5-10 minutes"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Delivery Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                🚚
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Average delivery time of 30 minutes or less within city limits
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                📍
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">
                Track your order in real-time from restaurant to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                💯
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">
                Temperature-controlled delivery bags to maintain food quality
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center mt-8">
          <h3 className="text-2xl font-bold mb-4">Need Help with Delivery?</h3>
          <p className="text-blue-100 mb-6">
            Our support team is available 24/7 to assist you with any delivery-related queries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
              📞 Call Support
            </button>
            <button className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
              💬 Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}