import React, { useState, useEffect } from 'react';
import { TrendingUp, Brain, LineChart, Shield, ArrowRight, ChevronRight, BarChart2, Globe, Award, CheckCircle } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">StockAI</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#features" className="hover:text-blue-400 transition-colors font-medium">Features</a>
                <a href="#how-it-works" className="hover:text-blue-400 transition-colors font-medium">How it Works</a>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors font-medium">Testimonials</a>
                <a href="#pricing" className="hover:text-blue-400 transition-colors font-medium">Pricing</a>
                <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition-colors font-medium text-white shadow-lg shadow-blue-500/20">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  AI-Powered Stock Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Leverage cutting-edge artificial intelligence to analyze market trends, predict opportunities, and maximize your investment portfolio performance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center shadow-lg shadow-blue-500/20 transition-all">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-transparent hover:bg-white/10 border border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                  Schedule Demo
                </button>
              </div>
              
              <div className="flex items-center mt-8">
                <div className="flex -space-x-2">
                  <img src="https://images.pexels.com/photos/30608593/pexels-photo-30608593/free-photo-of-close-up-of-nvidia-logo-displayed-on-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" className="w-8 h-8 rounded-full border-2 border-gray-800" />
                  <img src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" className="w-8 h-8 rounded-full border-2 border-gray-800" />
                  <img src="https://images.pexels.com/photos/28386038/pexels-photo-28386038/free-photo-of-green-mermaid-logo-on-rustic-burlap-background.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" className="w-8 h-8 rounded-full border-2 border-gray-800" />
                </div>
                <span className="ml-4 text-sm text-gray-400">Trusted by 50,000+ professional traders</span>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                <img 
                  src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="StockAI Dashboard" 
                  className="relative z-10 rounded-xl shadow-2xl border border-gray-700 "
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all hover:shadow-blue-500/5">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">95.7%</h3>
              <p className="text-gray-300 font-medium">Prediction Accuracy</p>
              <p className="text-sm text-gray-400 mt-2">Based on 12-month historical data</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all hover:shadow-blue-500/5">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">50,000+</h3>
              <p className="text-gray-300 font-medium">Active Traders</p>
              <p className="text-sm text-gray-400 mt-2">From 30+ countries worldwide</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all hover:shadow-blue-500/5">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">$2.5M</h3>
              <p className="text-gray-300 font-medium">Daily Trading Volume</p>
              <p className="text-sm text-gray-400 mt-2">Across all supported markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 px-4 bg-gray-900/70">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by leading financial institutions</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-gray-500/20 rounded font-bold flex justify-center items-center"> Zerodha </div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-gray-500/20 rounded font-bold flex justify-center items-center"> BlackRock </div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-gray-500/20 rounded font-bold flex justify-center items-center"> RazorPay </div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-gray-500/20 rounded font-bold flex justify-center items-center"> Netz  </div>
            </div>
            <div className="flex items-center justify-center h-8">
              <div className="w-24 h-8 bg-gray-500/20 rounded font-bold flex justify-center items-center"> OG </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold mb-2 block">POWERFUL CAPABILITIES</span>
            <h2 className="text-4xl font-bold mb-4">
              Advanced Trading Features
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with intuitive interfaces to give you the edge in today's competitive markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-blue-400" />}
              title="AI-Powered Analysis"
              description="Machine learning algorithms that analyze patterns across multiple markets and predict emerging trends with remarkable accuracy."
            />
            <FeatureCard
              icon={<LineChart className="h-10 w-10 text-blue-400" />}
              title="Real-time Dashboard"
              description="Comprehensive monitoring tools that provide instant updates, customizable alerts, and visual analytics of your entire portfolio."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-400" />}
              title="Risk Management"
              description="Advanced risk assessment tools that provide smart recommendations to protect your investments during market volatility."
            />
            <FeatureCard
              icon={<BarChart2 className="h-10 w-10 text-blue-400" />}
              title="Performance Analytics"
              description="Detailed reporting on your trading performance with actionable insights to continuously improve your strategy."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-blue-400" />}
              title="Global Market Access"
              description="Trade across multiple international markets with real-time currency conversion and market-specific insights."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-blue-400" />}
              title="Expert Strategy Templates"
              description="Access proven trading strategies designed by industry professionals that you can implement with a single click."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold mb-2 block">SIMPLE PROCESS</span>
            <h2 className="text-4xl font-bold mb-4">
              How StockAI Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform simplifies the complex world of stock trading through powerful AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">1</div>
              <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Analyze" className="w-16 h-16 mb-6 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <p className="text-gray-300">Our AI continuously scans markets, news, and social sentiment to identify emerging opportunities.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">2</div>
              <img src="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Predict" className="w-16 h-16 mb-6 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">Smart Predictions</h3>
              <p className="text-gray-300">Advanced algorithms generate precise forecasts based on historical data and current trends.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">3</div>
              <img src="https://images.pexels.com/photos/7567223/pexels-photo-7567223.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Trade" className="w-16 h-16 mb-6 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">Optimized Trading</h3>
              <p className="text-gray-300">Receive actionable recommendations for your portfolio with risk assessments and timing guidance.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold inline-flex items-center shadow-lg shadow-blue-500/20">
              Learn More About Our Process
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold mb-2 block">SUCCESS STORIES</span>
            <h2 className="text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from traders who have transformed their investment strategies with StockAI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-400">Retail Investor</p>
                </div>
              </div>
              <p className="text-gray-300">
                "StockAI has completely transformed my approach to trading. The AI predictions have been remarkably accurate, and my portfolio has grown 37% since I started using the platform."
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-400">Financial Advisor</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As a financial advisor, I need tools I can trust. StockAI provides insights that would take my team days to generate, allowing us to focus on client relationships instead of number crunching."
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold">David Martinez</h4>
                  <p className="text-sm text-gray-400">Day Trader</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The real-time alerts and risk management tools have saved me from several potentially disastrous trades. StockAI pays for itself many times over every month."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold mb-2 block">FLEXIBLE PLANS</span>
            <h2 className="text-4xl font-bold mb-4">
              Pricing That Works For You
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your trading needs with no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for new traders</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <PricingFeature>Basic AI market analysis</PricingFeature>
                <PricingFeature>5 stock watchlist</PricingFeature>
                <PricingFeature>Daily trading recommendations</PricingFeature>
                <PricingFeature>Email support</PricingFeature>
              </ul>
              <button className="w-full bg-transparent hover:bg-white/10 border border-gray-400 px-6 py-3 rounded-lg font-semibold transition-all">
                Get Started
              </button>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-xl backdrop-blur-sm border border-blue-700/30 shadow-lg shadow-blue-500/10 relative">
              <div className="absolute top-0 right-8 bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-b-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-gray-400 mb-6">For serious investors</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <PricingFeature>Advanced AI predictions</PricingFeature>
                <PricingFeature>Unlimited watchlists</PricingFeature>
                <PricingFeature>Real-time alerts</PricingFeature>
                <PricingFeature>Risk management tools</PricingFeature>
                <PricingFeature>Priority support</PricingFeature>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/20 transition-all">
                Get Started
              </button>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For institutions</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <PricingFeature>All Professional features</PricingFeature>
                <PricingFeature>Custom API integration</PricingFeature>
                <PricingFeature>White-label options</PricingFeature>
                <PricingFeature>Dedicated account manager</PricingFeature>
                <PricingFeature>24/7 premium support</PricingFeature>
              </ul>
              <button className="w-full bg-transparent hover:bg-white/10 border border-gray-400 px-6 py-3 rounded-lg font-semibold transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Trading Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already using AI to maximize their returns and minimize risk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center shadow-lg shadow-blue-500/20 transition-all">
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent hover:bg-white/10 border border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-blue-500" />
                <span className="ml-2 text-xl font-bold">StockAI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Advanced AI-powered stock market intelligence for traders and investors around the world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-4 h-4 bg-gray-500/30 rounded"></div>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-4 h-4 bg-gray-500/30 rounded"></div>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-4 h-4 bg-gray-500/30 rounded"></div>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Market Insights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} StockAI Inc. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 hover:bg-blue-900/10 transition-all duration-300 group">
      <div className="mb-6 p-3 bg-blue-900/20 inline-block rounded-lg">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const PricingFeature = ({ children }) => {
  return (
    <li className="flex items-center">
      <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
      <span className="text-gray-300">{children}</span>
    </li>
  );
};

export default App;