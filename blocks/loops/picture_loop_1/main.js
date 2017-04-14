import $ from 'jquery';
import Masonry from 'masonry-layout';


$(document).ready(function() {
  var elem = document.querySelector('.grid');

  var msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item'
  });

});
