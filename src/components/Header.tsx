import React from 'react';
import { Code2, Upload, User, LogOut, LayoutDashboard, Home } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  user: UserType | null;
  onLogin: () => void;
  onSignup: () => void;
  onLogout: () => void;
  onUpload: () => void;
  onDashboard: () => void;
  onHome: () => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onSignup,
  onLogout,
  onUpload,
  onDashboard,
  onHome,
  currentView
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={onHome}
          >
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-105 transition-transform">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Project Selling
             </h1>
              <p className="text-xs text-gray-500 -mt-1">Monetize Your Code</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <button
                  onClick={onHome}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    currentView === 'home'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Explore</span>
                </button>
                
                <button
                  onClick={onDashboard}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    currentView === 'dashboard'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </button>

                <button
                  onClick={onUpload}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">Upload Project</span>
                </button>

                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="hidden md:inline text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </button>
                  
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={onLogout}
                        className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={onLogin}
                  className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={onSignup}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;