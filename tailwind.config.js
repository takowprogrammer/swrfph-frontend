/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Healthcare specific colors
                brand: {
                    blue: {
                        50: '#f0f3ff',
                        100: '#e3e8fc',
                        200: '#cdd5f6',
                        300: '#aab6ee',
                        400: '#828ce2',
                        500: '#5c61d5',
                        600: '#4343c5',
                        700: '#3432a9',
                        800: '#2a2a89',
                        900: '#243C8A', // Core Navy Blue
                        950: '#1b2a60',
                    },
                    green: {
                        50: '#f1fbf3',
                        100: '#dff6e5',
                        200: '#beeacc',
                        300: '#8cdaaa',
                        400: '#55c27d',
                        500: '#30a35c',
                        600: '#13B14B', // Core Forest Green
                        700: '#1a773d',
                        800: '#175e33',
                        900: '#144d2b',
                        950: '#0b2b17',
                    },
                    red: {
                        50: '#fff3f3',
                        100: '#ffe3e3',
                        200: '#ffcbcc',
                        300: '#ffa7aa',
                        400: '#fb767a',
                        500: '#f1494e',
                        600: '#D12027', // Core Crimson Red
                        700: '#bf161c',
                        800: '#9e151a',
                        900: '#83181c',
                        950: '#480709',
                    }
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "fade-in": {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                "slide-in": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "pulse-slow": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.6s ease-out",
                "slide-in": "slide-in 0.5s ease-out",
                "pulse-slow": "pulse-slow 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}
