// Note: A lot of this is copied from react-native, with modifications to not use prettier
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'import',
    'react',
    'react-hooks',
    'jest',
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: [
        '*.{spec,test}.{js,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,ts,tsx}',
      ],
      env: {
        jest: true,
        'jest/globals': true,
      },
    }
  ],
  rules: {
    // This project uses snake_case
    "@typescript-eslint/camelcase": "off",
    // Tooling support is enough
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    // To allow extracting sub-objects using spread operator
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/no-var-requires": "off",
    // Style
    "arrow-parens": ["error", "as-needed"],
    // Style
    "brace-style": [
      1,
      "stroustrup"
    ],
    curly: [
      "warn",
      "multi-or-nest"
    ],
    // Not all class methods should need to have this.xxx somewhere
    "class-methods-use-this": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-duplicates": "off", // Broken now???????????????????????
    "import/no-extraneous-dependencies": ["error", { "packageDir": './' }],
    // A lot of the import stuff seems overly strict
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",
    // No space after flow control keywords ( if(), for(), while()... )
    "keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true,
        "overrides": {
          "if": {
            "after": false
          },
          "while": {
            "after": false
          },
          "for": {
            "after": false
          },
          "switch": {
            "after": false
          },
          "catch": {
            "after": false
          }
        }
      }
    ],
    // Git standard: use local and commit unix line endings
    "linebreak-style": "off",
    // Allow spacing
    "lines-between-class-members": "off",
    "max-classes-per-file": "off", // Counts inner classes for some reason
    // Increased max len for modern computers
    "max-len": [
      "warn",
      140
    ],
    // react allows state override
    "no-dupe-class-members": "off",
    // Better readability sometimes
    "no-else-return": "off",
    "no-undef": 0,
    "no-restricted-syntax": "off",
    "no-useless-constructor": "off", // Typescript got this one
    "nonblock-statement-body-position": [
      "error",
      "below",
    ],
    "object-curly-newline": "off", // Style
    "react/destructuring-assignment": "off", // Shouldn't always need destructuring
    "react/prop-types": "off", // We use typescript, already typed.
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": "off", // Typing provides good enough readability
    "react/sort-comp": "off", // render, as a public method, should go above private methods
    "react/state-in-constructor": "off",
    "react/static-property-placement": ["error", "static public field"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      typescript: {
        "alwaysTryTypes": true,
        "directory": "./tsconfig.json",
      },
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      },
    },
  },
};
