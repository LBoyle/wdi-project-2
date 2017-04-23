$(() => {
  console.log('jQuery on');
  // didn't submit when pressing an a link, input button is ugly
  $('#loginSubmit').on('click', () => {
    $('#loginForm').submit();
  });

  // registerModal event listener
  $('.modalShow').on('click', () => {
    // $('.modal').show('fade');
    $('.modal').addClass('is-active');
    $('.modalClose').on('click', () => {
      // $('.modal').hide('fade');
      $('.modal').removeClass('is-active');
    });
  });

  $('.nav-toggle').on('click', () => {
    // this works, I can use it for mobile menu?
  });

  // $('.deleteNotification').on('click', () => {
  //   locals.message = '';
  //   $('.notification').remove();
  // });
});
