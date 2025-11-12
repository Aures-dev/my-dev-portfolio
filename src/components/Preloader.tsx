import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: function() {
        const progress = Math.round((1 - this.progress()) * 100);
        if (percentRef.current) {
          percentRef.current.textContent = `${100 - progress}%`;
        }
      }
    })
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        onComplete();
      }
    });
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <div className="relative mb-8">
        <svg width="200" height="200" className="rotate-[-90deg]">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="2"
          />
          <circle
            ref={progressRef}
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="565.48"
            strokeDashoffset="565.48"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2 tracking-tight"
                 style={{
                   textShadow: '0 0 30px rgba(139, 92, 246, 0.8)'
                 }}>
              AZ
            </div>
            <div
              ref={percentRef}
              className="text-violet-400 text-sm font-light tracking-wider"
            >
              0%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
