import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="navbar" className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-scrolled' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="万邦心悦" 
              className="h-10 object-contain"
            />
          </a>
          
          {/* 桌面端导航 */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavLinkClick('about')}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              关于我们
            </button>
            <button 
              onClick={() => handleNavLinkClick('services')}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              专业服务
            </button>
            <button 
              onClick={() => handleNavLinkClick('teachers')}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              师资团队
            </button>
            <button 
              onClick={() => handleNavLinkClick('advantages')}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              核心优势
            </button>
            <button 
              onClick={() => handleNavLinkClick('contact')}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              联系我们
            </button>
          </nav>
          
          {/* 联系电话 */}
          <a href="tel:17795803368" className="hidden sm:flex items-center space-x-2 text-primary font-medium">
            <i className="fa fa-phone"></i>
            <span>17795803368</span>
          </a>
          
          {/* 移动端菜单按钮 */}
          <button 
            id="menuBtn" 
            className="md:hidden text-dark text-xl"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </div>
      
      {/* 移动端导航菜单 */}
      {mobileMenuOpen && (
        <div id="mobileMenu" className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <button 
              onClick={() => handleNavLinkClick('about')}
              className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
            >
              关于我们
            </button>
            <button 
              onClick={() => handleNavLinkClick('services')}
              className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
            >
              专业服务
            </button>
            <button 
              onClick={() => handleNavLinkClick('teachers')}
              className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
            >
              师资团队
            </button>
            <button 
              onClick={() => handleNavLinkClick('advantages')}
              className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
            >
              核心优势
            </button>
            <button 
              onClick={() => handleNavLinkClick('contact')}
              className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
            >
              联系我们
            </button>
            <a href="tel:17795803368" className="block py-2 text-primary font-medium">
              <i className="fa fa-phone mr-2"></i>17795803368
            </a>
          </div>
        </div>
      )}
    </header>
  );
}