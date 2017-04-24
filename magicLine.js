/**
 * Created by Losiev on 24.04.2017.
 */
$(document).ready(function() {

  //var
  var $nav = $('.nav-underline'),
    $line = $('<div>').appendTo($nav),
    $activeLi,
    lineWidth,
    liPos;

  function refresh() {
    $activeLi = $nav.find('li.active');
    lineWidth = $activeLi.outerWidth();
    liPos = $activeLi.position().left;
  }
  refresh();

  $nav.css('position','relative');

  //line setup
  function lineSet() {
    $line.css({
      'position':'absolute',
      'background-color':'#ffffff',
      'bottom':'0',
      'height':'3px'
    }).animate({
      'left':liPos,
      'width':lineWidth
    }, 200);
  }
  lineSet();

  //on click
  $nav.find('li').on('click', function() {
    $activeLi.removeClass('active');
    $(this).addClass('active');
    refresh();
    lineSet();
  });
});//end ready