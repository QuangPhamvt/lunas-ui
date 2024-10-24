import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    './packages/hooks/index.ts',
    './packages/Icons/index.ts',
    './packages/Layout/index.ts',
    './packages/Atoms/index.ts',
    './packages/Molecules/index.ts',
    './packages/Organisms/index.ts',
    './packages/tailwindTheme.ts',
  ],
  target: 'es2021',
  format: ['esm'],
  splitting: false,
  clean: true,
  dts: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-label',
    '@radix-ui/react-slot',
    '@radix-ui/react-toast',
    'class-variance-authority',
    'clsx',
    'luchide-react',
    'tailwind-merge',
    'react-hook-form',
    '@hookform/resolvers',
    'zod',
  ],
})
