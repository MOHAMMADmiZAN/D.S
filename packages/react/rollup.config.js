const TS = require('rollup-plugin-typescript2');

module.exports = {
    input: [
        'src/index.ts',
        'src/atoms/Button/index.ts',

    ],
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [TS()],
    external: ['react', '@d.s/foundation','@d.s/scss/dist/Button.css'],
};