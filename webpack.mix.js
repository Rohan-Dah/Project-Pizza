let mix = require('laravel-mix')
//including laravel depencency in this file.

/*
| Mix Asset Management
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass file for your application, as well as bundling up your JS files. I
|
*/

mix.js('resources/js/app.js', 'dist/').sass('src/app.scss', 'dist/')

// Full API 
// mix.js(src, output); 
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation. 
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation. 
// mix.coffee(sre, output); <-- Identical to mix.js(), but registers CoffeeScript compilation. 
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack mix.js 
// mix.extract(vendorlibs); 
// mix.sass(src, output); 
// mix. less(src, output); 
// mix.stylus sro, output); 
// mix.postcss(src, output, [require('postcss-some-plugin') 01): 
// mix.browserSynck my site.test'); 
// mix.combine(files, destination); 
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation. 
// mix.copy(from, to); 
// mix.copyDirectory(fromDir, toDir); 
// mix.minify(file); 
// mix.sourceMaps(); 
// Enable sourcemaps 
// mix version (; 
// Enable versioning. 
// mix.disableNotifications(); 
// mix.setPublicPath('path/to/public'); 
// mix.setResourceRoot('prefix/for/resource/locators');
/*
// mix .autoload ({}); <-- Will be passed to Webpac k's Prov idePlugin.
"// mix .webpac kConfig ({}); <-- Override webpack .conf ig .js, without ed iting the file directly."
"// mix.babelConf ig ({}); <-- Merge ext ra Babel configu ration (plug ins, etc. ) with Mix' s defau lt."
// mix. then (function () {}) <-- Will be triggered each time Webpac k finishes build ing.
// mix.override (function (webpac kConf ig) {}) <-- Will be triggered once the webpac k config object has been fully generated by Mix .
// mix.d ump (); <-- Dump the generated webpack config object to the console.
"// mix.extend (name, hand ler ) <-- Extend Mix's API with your own components ."
// mix.o ptions ({
"// ext ractVueSty les:\alse, //"
"Ext ract .vue component styling to file, rather than inline."
"// globa lVueSty les: file, // Varia bles file to be imported in every component ."
"// p rocessCssU r ls: true, // Process/optimize relative stylesheet u rl()'s. Set to false, if you don't want them"
touched.
"// pu rifyCss: false, // Remove unused CSS selectors."
"// te rser: {}, // Terse r-spec ific opt ions. https://github. com/webpa ck-cont rib/t erser-web pack-plug in#opt ions"
// post Css: [] // Post-CSS opt ions: https://github.com/post css/post css/b lob/m aster/docs/plugins.md
// } ) ;
*/