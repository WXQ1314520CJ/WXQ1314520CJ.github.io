import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Teachers } from '../components/Teachers';
import { Advantages } from '../components/Advantages';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setShowBackToTop(true);
      } else {
        setIsScrolled(false);
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理URL中的锚点
  useEffect(() => {
    // 检查URL是否包含锚点
    const hash = window.location.hash;
    if (hash) {
      // 去掉#号，获取锚点ID
      const anchorId = hash.substring(1);
      // 查找对应的元素
      const element = document.getElementById(anchorId);
      if (element) {
        // 滚动到该元素
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-light text-dark min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Teachers />
      <Advantages />
      <Contact />
      <Footer />
      <BackToTop show={showBackToTop} />
    </div>
  );
}