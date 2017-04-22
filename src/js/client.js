$(() => {
  console.log('jQuery on');

  // Internal AJAX call for users
  $
  .get('/show/users')
  .done(users => {
    users.forEach(user => {
      $(`<p>${user.username}, ${user.email}, ${user._id}, ${user.password}</p>`).appendTo('.users');
    });
  }); // End of internal AJAX call for users
  // Internal AJAX call for artists
  $
  .get('/artists')
  .done(artists => {
    artists.forEach(artist => {
      $(`<p><a href="/artist/${artist._id}">${artist.name}, ${artist.description}</a></p>`).appendTo('.artists');
    });
  }); // End of internal AJAX call for artists
  // Internal AJAX call for venues
  $
  .get('/venues')
  .done(venues => {
    venues.forEach(venue => {
      $(`<p><a href="/venue/${venue._id}">${venue.name}, ${venue._id}</a></p>`).appendTo('.venues');
    });
  }); // End of internal AJAX call for venues
  // Internal AJAX call for venues
  $
  .get('/events')
  .done(events => {
    events.forEach(event => {
      console.log(event);
      $(`<p><a href="/event/${event._id}">${event.name}, ${event._id}</a></p>`).appendTo('.events');
    });
  }); // End of internal AJAX call for venues

  // External AJAX call for gig data, this is for Primus, artist id: 3346

  // $
  // .get('http://api.jambase.com/events?artistId=3346&page=0&api_key=vked2v3ab566xrzn5tvy27g6')
  // .done(json => {
  //   for (const field in json) console.log(json[field]);
  // });
});

// http://api.jambase.com/search?zip=94107&apikey=vked2v3ab566xrzn5tvy27g6
