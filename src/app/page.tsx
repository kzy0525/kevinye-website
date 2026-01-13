'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Sections from '@/components/Sections';

export default function Home() {
  useEffect(() => {
    // Typing effect for hero section
    const typeText = () => {
      const text = "Computer Engineering Student at Queen's University";
      const typingElement = document.getElementById('typing-text');
      if (!typingElement) return;
      
      let i = 0;
      const type = () => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
          setTimeout(type, 100);
        }
      };
      type();
    };

    // Flip card functionality
    const initFlipCard = () => {
      const flipCard = document.getElementById('about-flip-card');
      if (flipCard) {
        flipCard.addEventListener('click', function() {
          this.classList.toggle('flipped');
        });
      }
    };

    // Mobile menu toggle
    const initMobileMenu = () => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
      }
    };

    // Smooth scrolling for navigation links
    const initSmoothScrolling = () => {
      const navLinks = document.querySelectorAll('a[href^="#"]');
      
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          if (targetId) {
            // If href is just "#", scroll to top
            if (targetId === '#') {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            } else {
              const targetElement = document.querySelector(targetId);
              
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }
          }
        });
      });
    };

    // Intersection Observer for animations
    const initScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, observerOptions);
      
      // Observe all sections
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        observer.observe(section);
      });
    };

    // Initialize all functionality
    typeText();
    initFlipCard();
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
  }, []);

  return (
    <div className="bg-slate-900 text-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-800 shadow-lg">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex-shrink-0">
              <Image src="/images/logo.png" alt="Kevin Ye" width={32} height={32} className="h-8 w-auto" />
            </div>
            <div className="hidden md:block ml-auto">
              <div className="flex items-baseline space-x-6">
                <a href="#" className="nav-link text-slate-300 hover:text-white px-3 py-2 text-base font-medium transition-colors">About</a>
                <a href="#experience" className="nav-link text-slate-300 hover:text-white px-3 py-2 text-base font-medium transition-colors">Experience</a>
                <a href="#projects" className="nav-link text-slate-300 hover:text-white px-3 py-2 text-base font-medium transition-colors">Projects</a>
                <a href="#skills" className="nav-link text-slate-300 hover:text-white px-3 py-2 text-base font-medium transition-colors">Skills</a>
                <a href="#contact" className="nav-link text-slate-300 hover:text-white px-3 py-2 text-base font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button id="mobile-menu-button" className="text-slate-300 hover:text-white focus:outline-none focus:text-white">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="md:hidden hidden bg-slate-900 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="mobile-nav-link block px-3 py-2 text-lg font-medium text-slate-300 hover:text-white">About</a>
            <a href="#experience" className="mobile-nav-link block px-3 py-2 text-lg font-medium text-slate-300 hover:text-white">Experience</a>
            <a href="#projects" className="mobile-nav-link block px-3 py-2 text-lg font-medium text-slate-300 hover:text-white">Projects</a>
            <a href="#skills" className="mobile-nav-link block px-3 py-2 text-lg font-medium text-slate-300 hover:text-white">Skills</a>
            <a href="#contact" className="mobile-nav-link block px-3 py-2 text-lg font-medium text-slate-300 hover:text-white">Contact</a>
            <a href="https://drive.google.com/file/d/1ZO2XXOGIRUw_BVbhdQ-n3vHHjWqGe8i5/view?usp=sharing" target="_blank" className="block px-3 py-2 text-base font-medium bg-accent text-white rounded-md">CV</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto bg-slate-700 rounded-full flex items-center justify-center border-2 border-blue-500 overflow-hidden">
                <Image src="/images/headshot.png" alt="Kevin Ye" width={160} height={160} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">Kevin Ye</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              <span id="typing-text"></span><span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-0 pb-8 bg-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flip Card Container */}
          <div className="flip-card max-w-4xl mx-auto relative" id="about-flip-card">
            {/* Click me indicator */}
            <div className="absolute -right-36 top-1/2 transform -translate-y-1/2 z-10">
              <div className="flex items-center space-x-2 text-blue-400 animate-bounce">
                <i className="fas fa-arrow-left text-lg"></i>
                <span className="text-sm font-medium">Click me!</span>
              </div>
            </div>
            <div className="flip-card-inner">
              {/* Front Side - About Me Text Only */}
              <div className="flip-card-front">
                <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">About Me</h2>
                <div className="prose prose-lg max-w-none text-slate-300">
                  <p className="text-lg leading-relaxed">
                    I&apos;m from Vancouver, BC and I am currently a student at Queen&apos;s University studying Computer Engineering with a specialization in artificial intelligence, and a certificiate in business. I am interested in software engineering, artificial intelligence, data analytics, and UI/UX design. As I continue to learn and gain experience, this site will be updated with new projects and experiences, along with my skills, resume, and contact information. In my free time, I enjoy playing badminton, travelling, and doing the NYT Wordle. Feel free to reach out at ye.kevin@queensu.ca!
                  </p>
                </div>
              </div>
              
              {/* Back Side - A little more about me */}
              <div className="flip-card-back">
                <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">A little more about me</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Here&apos;s a short video of 9 year old me at my weekly robotics class, coding a lego mindstorms robot using EV3 code. Up until university, I was super embarrassed by these videos and desperately tried to hide them, but now I find it funny and like to think of those classes as a start to my interest in coding. 
                    </p>
                  </div>
                  <div className="bg-slate-700 rounded-lg overflow-hidden">
                    <video className="w-full aspect-video object-cover" controls>
                      <source src="/images/robokids.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="text-white text-lg text-center p-4">&quot;Today I built a car&quot; 👍</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Photo Gallery (separate from flip card) */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-3 gap-6">
              <div className="group flex flex-col items-center">
                <Image src="/images/tofu.jpeg" alt="Tofu" width={300} height={300} className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 border border-slate-600 object-cover" />
                <p className="text-white text-sm text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">My chubby Great Pyrenees named Tofu!</p>
              </div>
              <div className="group flex flex-col items-center">
                <Image src="/images/beach.jpeg" alt="Beach" width={300} height={300} className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 border border-slate-600 object-cover" />
                <p className="text-white text-sm text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">I love taking pictures and EATING LOTS when I travel</p>
              </div>
              <div className="group flex flex-col items-center">
                <Image src="/images/violin.jpeg" alt="Violin" width={300} height={300} className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 border border-slate-600 object-cover" />
                <p className="text-white text-sm text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">I&apos;ve played violin for 10+ years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Sections />

      <style jsx>{`
        .flip-card {
          height: 400px;
          perspective: 1000px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: #1e293b;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 2px solid #374151;
          transition: all 0.3s ease;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .flip-card:hover .flip-card-front,
        .flip-card:hover .flip-card-back {
          border-color: #3b82f6;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-link:hover,
        .mobile-nav-link:hover {
          color: #3b82f6 !important;
        }
        
        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}