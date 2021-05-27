/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
//jquery components
require('jquery');
require('./jquery/bootstrap-notify/bootstrap-notify');
require('./jquery/base');
require ('./jquery/jquery.easing.min');
// require('./jquery/');
// require('./jquery/jquery.dataTables');
require('./jquery/aj-custom-select');
require('./jquery/owl.carousel/owl.carousel');
require('./jquery/php-email-form/validate');
// require('./jquery/venobox/venobox');
// require('./jquery/slick');
require('react-google-maps');
require('slick-carousel');
// require('./jquery/main');
require('./custom');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');
// require('./Product/new');
require('./backend/managePostCreate');

require('./frontend/home/Index');
require('./backend/MapGoogle');
require('./backend/PaymentConfirm');
require('./backend/TransportPayment');
// require('./frontend/includes/TopCategorySlider');
