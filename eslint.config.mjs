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
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: [
      'src/hoc/**',
      'src/app/question/createByWord/_components/WordFileQuestionUploadFlow.tsx',
      'src/shared/UI/FileInput/index.tsx',
      'src/shared/util/createPaginatedQuery.ts',
      'src/shared/hooks/usePagination.tsx',
      '**/hook.mutation.tsx',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  { files: ['**/hook.mutation.tsx'], rules: { 'react-hooks/rules-of-hooks': 'off' } },
];

export default eslintConfig;
