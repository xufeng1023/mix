const { mix } = require('laravel-mix');

mix.js('src/js/app.js', 'www/js')
   .sass('src/css/app.scss', 'www/css');
