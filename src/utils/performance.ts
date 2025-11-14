// Utilitaires pour optimiser les performances
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Détection de la performance de l'appareil
export const getDevicePerformance = () => {
  // @ts-ignore
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const memory = (navigator as any).deviceMemory || 4;
  
  const isLowEnd = memory <= 2 || (connection && connection.effectiveType === 'slow-2g');
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  return {
    isLowEnd,
    isMobile,
    shouldReduceAnimations: isLowEnd || (isMobile && memory <= 4)
  };
};

// Configuration d'animation adaptative
export const getAnimationConfig = () => {
  const { shouldReduceAnimations } = getDevicePerformance();
  
  return {
    duration: shouldReduceAnimations ? 0.3 : 0.8,
    ease: shouldReduceAnimations ? 'power1.out' : 'power3.out',
    stagger: shouldReduceAnimations ? 0.05 : 0.15,
    enableBlur: !shouldReduceAnimations
  };
};