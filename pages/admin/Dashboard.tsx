import React from 'react';
import { useSite } from '../../context/SiteContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, Eye, MousePointer, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const { data } = useSite();

  const stats = [
    { title: 'Total Views', value: '12,340', change: '+12%', icon: <Eye className="text-blue-500" /> },
    { title: 'Unique Visitors', value: '8,234', change: '+5%', icon: <Users className="text-green-500" /> },
    { title: 'Bounce Rate', value: '42.3%', change: '-2%', icon: <TrendingUp className="text-orange-500" /> },
    { title: 'Avg. Session', value: '2m 14s', change: '+8%', icon: <MousePointer className="text-purple-500" /> },
  ];

  const chartData = [
    { name: 'Mon', views: 4000, visitors: 2400 },
    { name: 'Tue', views: 3000, visitors: 1398 },
    { name: 'Wed', views: 2000, visitors: 9800 },
    { name: 'Thu', views: 2780, visitors: 3908 },
    { name: 'Fri', views: 1890, visitors: 4800 },
    { name: 'Sat', views: 2390, visitors: 3800 },
    { name: 'Sun', views: 3490, visitors: 4300 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change} from last week
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold mb-6">Traffic Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="views" stroke="#4f46e5" fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold mb-6">Visitor Sources</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="visitors" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold mb-4">Recent Content Updates</h3>
        <div className="space-y-4">
          {data.blog.slice(0, 3).map(post => (
            <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-4">
                <img src={post.image} alt="" className="w-10 h-10 rounded object-cover" />
                <div>
                  <p className="font-medium line-clamp-1">{post.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Updated recently</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Published</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper wrapper for AreaChart
import { AreaChart, Area } from 'recharts';

export default Dashboard;