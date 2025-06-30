import React from 'react';
import { ArrowLeft, Download, Star, Tag, User, Calendar, DollarSign, Shield, Code, Eye } from 'lucide-react';
import { Project, User as UserType } from '../types';

interface ProjectDetailProps {
  project: Project;
  user: UserType | null;
  onBack: () => void;
  onPurchase: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  user,
  onBack,
  onPurchase
}) => {
  const isOwner = user && user.id === project.author.id;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Projects</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Project Header */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
            <div className="relative">
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-white/90">
                    <div className="flex items-center space-x-2">
                      <img
                        src={project.author.avatar}
                        alt={project.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium">{project.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-xl font-medium border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Purchase Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ${project.price}
              </div>
              <p className="text-gray-600">One-time purchase</p>
            </div>

            {project.hasAccess || isOwner ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 py-3 px-4 rounded-xl">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">
                    {isOwner ? 'You own this project' : 'Access granted'}
                  </span>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Download className="h-5 w-5" />
                  <span>Download Source Code</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {user ? (
                  <button
                    onClick={onPurchase}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <DollarSign className="h-5 w-5" />
                    <span>Purchase & Download</span>
                  </button>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Sign in to purchase this project</p>
                    <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                      Sign In to Purchase
                    </button>
                  </div>
                )}
                
                <div className="flex items-center justify-center space-x-2 text-blue-600 bg-blue-50 py-3 px-4 rounded-xl">
                  <Eye className="h-5 w-5" />
                  <span className="text-sm font-medium">Preview only - Full source code after purchase</span>
                </div>
              </div>
            )}

            <div className="border-t border-gray-100 mt-6 pt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Category</span>
                <span className="font-medium capitalize">{project.category}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Downloads</span>
                <span className="font-medium">{project.downloads}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Rating</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{project.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Author Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={project.author.avatar}
                alt={project.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{project.author.name}</p>
                <p className="text-sm text-gray-600">Code Creator</p>
              </div>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              View Profile
            </button>
          </div>

          {/* Security Features */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What You Get</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-700">Complete source code</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-700">Secure instant download</span>
              </div>
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-700">Lifetime access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;