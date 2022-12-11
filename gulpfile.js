const { src, dest, series, watch } = require(`gulp`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssCompressor = require(`gulp-clean-css`),
    jsValidator = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    jsCompressor = require(`gulp-uglify`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;


let compressHTML = () => {
    return src(`index.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressCSS = () => {
    return src(`styles/*.css`)
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressJS = () => {
    return src(`scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod`));
};

let validateJS = () => {
    return src(`js/app.js`)
        .pipe(jsValidator())
        .pipe(jsValidator.formatEach(`compact`, process.stderr));
};

let transpileJSForDev = () => {
    return src(`scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let transpileJSForProd = () => {
    return src(`scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `temp`,
                `./`,
                `*`,
            ]
        }
    });

    watch(`*.html`).on(`change`, reload);
    watch(`styles/*.css`).on(`change`, reload);
    watch(`scripts/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);

};
exports.validateJS = validateJS;
exports.transpileJSForDev = transpileJSForDev;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.compressJS = compressJS;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = serve;
exports.build = series(
    compressJS,
    transpileJSForProd,
    compressHTML,
    compressCSS,
);
