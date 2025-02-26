import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['src/lib/axiosInstance.ts', 'node_modules', 'dist', 'build', '.next'],
  },

  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ),

  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
    },
  },
];

export default eslintConfig;
