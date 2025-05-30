import React, { useState, useEffect } from 'react';
import { Wrench, Rocket, Zap, Star, Code, Palette, Github, Twitter, Linkedin } from 'lucide-react';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Something Amazing is Coming Soon...";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const FloatingIcon = ({ Icon, delay, size = 20 }: { Icon: any, delay: string, size?: number }) => (
    <div 
      className={`absolute animate-bounce text-white/30 hover:text-white/60 transition-colors duration-300`}
      style={{ 
        animationDelay: delay,
        animationDuration: '3s',
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`
      }}
    >
      <Icon size={size} />
    </div>
  );

  const ParticleEffect = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );

  const GlowingOrb = ({ delay }: { delay: string }) => (
    <div 
      className="absolute w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-float opacity-60"
      style={{
        animationDelay: delay,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`
      }}
    />
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse" />
      
      {/* Glowing orbs */}
      <GlowingOrb delay="0s" />
      <GlowingOrb delay="2s" />
      <GlowingOrb delay="4s" />
      
      {/* Particle effects */}
      <ParticleEffect />
      
      {/* Floating icons */}
      <FloatingIcon Icon={Wrench} delay="0s" size={24} />
      <FloatingIcon Icon={Rocket} delay="1s" size={28} />
      <FloatingIcon Icon={Zap} delay="2s" size={22} />
      <FloatingIcon Icon={Star} delay="0.5s" size={20} />
      <FloatingIcon Icon={Code} delay="1.5s" size={26} />
      <FloatingIcon Icon={Palette} delay="2.5s" size={24} />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main logo/icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center animate-spin-slow">
                <Wrench className="text-white" size={40} />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20 animate-ping" />
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full opacity-10 animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow">
              Under Development
            </span>
          </h1>

          {/* Typing effect subtitle */}
          <div className="text-xl md:text-2xl text-white/80 mb-8 h-8 flex items-center justify-center">
            <span className="font-mono animate-fade-in">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            I'm crafting something extraordinary! Currently working hard to bring you an amazing experience. 
            Stay tuned for the big reveal.
          </p>

          {/* Progress bar */}
          <div className="mb-12 max-w-md mx-auto animate-fade-in">
            <div className="flex justify-between text-white/60 text-sm mb-2">
              <span>Progress</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse transition-all duration-1000 ease-out" style={{ width: '85%' }} />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Rocket, title: "Fast", desc: "Lightning quick performance" },
              { icon: Zap, title: "Modern", desc: "Cutting-edge technology" },
              { icon: Star, title: "Beautiful", desc: "Stunning user experience" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40 animate-fade-in hover:animate-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12 animate-fade-in">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 animate-pulse">
                🚀 Launch Countdown
              </h3>
              <p className="text-white/80 text-lg mb-4">
                Something incredible is brewing behind the scenes!
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Social links with proper icons */}
          <div className="mt-12 flex justify-center space-x-6 animate-fade-in">
            {[
              { Icon: Github, label: 'GitHub', href: '#' },
              { Icon: Twitter, label: 'Twitter', href: '#' },
              { Icon: Linkedin, label: 'LinkedIn', href: '#' }
            ].map(({ Icon, label }, index) => (
              <a 
                key={label}
                href="#"
                className="group w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 hover:border-white/40 hover:animate-pulse"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={label}
              >
                <Icon className="text-white/70 group-hover:text-white transition-colors duration-300" size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center animate-fade-in">
        <p className="text-white/40 text-sm">
          © 2024 - Crafted with ❤️ and lots of ☕
        </p>
      </div>
    </div>
  );
};

export default Index;
