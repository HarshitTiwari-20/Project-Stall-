import React from 'react';
import { Code, DollarSign, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-green-500/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Monetize Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Code Creations
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Share your projects with the world. Let others preview your work and earn money 
            when they purchase the full source code. The ultimate marketplace for developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              Start Selling Your Code
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              Browse Projects
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Upload</h3>
              <p className="text-gray-600 text-sm">
                Upload your projects in minutes with our intuitive interface
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Earn Money</h3>
              <p className="text-gray-600 text-sm">
                Set your price and earn from every download of your source code
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Protected transactions with instant payouts to your account
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Access</h3>
              <p className="text-gray-600 text-sm">
                Buyers get immediate access after purchase with secure downloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;