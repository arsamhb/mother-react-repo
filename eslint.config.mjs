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
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-ignore': false,
          'ts-expect-error': true,
          'ts-nocheck': true,
          'ts-check': false,
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  {
    files: [
      'src/hoc/**',
      'src/app/question/createByWord/_components/CreateQuestionByWordFile.tsx',
      'src/shared/UI/FileInput/index.tsx',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Disables "any" issue in this directory only
    },
  },
];

export default eslintConfig;
