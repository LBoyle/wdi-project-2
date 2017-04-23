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

  $('.nav-toggle').on('click', () => {

  });

  // // Internal AJAX call for users
  // $
  // .get('/show/users')
  // .done(users => {
  //   if (users.length > 0) {
  //     users.forEach(user => {
  //       $(`<p>${user.username}, ${user.email}, ${user._id}, ${user.password}</p>`).appendTo('.users');
  //     });
  //   } else {
  //     $(`<h2>Database not connected</h2>`).appendTo('.users');
  //   }
  // }); // End of internal AJAX call for users

  // Internal AJAX call for artists
  $
  .get('/artists')
  .done(artists => clickTitle(artists, 'artist'));
  // Internal AJAX call for venues
  $
  .get('/venues')
  .done(venues => clickTitle(venues, 'venue'));
  // Internal AJAX call for venues
  $
  .get('/events')
  .done(events => clickTitle(events, 'event'));

  // External AJAX call for gig data, this is for Primus, artist id: 3346

  // $
  // .get('http://api.jambase.com/events?artistId=3346&page=0&api_key=vked2v3ab566xrzn5tvy27g6')
  // .done(json => {
  //   for (const field in json) console.log(json[field]);
  // });

  function clickTitle(objectList, keyString) {
    $(`.${keyString+'s'}`).one('click', () => {
      createList(objectList, keyString);
      $(`.${keyString+'s'}`).one('click', function() {
        $(`.${keyString+'s'}List`).remove();
        clickTitle(objectList, keyString);
      });
    });
  }

  function createList(objectList, keyString) {
    let parentString = `<section class="hero is-primary is-medium ${keyString+'s'}List">
      <div class="hero-body">
        <div class="container">`;
    objectList.forEach(object => {
      parentString +=
      `<div>
      <h1 class="title">
        ${object.name}
      </h1>
      <h2 class="subtitle">
        <p><a href="/${keyString}/${object._id}">View, ${object._id}</a></p>
      </h2>
      </div>`;
    });
    parentString += '</div></div></section>';
    $(parentString).appendTo(`.${keyString+'s'}`);
  }
});
