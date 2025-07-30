import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// ESLint configuration for React project with Vite
export default defineConfig([
  // Ignore build output directory
  globalIgnores(['dist']),
  
  // Configuration for JavaScript and JSX files
  {
    files: ['**/*.{js,jsx}'],
    
    // Extend recommended configurations
    extends: [
      js.configs.recommended, // Base JavaScript rules
      reactHooks.configs['recommended-latest'], // React Hooks rules
      reactRefresh.configs.vite, // React Refresh for Vite
    ],
    
    // Language and parser options
    languageOptions: {
      ecmaVersion: 2020, // JavaScript version
      globals: globals.browser, // Browser globals
      parserOptions: {
        ecmaVersion: 'latest', // Latest ECMAScript features
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Use ES modules
      },
    },
    
    // Custom rules
    rules: {
      // Allow unused variables that start with uppercase or underscore (like React components)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
