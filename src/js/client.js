$(() => {
  console.log('jQuery on');
  // input button is ugly
  $('#loginSubmit').on('click', () => {
    $('#loginForm').submit();
  });

  $('#nav-toggle').on('click', () => {
    $('#nav-menu').toggleClass('is-active');
  });

  $('.modalShow, .modalClose').on('click', () => {
    $('.modal').toggleClass('is-active');
  });

  $('.deleteNotification').on('click', () => {
    $('.notification').remove();
  });
});
