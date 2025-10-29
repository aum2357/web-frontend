"use client";

import { useState } from "react";

interface OrderSummary {
  subtotal: number;
  deliveryFee: number;
  taxes: number;
  discount: number;
  total: number;
}

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Address
    address: "",
    landmark: "",
    city: "",
    pincode: "",
    
    // Contact
    phone: "",
    email: "",
    
    // Payment
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: ""
  });

  const orderSummary: OrderSummary = {
    subtotal: 850,
    deliveryFee: 30,
    taxes: 43,
    discount: 50,
    total: 873
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully! You'll receive a confirmation shortly.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/20 font-sans relative overflow-hidden">
      {/* Beautiful Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/8 to-orange-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-cyan-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Professional Header with Background */}
      <div className="py-16 px-6 relative overflow-hidden min-h-[400px] z-10">
        {/* Beautiful Gradient Background Matching Footer */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Professional Header Container with Glassy Effect */}
          <div className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl mx-auto max-w-4xl border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-xl border border-white/25">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Secure Checkout
              </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Complete Your
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Order
              </span>
            </h1>
            <p className="text-gray-200 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Secure payment processing with 256-bit SSL encryption for your safety
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 relative z-20">

        {/* Enhanced Progress Steps */}
        <div className="bg-gradient-to-br from-white/98 via-blue-50/50 to-purple-50/60 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl mb-8 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/10 to-pink-200/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/10 to-purple-200/10 rounded-full blur-lg"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            {[
              { num: 1, title: "Delivery Address", icon: "🏠", desc: "Where to deliver" },
              { num: 2, title: "Payment Method", icon: "💳", desc: "Choose payment" },
              { num: 3, title: "Order Confirmation", icon: "✅", desc: "Review & confirm" }
            ].map((stepItem, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex flex-col items-center text-center ${step >= stepItem.num ? "text-blue-600" : "text-gray-400"}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 transition-all duration-300 shadow-lg ${
                    step >= stepItem.num 
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white transform scale-110" 
                      : "bg-white border-2 border-gray-200 text-gray-400"
                  }`}>
                    {step > stepItem.num ? (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    ) : stepItem.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-lg">{stepItem.title}</span>
                    <div className="text-sm opacity-75">{stepItem.desc}</div>
                  </div>
                </div>
                {index < 2 && (
                  <div className="flex-1 mx-8 relative">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-500 ${
                        step > stepItem.num ? "w-full bg-gradient-to-r from-blue-500 to-purple-500" : "w-0"
                      }`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-gradient-to-br from-white/98 via-blue-50/40 to-purple-50/50 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/15 to-pink-200/15 rounded-full blur-lg"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-200/15 to-purple-200/15 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Delivery Address</h2>
                      <p className="text-gray-600 font-medium">Where should we deliver your delicious food?</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Landmark</label>
                      <input
                        type="text"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleInputChange}
                        placeholder="Nearby landmark"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="123456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg transform hover:scale-[1.02] text-lg"
                  >
                    Continue to Payment →
                  </button>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-gradient-to-br from-white/98 via-green-50/40 to-blue-50/50 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full blur-lg"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-200/15 to-pink-200/15 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Payment Method</h2>
                      <p className="text-gray-600 font-medium">Choose your preferred payment option</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: "card", label: "Credit/Debit Card", icon: "💳" },
                      { id: "upi", label: "UPI", icon: "📱" },
                      { id: "cod", label: "Cash on Delivery", icon: "💰" }
                    ].map((method) => (
                      <div key={method.id} className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === method.id 
                          ? "border-blue-500 bg-blue-50" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setFormData({...formData, paymentMethod: method.id})}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">{method.icon}</div>
                          <div className="font-semibold">{method.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "upi" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        placeholder="yourname@paytm"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg transform hover:scale-[1.02]"
                    >
                      Review Order →
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-gradient-to-br from-white/98 via-emerald-50/40 to-green-50/50 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/15 to-emerald-200/15 rounded-full blur-lg"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-200/15 to-purple-200/15 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Order Confirmation</h2>
                      <p className="text-gray-600 font-medium">Review your order details before placing</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-2 border-green-200/50 rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-green-200/20 rounded-full blur-lg"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-2xl font-bold text-green-800 mb-2">Ready to Place Order!</h3>
                        <p className="text-green-700 font-medium">Please review your details before confirming</p>
                      </div>
                    </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Delivery Address</h4>
                      <p className="text-gray-600">{formData.address || "Address not provided"}</p>
                      <p className="text-gray-600">{formData.city} - {formData.pincode}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Payment Method</h4>
                      <p className="text-gray-600 capitalize">{formData.paymentMethod.replace('_', ' ')}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg transform hover:scale-[1.02] text-lg"
                    >
                      🛒 Place Order
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Order Summary Sidebar */}
          <div className="bg-gradient-to-br from-white/98 via-orange-50/40 to-yellow-50/50 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl h-fit sticky top-8 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-200/10 to-pink-200/10 rounded-full blur-lg"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-200/10 to-purple-200/10 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Order Summary</h3>
              </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{orderSummary.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold">₹{orderSummary.deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes & Fees</span>
                <span className="font-semibold">₹{orderSummary.taxes}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount Applied</span>
                <span className="font-semibold">-₹{orderSummary.discount}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{orderSummary.total}</span>
              </div>
            </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50">
                <div className="text-center">
                  <div className="text-sm text-gray-600 font-medium mb-2">🚚 Estimated delivery time</div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">25-35 mins</div>
                  <div className="text-xs text-gray-500 mt-1">Fast & reliable delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                SecureCheckout
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Safe, secure, and lightning-fast checkout experience. Your data is protected with industry-standard encryption.
              </p>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-100">Payment Options</h4>
              <div className="space-y-2">
                {['Credit/Debit Cards', 'UPI Payments', 'Cash on Delivery', 'Digital Wallets'].map((payment) => (
                  <div key={payment} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-green-400">✓</span>
                    {payment}
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-100">Security</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">🔒</span>
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">🛡️</span>
                  <span>PCI DSS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">🔐</span>
                  <span>256-bit Security</span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-100">24/7 Support</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📞 +91 98765 43210</p>
                <p>✉️ checkout@foodiemart.com</p>
                <p>💬 Live Chat Available</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 FoodieCheckout. All rights reserved. | Secure Payment Processing</p>
          </div>
        </div>
      </footer>
    </div>
  );
}