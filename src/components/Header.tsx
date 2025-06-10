import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'root' },
    { label: 'About Us', target: 'services' },
    { label: 'Videos', target: 'youtube' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Contact', target: 'location' }
  ];

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (target: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonateClick = () => {
    setIsMenuOpen(false);
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-navy-900/95 backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleHomeClick}
              className="flex items-center"
            >
              <img 
                src="https://lctech.in/faithtemple-images/Logo.png" 
                alt="Faith Temple Logo" 
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-maroon-600 ${
                  isDarkMode ? 'text-gray-300 hover:text-maroon-400' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-navy-700'
                  : 'text-gray-700 hover:text-navy-600 hover:bg-gray-100'
              }`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Donate Button */}
            <button
              onClick={handleDonateClick}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-navy-600 to-maroon-600 text-white hover:opacity-90 transition-opacity"
            >
              Donate
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-navy-700'
                  : 'text-gray-700 hover:text-navy-600 hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Donate Button */}
            <button
              onClick={handleDonateClick}
              className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-navy-600 to-maroon-600 text-white hover:opacity-90 transition-opacity"
            >
              Donate
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-navy-700'
                  : 'text-gray-700 hover:text-navy-600 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className={`md:hidden ${
            isDarkMode ? 'bg-navy-800' : 'bg-white'
          } border-t ${
            isDarkMode ? 'border-navy-700' : 'border-gray-100'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.target)}
                  className={`text-left py-2 text-sm font-medium transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-maroon-400' 
                      : 'text-gray-700 hover:text-maroon-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;