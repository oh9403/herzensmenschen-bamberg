/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF6F1',
        'cream-deep': '#F2EBE0',
        'cream-dark': '#E8DDD0',
        terracotta: '#C1683A',
        'terracotta-hover': '#A85A38',
        'terracotta-light': '#D98E6E',
        'deep-brown': '#3E2723',
        'soft-brown': '#5D4037',
        'warm-gold': '#D4A056',
        'warm-gold-light': '#E8C48A',
        sage: '#8BA888',
        'sage-light': '#B5CBB3',
      },
    },
  },
  plugins: [],
}
