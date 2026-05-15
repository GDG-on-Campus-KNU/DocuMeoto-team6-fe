import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Prettier 포맷 오류를 ESLint 오류로 표시
      'prettier/prettier': 'error',

      // CLAUDE.md: any 타입 금지
      '@typescript-eslint/no-explicit-any': 'error',

      // CLAUDE.md: console.log 커밋 금지
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // 미사용 변수 경고 (타입 import 제외)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
])
