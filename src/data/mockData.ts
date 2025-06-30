import { User, Project } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'John Developer',
  email: 'john@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
  joinedDate: '2024-01-15T00:00:00Z',
  totalEarnings: 2450.75,
  projectsCount: 8
};

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.',
    category: 'web',
    price: 49.99,
    preview: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    tags: ['React', 'Dashboard', 'Analytics', 'E-commerce'],
    author: {
      id: '2',
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    createdAt: '2024-12-20T00:00:00Z',
    downloads: 156,
    rating: 4.8,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    sourceFiles: [],
    hasAccess: false
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application with drag-and-drop functionality, team collaboration, and progress tracking.',
    category: 'mobile',
    price: 35.00,
    preview: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    tags: ['Mobile', 'Productivity', 'React Native'],
    author: {
      id: '3',
      name: 'Mike Rodriguez',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    createdAt: '2024-12-18T00:00:00Z',
    downloads: 89,
    rating: 4.6,
    technologies: ['React Native', 'Redux', 'Firebase'],
    sourceFiles: [],
    hasAccess: false
  },
  {
    id: '3',
    title: 'AI Chat Interface',
    description: 'A modern chat interface with AI integration, message history, file sharing, and real-time conversation capabilities.',
    category: 'ai',
    price: 65.00,
    preview: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    thumbnail: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    tags: ['AI', 'Chat', 'Machine Learning', 'OpenAI'],
    author: {
      id: '4',
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    createdAt: '2024-12-22T00:00:00Z',
    downloads: 234,
    rating: 4.9,
    technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'MongoDB'],
    sourceFiles: [],
    hasAccess: false
  },
  {
    id: '4',
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency portfolio tracking with advanced charts, profit/loss analytics, and market insights.',
    category: 'web',
    price: 55.99,
    preview: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    thumbnail: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    tags: ['Crypto', 'Finance', 'Charts', 'API'],
    author: {
      id: '5',
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    createdAt: '2024-12-19T00:00:00Z',
    downloads: 178,
    rating: 4.7,
    technologies: ['Vue.js', 'D3.js', 'CoinGecko API', 'Vuex'],
    sourceFiles: [],
    hasAccess: false
  },
  {
    id: '5',
    title: 'Social Media Dashboard',
    description: 'Comprehensive social media management dashboard with post scheduling, analytics, and multi-platform integration.',
    category: 'web',
    price: 42.50,
    preview: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    tags: ['Social Media', 'Analytics', 'Scheduling'],
    author: {
      id: '6',
      name: 'Lisa Wang',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    createdAt: '2024-12-21T00:00:00Z',
    downloads: 92,
    rating: 4.5,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    sourceFiles: [],
    hasAccess: false
  },
  {
    id: '6',
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with 7-day forecasts, interactive maps, and location-based notifications.',
    category: 'mobile',
    price: 28.99,
    preview: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    thumbnail: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    tags: ['Weather', 'Mobile', 'Maps', 'API'],
    author: {
      id: '7',
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    createdAt: '2024-12-17T00:00:00Z',
    downloads: 145,
    rating: 4.4,
    technologies: ['Flutter', 'Dart', 'Weather API', 'Google Maps'],
    sourceFiles: [],
    hasAccess: false
  }
];