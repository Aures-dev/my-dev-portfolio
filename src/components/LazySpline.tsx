import { lazy, Suspense, useState, useEffect } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface LazySplineProps {
  scene: string;
  className?: string;
}

export default function LazySpline({ scene, className }: LazySplineProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Délai pour permettre au reste de la page de se charger
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('spline-container');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div id="spline-container" className={className}>
      {shouldLoad && isVisible ? (
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse text-white/50">Chargement 3D...</div>
          </div>
        }>
          <Spline scene={scene} />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-violet-900/20 to-purple-900/20 animate-pulse" />
      )}
    </div>
  );
}