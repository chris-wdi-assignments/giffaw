$(document).on("ready", function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    let subject = $('#query').val();
    let apiKey = $('#apiKey').val();
    $.ajax({
      method: "GET",
      url: "https://api.giphy.com/v1/gifs/search",
      data: $(this).serialize(),
      success: getGifs
    });
  });
});

function getGifs (res) {
  console.log(res);
  res.data.forEach(function (gif) {
    $('<img>').attr('src', gif.url).appendTo('.gif-gallery');
  })
}
