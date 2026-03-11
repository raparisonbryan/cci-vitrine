import type { Directive } from 'vue'
import { animate, inView } from 'motion'

export interface MotionOptions {
  initial?: Record<string, number | string>
  enter?: Record<string, number | string>
  duration?: number
  delay?: number
}

const defaultOptions: Required<Pick<MotionOptions, 'duration' | 'delay'>> = {
  duration: 0.7,
  delay: 0,
}

/**
 * v-motion directive — triggers an animate() call when the element
 * enters the viewport via IntersectionObserver (motion's inView).
 *
 * Usage:
 *   v-motion="{ initial: { opacity: 0, y: 40 }, enter: { opacity: 1, y: 0 } }"
 *   v-motion-fade          (preset: fade up)
 *   v-motion-fade-left     (preset: fade from left)
 *   v-motion-fade-right    (preset: fade from right)
 *   v-motion-scale         (preset: scale up)
 */
function applyMotion(el: HTMLElement, options: MotionOptions) {
  const {
    initial = {},
    enter = {},
    duration = defaultOptions.duration,
    delay = defaultOptions.delay,
  } = options

  Object.entries(initial).forEach(([key, value]) => {
    if (key === 'y') {
      el.style.transform = `translateY(${value}px)`
    } else if (key === 'x') {
      el.style.transform = `translateX(${value}px)`
    } else if (key === 'scale') {
      el.style.transform = `scale(${value})`
    } else if (key === 'opacity') {
      el.style.opacity = typeof value === 'number' ? String(value) : value
    }
  })

  inView(
    el,
    () => {
      animate(el, enter, {
        duration,
        delay,
      })
    },
    { margin: '0px 0px -80px 0px' },
  )
}

const presets: Record<string, MotionOptions> = {
  fade: {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0 },
  },
  'fade-left': {
    initial: { opacity: 0, x: -40 },
    enter: { opacity: 1, x: 0 },
  },
  'fade-right': {
    initial: { opacity: 0, x: 40 },
    enter: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
  },
}

export const vMotion: Directive<HTMLElement, MotionOptions | undefined> = {
  mounted(el, binding) {
    const options = binding.value ?? presets['fade'] ?? {}
    applyMotion(el, options)
  },
}

export const vMotionFade: Directive<HTMLElement, Partial<MotionOptions> | undefined> = {
  mounted(el, binding) {
    applyMotion(el, { ...presets['fade'], ...binding.value })
  },
}

export const vMotionFadeLeft: Directive<HTMLElement, Partial<MotionOptions> | undefined> = {
  mounted(el, binding) {
    applyMotion(el, { ...presets['fade-left'], ...binding.value })
  },
}

export const vMotionFadeRight: Directive<HTMLElement, Partial<MotionOptions> | undefined> = {
  mounted(el, binding) {
    applyMotion(el, { ...presets['fade-right'], ...binding.value })
  },
}

export const vMotionScale: Directive<HTMLElement, Partial<MotionOptions> | undefined> = {
  mounted(el, binding) {
    applyMotion(el, { ...presets['scale'], ...binding.value })
  },
}
