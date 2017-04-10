import $ from 'jquery';
import Chart from 'chart.js';
import css from './vendor.js';
import style from '../styles/styles.scss';
import videojs from 'video.js'


$(document).ready(function() {

  w3IncludeHTML();

  $('#import-block').click( () => {
    var fileName = $('#block-file').val();
    $('#block-container').append('<span class="block" w3-include-html="' + fileName + '"></span>')
    w3IncludeHTML();

  })

  $('#init-video').click( () => {
    videojs("main-video", {}, function(){
      // Player (this) is initialized and ready.
    });
  })
});
