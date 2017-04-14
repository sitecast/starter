import $ from 'jquery';
import Chart from 'chart.js';
import css from './vendor.js';
import style from '../styles/styles.scss';
import videojs from 'video.js';
import Masonry from 'masonry-layout';


$(document).ready(function() {

  $('#import-block').click( () => {
    var fileName = $('#block-file').val();
    $.get(fileName, function (data) {
        $('#block-container').append(data);

        if(fileName === './blocks/media_player/media_player_block.html') {
          videojs("main-video", {}, function(){
            // Player (this) is initialized and ready.
          })
        }
    });
  })


  var elem = document.querySelector('.grid');

  var msnry = new Masonry( '.grid', {
    
    itemSelector: '.grid-item'
  });

});
