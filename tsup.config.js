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
    '@radix-ui/react-slot',
    'luchide-react',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
  ],
})
