require.config({
    baseUrl: '../assets/bower_components/',
    paths: {
        jquery: 'jquery/jquery'
    }
});

require(['jquery'], function($){
    console.log($)
});