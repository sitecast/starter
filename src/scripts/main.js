/*
 *  Vendor Dependencies
 *  Add addtional dependencies below
 */

/*  Vendor JS Imports  */

import $ from 'jquery';
import Masonry from 'masonry-layout';
import Chart from 'chart.js/dist/Chart.min.js';

/* Add additional JS Imports below */

//import videojs from 'video.js';


/*   CSS Imports  */
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/css/font-awesome.css';
import 'video.js/dist/video-js.min.css';
import '../styles/styles.scss';
import 'animate.css/animate.css';



/* Add custom JS code here */
$(document).ready(function() {

  const x = "es2015";
  x => { console.log(x)}

  $('#import-block').click( () => {
    var fileName = $('#block-file').val();
    $.get(fileName, function (data) {
        $('#block-container').append(data);

        if(fileName === './blocks/media_player/media_player_block.html') {
          videojs("main-video", {}, function(){
          })
        }
    });
  })

  if($('.grid')[0]) {
    var elem = document.querySelector('.grid');

    var msnry = new Masonry( '.grid', {
      itemSelector: '.grid-item'
    });
  }
});
