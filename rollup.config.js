import babel from 'rollup-plugin-babel';

export default {
  entry: './src/index.js',
  format: 'cjs',
  plugins: [
    babel({
      presets: [
        [
          'env',
          {
            modules: false,
            targets: {
              node: 6,
            },
          },
        ],
        'stage-0',
      ],
      babelrc: false,
    }),
  ],
  dest: './dist/index.js',
};
