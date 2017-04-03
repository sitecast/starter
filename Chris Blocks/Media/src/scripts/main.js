import $ from 'jquery';
import Chart from 'chart.js';
import css from './vendor.js';
import style from '../styles/styles.scss'
import videoStyle from '../styles/video.scss'

$(document).ready(function() {
  $("#changePlayerColor").click(function(){
    var color = $('#picker').val()
    $(".vjs-big-play-button").css("background-color", color);
    $(".vjs-play-progress").css("background-color", color);
    $(".vjs-volume-level").css("background-color", color);
  })
})
