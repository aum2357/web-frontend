"use client";

import { useState, useEffect } from "react";

interface DashboardStats {
  users: number;
  revenue: number;
  orders: number;
  growth: number;
}

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  status: 'success' | 'warning' | 'error';
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    users: 0,
    revenue: 0,
    orders: 0,
    growth: 0
  });

  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStats({
        users: 12543,
        revenue: 847520,
        orders: 3421,
        growth: 12.5
      });

      setActivities([
        { id: 1, user: "Rahul Sharma", action: "Created new order", time: "2 minutes ago", status: 'success' },
        { id: 2, user: "Priya Patel", action: "Updated profile", time: "5 minutes ago", status: 'success' },
        { id: 3, user: "Amit Kumar", action: "Payment failed", time: "12 minutes ago", status: 'error' },
        { id: 4, user: "Sunita Devi", action: "Created new account", time: "18 minutes ago", status: 'success' },
        { id: 5, user: "Vikas Gupta", action: "Order pending", time: "25 minutes ago", status: 'warning' }
      ]);

      setIsLoading(false);
    };

    loadDashboardData();
  }, []);

  const StatCard = ({ title, value, icon, trend, trendValue }: {
    title: string;
    value: string;
    icon: string;
    trend: 'up' | 'down';
    trendValue: string;
  }) => (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            trend === 'up' ? 'text-green-600' : 'text-red-500'
          }`}>
            <span>{trend === 'up' ? '↗' : '↘'}</span>
            <span>{trendValue}</span>
          </div>
        </div>
        <div className="text-4xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {icon}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  const ActivityItem = ({ activity }: { activity: Activity }) => (
    <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl border border-gray-100/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
        activity.status === 'success' ? 'bg-green-500' :
        activity.status === 'warning' ? 'bg-yellow-500' :
        'bg-red-500'
      }`}></div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-900 font-medium truncate">{activity.user}</p>
        <p className="text-gray-600 text-sm truncate">{activity.action}</p>
      </div>
      <div className="text-gray-500 text-xs whitespace-nowrap">
        {activity.time}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            {/* Header skeleton */}
            <div className="mb-8">
              <div className="h-8 bg-gray-200 rounded-lg w-64 mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-96"></div>
            </div>
            
            {/* Stats skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/80 rounded-2xl p-6 border border-gray-200/50">
                  <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
                  <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded w-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
            Business Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Complete overview of your business performance in one place</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Users"
            value={stats.users.toLocaleString()}
            icon="👥"
            trend="up"
            trendValue="+12.5%"
          />
          <StatCard 
            title="Total Revenue"
            value={`$${(stats.revenue / 1000).toFixed(1)}K`}
            icon="💰"
            trend="up"
            trendValue="+8.2%"
          />
          <StatCard 
            title="Total Orders"
            value={stats.orders.toLocaleString()}
            icon="📦"
            trend="up"
            trendValue="+15.3%"
          />
          <StatCard 
            title="Growth Rate"
            value={`${stats.growth}%`}
            icon="📈"
            trend="up"
            trendValue="+2.1%"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Activities</h2>
                <span className="text-sm text-gray-500">Today</span>
              </div>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Analytics */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <span className="flex items-center justify-center gap-2">
                    <span>📝</span>
                    Create New Order
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
                
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <span className="flex items-center justify-center gap-2">
                    <span>👤</span>
                    Add New User
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  <span className="flex items-center justify-center gap-2">
                    <span>📊</span>
                    View Reports
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Indicators</h3>
              
              {/* Simple progress bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Sales Target</span>
                    <span className="font-semibold text-gray-900">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-[78%] transition-all duration-500"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[92%] transition-all duration-500"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Task Completion</span>
                    <span className="font-semibold text-gray-900">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-[65%] transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Your Trusted Business Partner | Powered by Modern Analytics
          </p>
        </div>
      </div>
    </div>
  );
}