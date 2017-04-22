$(() => {
  console.log('jQuery on');
  // loginForm looks bad with button or submit, so I used an a tag
  $('#loginSubmit').on('click', () => {
    $('#loginForm').submit();
  });

  // registerModal event listener
  $('.modalShow').on('click', () => {
    $('.modal').addClass('is-active');
    $('.modalClose').on('click', () => {
      $('.modal').removeClass('is-active');
    });
  });

  // Internal AJAX call for users
  $
  .get('/show/users')
  .done(users => {
    if (users.length > 0) {
      users.forEach(user => {
        $(`<p>${user.username}, ${user.email}, ${user._id}, ${user.password}</p>`).appendTo('.users');
      });
    } else {
      $(`<h2>Database not connected</h2>`).appendTo('.users');
    }
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
