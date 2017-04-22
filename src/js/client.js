$(() => {
  console.log('jQuery on');

  // Internal AJAX call for users
  $
  .get('/show/users')
  .done(json => {
    json.forEach(user => {
      $(`<p>${user.username}, ${user.email}, ${user._id}, ${user.password}</p>`).appendTo('.mainContent');
    });
  }); // End of internal AJAX call for users

  // External AJAX call for gig data, this is for Primus, artist id: 3346

  // $
  // .get('http://api.jambase.com/events?artistId=3346&page=0&api_key=vked2v3ab566xrzn5tvy27g6')
  // .done(json => {
  //   for (const field in json) console.log(json[field]);
  // });
});

// http://api.jambase.com/search?zip=94107&apikey=vked2v3ab566xrzn5tvy27g6
