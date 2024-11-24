import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import js from '@eslint/js'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  // Rules
  js.configs.recommended,
  {
    rules: {
      'no-use-before-define': 'warn',
      'eqeqeq': 'warn',
      'default-case-last': 'warn',
      'consistent-return': 'warn',
      'camelcase': 'warn',
      'max-lines': ['warn', 500],
      'max-lines-per-function': ['warn', 20],
      'max-params': ['warn', 3],
      'no-else-return': 'warn',
      'no-empty-function': 'warn',
      'no-lonely-if': 'warn',
      'no-nested-ternary': 'warn',
      'no-var': 'warn',
      'prefer-const': 'warn',
      'require-await': 'warn',
      'yoda': 'warn',
      'no-console': 'warn',
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'never'],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description'
        }
      ],
      'vue/first-attribute-linebreak': 'warn',
      'vue/html-closing-bracket-newline': 'warn',
      'vue/html-indent': [
        'warn',
        2
      ],
      'vue/max-attributes-per-line': 'warn',
      'vue/multiline-html-element-content-newline': 'warn'
    }
  }
]

