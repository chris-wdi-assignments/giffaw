$(document).on("ready", function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "https://api.giphy.com/v1/gifs/search",
      data: $(this).serialize(),
      success: getGifs
    });
  });
});

function getGifs (res) {
  res.data.forEach(function (gif) {
    $('<img>')
      .attr('src', gif.images.fixed_height_small.url)
      .attr('alt', 'yolo')
      .appendTo('.gif-gallery');
  })
}
