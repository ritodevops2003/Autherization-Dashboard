import React from 'react'
import { useLocation } from 'react-router-dom';
import { Home, ClipboardList, Search, MapPin } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const location = useLocation();
    const user = location.state;

    const name = user?.key?.name;
    const role = user?.key?.role;

    // Sample data for charts
    const sessionsData = [
        { name: 'Jan', sessions: 4000, pageviews: 2400 },
        { name: 'Feb', sessions: 3000, pageviews: 1398 },
        { name: 'Mar', sessions: 2000, pageviews: 9800 },
        { name: 'Apr', sessions: 2780, pageviews: 3908 },
        { name: 'May', sessions: 1890, pageviews: 4800 },
        { name: 'Jun', sessions: 2390, pageviews: 3800 },
        { name: 'Jul', sessions: 3490, pageviews: 4300 },
    ];

    const deviceData = [
        { name: 'Desktop', value: 400 },
        { name: 'Mobile', value: 300 },
        { name: 'Tablet', value: 200 },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-20 bg-white shadow-lg flex flex-col items-center py-6 space-y-6 rounded-r-2xl">
                <button className="p-3 rounded-xl hover:bg-blue-100">
                    <Home className="w-6 h-6 text-blue-600" />
                </button>
                <button className="p-3 rounded-xl hover:bg-blue-100">
                    <ClipboardList className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-3 rounded-xl hover:bg-blue-100">
                    <Search className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-3 rounded-xl hover:bg-blue-100">
                    <MapPin className="w-6 h-6 text-gray-600" />
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center py-10 px-6">
                {/* Header Section */}
                <div className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
                    <p className="text-lg text-gray-600">
                        Welcome <span className="font-semibold text-blue-600">{name}</span>
                    </p>
                    <p className="text-md text-gray-500">
                        You got <span className="font-semibold text-green-600">{role}</span> access to dashboard
                    </p>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                    {/* Bar Chart */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Sessions vs Pageviews</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={sessionsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sessions" fill="#3b82f6" />
                                <Bar dataKey="pageviews" fill="#10b981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Line Chart */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Traffic Trends</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={sessionsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} />
                                <Line type="monotone" dataKey="pageviews" stroke="#10b981" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
