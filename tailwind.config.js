/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#071a3c',
        'primary-foreground': '#ffffff',
        secondary: '#f1f5f9',
        'secondary-foreground': '#1e293b',
        muted: '#f8fafc',
        'muted-foreground': '#64748b',
        accent: '#f1f5f9',
        'accent-foreground': '#1e293b',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        success: '#10b981',
        warning: '#f59e0b',
        border: '#e2e8f0',
        input: '#f1f5f9',
        ring: '#071a3c',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}
