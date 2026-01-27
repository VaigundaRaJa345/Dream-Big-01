/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0f172a',   // slate-900
                    navy: '#1e293b',   // slate-800
                    accent: '#6366f1', // indigo-500
                    glow: '#a855f7',   // purple-500
                }
            }
        },
    },
    plugins: [],
}
