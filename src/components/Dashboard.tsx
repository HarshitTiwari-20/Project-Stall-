import React from 'react';
import { DollarSign, Upload, Download, Star, TrendingUp, Calendar, Eye } from 'lucide-react';
import { User, Project } from '../types';

interface DashboardProps {
  user: User;
  userProjects: Project[];
}

const Dashboard: React.FC<DashboardProps> = ({ user, userProjects }) => {
  const totalDownloads = userProjects.reduce((sum, project) => sum + project.downloads, 0);
  const averageRating = userProjects.length > 0 
    ? userProjects.reduce((sum, project) => sum + project.rating, 0) / userProjects.length
    : 0;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">
              Member since {new Date(user.joinedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Total Earnings</p>
              <p className="text-3xl font-bold">${user.totalEarnings.toFixed(2)}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-200" />
          </div>
          <div className="flex items-center mt-4 text-green-100">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="text-sm">+12% from last month</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Projects</p>
              <p className="text-3xl font-bold">{userProjects.length}</p>
            </div>
            <Upload className="h-8 w-8 text-blue-200" />
          </div>
          <div className="flex items-center mt-4 text-blue-100">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">2 this month</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Downloads</p>
              <p className="text-3xl font-bold">{totalDownloads}</p>
            </div>
            <Download className="h-8 w-8 text-purple-200" />
          </div>
          <div className="flex items-center mt-4 text-purple-100">
            <Eye className="h-4 w-4 mr-2" />
            <span className="text-sm">1.2k views this week</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Average Rating</p>
              <p className="text-3xl font-bold">{averageRating.toFixed(1)}</p>
            </div>
            <Star className="h-8 w-8 text-orange-200" />
          </div>
          <div className="flex items-center mt-4 text-orange-100">
            <Star className="h-4 w-4 mr-2 fill-current" />
            <span className="text-sm">Based on 156 reviews</span>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Your Projects</h2>
          <p className="text-gray-600 mt-1">Manage and track your uploaded projects</p>
        </div>

        {userProjects.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Downloads</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Earnings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {userProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{project.title}</p>
                          <p className="text-sm text-gray-600 line-clamp-1">{project.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium capitalize">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      ${project.price}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {project.downloads}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-gray-600">{project.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-600">
                      ${(project.price * project.downloads).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <Upload className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600 mb-6">Upload your first project to start earning money</p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Upload Your First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;