import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  Moon, Sun, Users, TrendingUp, DollarSign, Activity, 
  BarChart3,  PieChart ,
  Calendar, Filter, ArrowUp
} from 'lucide-react';

const Dashboard = () => {
  // State management
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeChart, setActiveChart] = useState('bar');
  const [timeFilter, setTimeFilter] = useState('30d');

  // Enhanced color palette for better visual appeal
  const colorPalette = {
    primary: '#6366f1',    // Indigo
    secondary: '#ec4899',  // Pink
    success: '#10b981',    // Emerald
    warning: '#f59e0b',    // Amber
    danger: '#ef4444',     // Red
    info: '#06b6d4',       // Cyan
    purple: '#8b5cf6',     // Violet
    gradient: isDarkMode 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  };

  // Feature usage data with enhanced colors
  const featureUsageData = [
    { feature: 'Dashboard', usage: 2847, color: colorPalette.primary },
    { feature: 'Reports', usage: 1923, color: colorPalette.success },
    { feature: 'Analytics', usage: 1456, color: colorPalette.warning },
    { feature: 'Settings', usage: 987, color: colorPalette.secondary },
    { feature: 'Integrations', usage: 756, color: colorPalette.purple },
    { feature: 'API Access', usage: 432, color: colorPalette.info }
  ];

  // User growth data for line/area charts
  const userGrowthData = [
    { month: 'Jan', users: 4200, revenue: 12400, sessions: 8900 },
    { month: 'Feb', users: 4800, revenue: 14200, sessions: 9800 },
    { month: 'Mar', users: 5200, revenue: 15800, sessions: 11200 },
    { month: 'Apr', users: 5900, revenue: 17900, sessions: 12800 },
    { month: 'May', users: 6800, revenue: 20400, sessions: 14500 },
    { month: 'Jun', users: 7500, revenue: 22800, sessions: 16200 },
    { month: 'Jul', users: 8400, revenue: 25600, sessions: 18400 },
    { month: 'Aug', users: 9200, revenue: 28200, sessions: 20100 },
    { month: 'Sep', users: 10100, revenue: 31200, sessions: 22800 },
    { month: 'Oct', users: 11200, revenue: 34800, sessions: 25200 },
    { month: 'Nov', users: 12100, revenue: 37400, sessions: 27600 },
    { month: 'Dec', users: 12847, revenue: 39800, sessions: 29400 }
  ];

  // Key metrics with dynamic colors
  const keyMetrics = [
    { 
      title: 'Total Users', 
      value: '12,847', 
      icon: Users, 
      trend: '+12%', 
      color: colorPalette.primary,
      bgColor: isDarkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'
    },
    { 
      title: 'Monthly Revenue', 
      value: '$39,800', 
      icon: DollarSign, 
      trend: '+8%', 
      color: colorPalette.success,
      bgColor: isDarkMode ? 'bg-emerald-900/30' : 'bg-emerald-100'
    },
    { 
      title: 'Active Sessions', 
      value: '29,400', 
      icon: Activity, 
      trend: '+15%', 
      color: colorPalette.secondary,
      bgColor: isDarkMode ? 'bg-pink-900/30' : 'bg-pink-100'
    },
    { 
      title: 'Growth Rate', 
      value: '23.5%', 
      icon: TrendingUp, 
      trend: '+5%', 
      color: colorPalette.warning,
      bgColor: isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'
    }
  ];

  // Chart type options
  const chartTypes = [
    { id: 'bar', label: 'Bar Chart', icon: BarChart3, description: 'Feature Usage' },
    { id: 'line', label: 'Line Chart', icon: ArrowUp, description: 'Growth Trends' },
    { id: 'area', label: 'Area Chart', icon: PieChart, description: 'Cumulative View' }
  ];

  // Time filter options
  const timeFilters = [
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '3m', label: '3 Months' },
    { id: '1y', label: '1 Year' }
  ];

  // Theme classes with enhanced styling
  const themeClasses = {
    container: isDarkMode 
      ? 'min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-500' 
      : 'min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 transition-all duration-500',
    header: isDarkMode 
      ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700/50' 
      : 'bg-white/80 backdrop-blur-sm border-gray-200/50',
    card: isDarkMode 
      ? 'bg-gray-800/60 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/80' 
      : 'bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80',
    button: isDarkMode 
      ? 'bg-gray-700/80 hover:bg-gray-600/80 text-white backdrop-blur-sm' 
      : 'bg-white/80 hover:bg-gray-50/80 text-gray-900 backdrop-blur-sm',
    activeButton: isDarkMode
      ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
      : 'bg-indigo-500 hover:bg-indigo-600 text-white'
  };

  // Render different chart types
  const renderChart = () => {
    const chartProps = {
      margin: { top: 20, right: 30, left: 20, bottom: 5 }
    };

    const axisProps = {
      stroke: isDarkMode ? '#9ca3af' : '#6b7280',
      fontSize: 12
    };

    const gridProps = {
      strokeDasharray: "3 3",
      stroke: isDarkMode ? '#374151' : '#e5e7eb'
    };

    const tooltipProps = {
      contentStyle: {
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        color: isDarkMode ? '#f9fafb' : '#111827'
      }
    };

    switch (activeChart) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData} {...chartProps}>
              <CartesianGrid {...gridProps} />
              <XAxis dataKey="month" {...axisProps} />
              <YAxis {...axisProps} />
              <Tooltip {...tooltipProps} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke={colorPalette.primary} 
                strokeWidth={3}
                dot={{ fill: colorPalette.primary, strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: colorPalette.primary, strokeWidth: 2 }}
                name="Total Users"
              />
              <Line 
                type="monotone" 
                dataKey="sessions" 
                stroke={colorPalette.secondary} 
                strokeWidth={3}
                dot={{ fill: colorPalette.secondary, strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: colorPalette.secondary, strokeWidth: 2 }}
                name="Active Sessions"
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userGrowthData} {...chartProps}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colorPalette.primary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colorPalette.primary} stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colorPalette.success} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colorPalette.success} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid {...gridProps} />
              <XAxis dataKey="month" {...axisProps} />
              <YAxis {...axisProps} />
              <Tooltip {...tooltipProps} />
              <Legend />
              <Area
                type="monotone"
                dataKey="users"
                stackId="1"
                stroke={colorPalette.primary}
                fill="url(#colorUsers)"
                strokeWidth={2}
                name="Users"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="2"
                stroke={colorPalette.success}
                fill="url(#colorRevenue)"
                strokeWidth={2}
                name="Revenue ($)"
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={featureUsageData} {...chartProps}>
              <CartesianGrid {...gridProps} />
              <XAxis dataKey="feature" {...axisProps} />
              <YAxis {...axisProps} />
              <Tooltip 
                {...tooltipProps}
                formatter={(value) => [`${value.toLocaleString()} users`, 'Usage']}
              />
              <Bar 
                dataKey="usage" 
                radius={[8, 8, 0, 0]}
                className="hover:opacity-80 transition-all duration-300"
              >
                {featureUsageData.map((entry, index) => (
                  <Bar key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className={themeClasses.container}>
      {/* Enhanced Header */}
      <header className={`${themeClasses.header} border-b p-6 shadow-lg`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              SaaS Analytics Dashboard
            </h1>
            <p className="text-sm opacity-75 mt-1">Real-time insights with interactive visualizations</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Time Filter */}
            <div className="flex items-center gap-2">
              <Calendar size={16} className="opacity-75" />
              <select 
                value={timeFilter} 
                onChange={(e) => setTimeFilter(e.target.value)}
                className={`${themeClasses.button} px-3 py-2 rounded-lg border-0 text-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-200`}
              >
                {timeFilters.map(filter => (
                  <option key={filter.id} value={filter.id}>{filter.label}</option>
                ))}
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`${themeClasses.button} p-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Enhanced Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index} 
                className={`${themeClasses.card} border rounded-xl p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-75 mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold" style={{ color: metric.color }}>
                      {metric.value}
                    </p>
                    <p className="text-sm text-emerald-500 font-medium mt-1 flex items-center gap-1">
                      <TrendingUp size={14} />
                      {metric.trend}
                    </p>
                  </div>
                  <div className={`${metric.bgColor} p-4 rounded-xl`}>
                    <IconComponent size={28} style={{ color: metric.color }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Chart Section */}
        <div className={`${themeClasses.card} border rounded-xl p-6 shadow-xl`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Analytics Overview</h2>
              <p className="text-sm opacity-75">
                {chartTypes.find(type => type.id === activeChart)?.description} - Interactive data visualization
              </p>
            </div>
            
            {/* Chart Type Selector */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
              {chartTypes.map(type => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveChart(type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeChart === type.id 
                        ? themeClasses.activeButton
                        : themeClasses.button
                    }`}
                    title={type.description}
                  >
                    <IconComponent size={16} />
                    <span className="hidden md:inline">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Chart Container */}
          <div className="h-96 transition-all duration-500">
            {renderChart()}
          </div>
        </div>

        {/* Progress Info */}
        <div className={`${themeClasses.card} border rounded-xl p-6 shadow-xl`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Filter className="text-indigo-500" size={20} />
            Dashboard Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold mb-3 text-emerald-500">✅ Phase 2 Complete:</p>
              <ul className="space-y-2 opacity-75">
                <li>• Multiple chart types (Bar, Line, Area)</li>
                <li>• Interactive chart switching</li>
                <li>• Enhanced color palette</li>
                <li>• Time period filtering</li>
                <li>• Smooth animations</li>
                <li>• Glassmorphism design</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3 text-amber-500">🚀 Coming in Phase 3:</p>
              <ul className="space-y-2 opacity-75">
                <li>• Advanced data filtering</li>
                <li>• Export functionality</li>
                <li>• Real-time data updates</li>
                <li>• Performance optimizations</li>
                <li>• Custom date ranges</li>
                <li>• Drill-down capabilities</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3 text-purple-500">🎯 Learning Progress:</p>
              <ul className="space-y-2 opacity-75">
                <li>• Chart libraries: ✅ Mastered</li>
                <li>• State management: ✅ Good</li>
                <li>• Interactivity: ✅ Strong</li>
                <li>• UI/UX design: ✅ Excellent</li>
                <li>• Performance: 🔄 Next focus</li>
                <li>• API integration: ⏳ Soon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;