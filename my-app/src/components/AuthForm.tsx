"use client";

import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface AuthFormProps {
  onSuccess?: () => void;
}

export default function AuthForm({ onSuccess }: AuthFormProps) {
  const { login, signup, isLoading } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    
    try {
      let success = false;
      
      if (mode === "login") {
        success = await login(email, password);
      } else {
        success = await signup(name, email, password);
      }
      
      if (success) {
        onSuccess?.();
      } else {
        setError("Authentication failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-start justify-center px-4 pt-16 pb-8 font-sans antialiased" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        <div className="relative w-full max-w-xl">
          <div className="relative bg-gradient-to-br from-white/95 via-orange-50/90 to-red-50/85 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-orange-200/30 w-full" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            {/* Beautiful gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-transparent to-red-100/30 rounded-2xl"></div>
            {/* Ubuntu-style orange accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-t-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 mb-4 shadow-lg">
                  {mode === "login" ? (
                    <span className="text-3xl text-white font-bold">ॐ</span>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  )}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {mode === "login" ? "श्री गणेशाय नमः" : "Join the Symphony of Taste."}
                </h2>
                <p className="text-gray-600 text-lg">
                  {mode === "login" 
                    ? "Unlock the Universe of Flavors." 
                    : "Flavor Awaits — Create Your Account."
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {mode === "signup" && (
                  <div className="group">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-left">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700/80"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    className="w-full bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700/80"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="group">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 text-left">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 pr-12 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700/80"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="relative bg-gradient-to-r from-orange-400 to-red-500 rounded-xl px-8 py-4 transition-all duration-300 group-hover:from-orange-300 group-hover:to-red-400">
                  <span className="relative z-10 font-semibold text-white flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {mode === "login" ? "Signing in..." : "Creating account..."}
                      </>
                    ) : mode === "login" ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Enter the paradise
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Create Account
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </button>
            </div>
          </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-orange-200/60"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-r from-orange-50 to-red-50 text-gray-600 rounded-full border border-orange-100/50">or</span>
                </div>
              </div>

              {/* Mode Toggle */}
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  {mode === "login" ? "New to our platform?" : "Already have an account?"}
                </p>
                <button
                  onClick={() => setMode(mode === "login" ? "signup" : "login")}
                  className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-orange-200/50 bg-gradient-to-r from-white/70 to-orange-50/60 text-gray-700 hover:from-orange-50 hover:to-red-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 shadow-sm"
                >
                  <span className="text-sm font-medium">
                    {mode === "login" ? "Create an account" : "Sign in instead"}
                  </span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
