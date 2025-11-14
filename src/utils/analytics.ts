// Monitoring des performances
export const measurePerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
        
        console.log('Performance Metrics:', {
          loadTime: `${loadTime}ms`,
          domContentLoaded: `${domContentLoaded}ms`,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A'
        });
      }, 0);
    });
  }
};

// Mesure du temps de chargement Spline
export const measureSplineLoad = (startTime: number) => {
  const loadTime = performance.now() - startTime;
  console.log(`Spline loaded in: ${loadTime.toFixed(2)}ms`);
  return loadTime;
};