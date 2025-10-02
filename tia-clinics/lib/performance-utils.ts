/**
 * Performance optimization utilities for smooth animations and interactions
 */

// Debounce function for scroll events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    
    const callNow = immediate && !timeout
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    
    if (callNow) func(...args)
  }
}

// Throttle function for high-frequency events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Intersection Observer with performance optimizations
export function createOptimizedIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  }
  
  return new IntersectionObserver(callback, defaultOptions)
}

// Request Animation Frame wrapper for smooth animations
export function smoothAnimation(callback: () => void): number {
  return requestAnimationFrame(callback)
}

// Cancel animation frame
export function cancelSmoothAnimation(id: number): void {
  cancelAnimationFrame(id)
}

// Preload critical resources
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Optimize scroll performance
export function optimizeScrollPerformance(): void {
  if (typeof window === 'undefined') return
  
  // Add passive event listeners for better scroll performance
  const addPassiveEventListener = (
    element: Element | Window,
    event: string,
    handler: EventListener
  ) => {
    element.addEventListener(event, handler, { passive: true })
  }
  
  // Optimize wheel events
  addPassiveEventListener(window, 'wheel', () => {})
  addPassiveEventListener(window, 'touchmove', () => {})
}

// Memory management for animations
export class AnimationManager {
  private animations: Set<number> = new Set()
  
  add(id: number): void {
    this.animations.add(id)
  }
  
  remove(id: number): void {
    cancelAnimationFrame(id)
    this.animations.delete(id)
  }
  
  cleanup(): void {
    this.animations.forEach(id => cancelAnimationFrame(id))
    this.animations.clear()
  }
}

// GPU acceleration helper
export function enableGPUAcceleration(element: HTMLElement): void {
  element.style.transform = 'translateZ(0)'
  element.style.backfaceVisibility = 'hidden'
  element.style.perspective = '1000px'
}

// Viewport utilities
export function getViewportDimensions() {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 }
  }
  
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

// Check if element is in viewport
export function isInViewport(element: Element, threshold = 0): boolean {
  if (typeof window === 'undefined') return false
  
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth
  
  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= windowHeight + threshold &&
    rect.right <= windowWidth + threshold
  )
}

// Smooth scroll utility
export function smoothScrollTo(
  element: Element | string,
  options: ScrollIntoViewOptions = {}
): void {
  const target = typeof element === 'string' 
    ? document.querySelector(element)
    : element
    
  if (!target) return
  
  const defaultOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
    ...options
  }
  
  target.scrollIntoView(defaultOptions)
}

// Performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()
  
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }
  
  startTiming(label: string): void {
    this.metrics.set(label, performance.now())
  }
  
  endTiming(label: string): number {
    const startTime = this.metrics.get(label)
    if (!startTime) return 0
    
    const duration = performance.now() - startTime
    this.metrics.delete(label)
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${label}: ${duration.toFixed(2)}ms`)
    }
    
    return duration
  }
  
  measureAsync<T>(label: string, fn: () => Promise<T>): Promise<T> {
    this.startTiming(label)
    return fn().finally(() => this.endTiming(label))
  }
}

// Initialize performance optimizations
export function initializePerformanceOptimizations(): void {
  if (typeof window === 'undefined') return
  
  // Optimize scroll performance
  optimizeScrollPerformance()
  
  // Add CSS containment for better performance
  document.documentElement.style.contain = 'layout style paint'
  
  // Enable hardware acceleration for body
  enableGPUAcceleration(document.body)
}
