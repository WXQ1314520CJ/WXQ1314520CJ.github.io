import React from 'react';

interface BackToTopProps {
  show: boolean;
}

export const BackToTop: React.FC<BackToTopProps> = ({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
        show ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <i className="fa fa-arrow-up"></i>
    </button>
  );
};