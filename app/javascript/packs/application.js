// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery
//= require jquery_ujs
//= require_tree .


require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

require('jquery')



console.log('Hello World from Webpacker')
// require('./hello_react.jsx')    // この行を追加

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

import Counter from '../reduxPractice/counter'
window.Counter = Counter
//
import Name from '../reduxPractice/name'
window.Name = Name

console.log('hoge');

require('./practice.js')
// require('./calendar_prac.js')