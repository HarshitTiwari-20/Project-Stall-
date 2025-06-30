import React from 'react';
import { Search, Filter, Star, Download, Eye, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Projects', count: 0 },
  { id: 'web', name: 'Web Development', count: 0 },
  { id: 'mobile', name: 'Mobile Apps', count: 0 },
  { id: 'ai', name: 'AI & Machine Learning', count: 0 },
  { id: 'desktop', name: 'Desktop Apps', count: 0 },
  { id: 'game', name: 'Game Development', count: 0 }
];

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onProjectSelect,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Search and Filter Header */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Discover Amazing Projects
            </h2>
            <p className="text-gray-600">
              Browse through {projects.length} premium code projects from talented developers
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Project Thumbnail */}
            <div className="relative overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <Eye className="h-4 w-4" />
                    <span>Click to preview</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  ${project.price}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium text-gray-600">{project.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Author and Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={project.author.avatar}
                    alt={project.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-600">{project.author.name}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{project.downloads}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </section>
  );
};

export default ProjectGrid;