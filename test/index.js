var ecomparser = require('../index'),
    siteData   = require('./data.json');



// var amazon = ecomparser('http://www.amazon.com/gp/product/B00EQRN9VA/ref=s9_simh_gw_p107_d5_i3?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-3&pf_rd_r=137C2X1V7567Z9NSKR5G&pf_rd_t=36701&pf_rd_p=2084660942&pf_rd_i=desktop', siteData);

// amazon.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!', err);
// });


// var citrus = ecomparser('http://www.citrus.ua/shop/goods/tabletpc/262/248181', siteData);

// citrus.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!');
// });



// var allo = ecomparser('http://allo.ua/ru/products/mobile/apple-iphone-6-16gb-gold.html', siteData);

// allo.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!', err);
// });


// var rozetka = ecomparser('http://bt.rozetka.com.ua/granchio-ecopan-88064-22/p151818/', siteData);

// rozetka.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!', err);
// });


// var foxtrot = ecomparser('http://www.foxtrot.com.ua/ru/shop/holodilniki_delfa_dbf-150.html', siteData);

// foxtrot.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!', err);
// });


// var eldorado = ecomparser('http://www.eldorado.com.ua/offer_1366142/p1366142/', siteData);

// eldorado.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!', err);
// });


// var fotomag = ecomparser('http://fotomag.com.ua/apple-ipad-mini-2-with-retina-display-32gb-wi-fi-4g-(me820tu-a)-space-grey-info.html', siteData);

// fotomag.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!');
// });


// var fua = ecomparser('https://f.ua/philips/hd9046-90.html', siteData);

// fua.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!');
// });


// var mobilluck = ecomparser('http://www.mobilluck.com.ua/katalog/LCDTV/Saturn/Saturn-LED46KF-334620.html', siteData);

// mobilluck.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!');
// });


// var deshevshe = ecomparser('http://deshevshe.net.ua/monoblocks-asus/asus_zen_aio_pro_z240icgt_gj079x_90pt01e', siteData);

// deshevshe.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!');
// });


// var comfy = ecomparser('http://comfy.ua/televizor-finlux-32-flyr-274s.html', siteData);

// comfy.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!');
// });


// var promua = ecomparser('http://prom.ua/p160879155-zimnyaya-kurtka-puhovik.html', siteData);

// promua.done(function(val) {
//     console.log('Done!', val);
// }, function(err) {
//     console.log('Failed!');
// });


var promua = ecomparser('http://ilounge.com.ua/products/avtozaryadka-rock-dual-motor-aluminum-grey-kupit', siteData);

promua.done(function(val) {
    console.log(val);
}, function(err) {
    console.log(err.toString());
});