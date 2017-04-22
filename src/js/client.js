$(() => {
  console.log('jQuery on');
  $
  .get('/show/users')
  .done(json => {
    json.forEach(user => {
      $(`<p>${user.username}, ${user.email}, ${user._id}, ${user.password}</p>`).appendTo('.mainContent');
    });
  }); // End of internal AJAX call for users

  $
  .get('http://api.jambase.com/events?artistId=3346&page=0&api_key=vked2v3ab566xrzn5tvy27g6')
  .done(json => {
    console.log(json);
  });
});
