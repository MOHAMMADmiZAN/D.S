const fs = require('fs');
const path = require('path');
const sass = require('sass');

const compile = (src, output) => {
    const result = sass.compile(path.resolve(src), {
        style: 'expanded',
        sourceMap: true,
        verbose: true,


    });
    fs.writeFileSync(path.resolve(output), result.css);


}
// find all directories have scss file in src folder and compile them
const findScssAndCompile = (dir) => {
    const ignoreDir = ['base', 'scripts', 'foundation'];
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.resolve(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            // if directory name in ignoreDir array, ignore it
            if (ignoreDir.indexOf(file) === -1) {
                findScssAndCompile(filePath);
            }
        }
        if (stat.isFile() && path.extname(filePath) === '.scss') {
            // file name without extension
            const fileName = path.basename(filePath, '.scss');

            compile(`${dir}/${fileName}.scss`, `dist/${fileName}.css`);
        }
    });
}
findScssAndCompile('src');


