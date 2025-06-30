import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import AuthModal from './components/AuthModal';
import UploadModal from './components/UploadModal';
import Dashboard from './components/Dashboard';
import ProjectDetail from './components/ProjectDetail';
import { User, Project } from './types';
import { mockProjects, mockUser } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLogin = (email: string, password: string) => {
    // Mock login - in real app, this would call your authentication API
    setUser(mockUser);
    setShowAuthModal(false);
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // Mock signup - in real app, this would call your authentication API
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face`,
      joinedDate: new Date().toISOString(),
      totalEarnings: 0,
      projectsCount: 0
    };
    setUser(newUser);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const handleProjectUpload = (projectData: any) => {
    if (!user) return;
    
    const newProject: Project = {
      id: Date.now().toString(),
      title: projectData.title,
      description: projectData.description,
      category: projectData.category,
      price: parseFloat(projectData.price),
      preview: projectData.preview,
      thumbnail: projectData.thumbnail,
      tags: projectData.tags.split(',').map((tag: string) => tag.trim()),
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      },
      createdAt: new Date().toISOString(),
      downloads: 0,
      rating: 0,
      technologies: projectData.technologies.split(',').map((tech: string) => tech.trim()),
      sourceFiles: [], // Would be populated with actual files
      hasAccess: false
    };

    setProjects(prev => [newProject, ...prev]);
    setShowUploadModal(false);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project');
  };

  const handlePurchase = (project: Project) => {
    // Mock purchase - in real app, this would integrate with payment processor
    setProjects(prev => prev.map(p => 
      p.id === project.id 
        ? { ...p, hasAccess: true, downloads: p.downloads + 1 }
        : p
    ));
    setSelectedProject(prev => prev ? { ...prev, hasAccess: true } : null);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        user={user}
        onLogin={() => {
          setAuthMode('login');
          setShowAuthModal(true);
        }}
        onSignup={() => {
          setAuthMode('signup');
          setShowAuthModal(true);
        }}
        onLogout={handleLogout}
        onUpload={() => setShowUploadModal(true)}
        onDashboard={() => setCurrentView('dashboard')}
        onHome={() => setCurrentView('home')}
        currentView={currentView}
      />

      {currentView === 'home' && (
        <>
          <Hero />
          <ProjectGrid 
            projects={filteredProjects}
            onProjectSelect={handleProjectSelect}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </>
      )}

      {currentView === 'dashboard' && user && (
        <Dashboard 
          user={user}
          userProjects={projects.filter(p => p.author.id === user.id)}
        />
      )}

      {currentView === 'project' && selectedProject && (
        <ProjectDetail 
          project={selectedProject}
          user={user}
          onBack={() => setCurrentView('home')}
          onPurchase={() => handlePurchase(selectedProject)}
        />
      )}

      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onModeSwitch={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
        />
      )}

      {showUploadModal && user && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onUpload={handleProjectUpload}
        />
      )}
    </div>
  );
}

export default App;