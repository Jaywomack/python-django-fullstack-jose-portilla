// Clicks

$('h1').click(function () {
  console.log('There was a click!');
});

$('li').click(function () {
  console.log('any li was clicked');
});

// Effect what is being clicked
$('h1').click(function () {
  $(this).text('I was changed!');
});

// Key press

$('input')
  .eq(0)
  .keypress(function () {
    if (event.which === 13) {
      $('h3').toggleClass('turnBlue');
    }
  });

// on()

$('h1').on('dblclick', function () {
  $(this).toggleClass('turnBlue');
});

// Jquery Animation
$('input')
  .eq(1)
  .on('click', function () {
    $('.container').slideUp(3000);
  });
