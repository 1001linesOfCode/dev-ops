const colorService = require('./services/color-service');

$(document).ready(() => {
  $('#searchBtn').on('click', () => {
    const searchText = $('#search').val();

    colorService
      .searchColors(searchText)
      .then((results) => {
        const paletteTemplate = $('#paletteTemplate');
        const output = $('#output');

        results.forEach((palette) => {
          const paletteHtml = paletteTemplate.html().trim();
          const $palette = $(paletteHtml);

          // TODO: Update palette name, and author
          const $image = $palette.find('.palette-image');
          $image.attr('src', palette.imageUrl);

          const $name = $palette.find('.palette-name');
          $name.text(palette.title);

          const $author = $palette.find('.palette-author');
          $author.text(palette.userName);

          output.append($palette);
        })
          .catch((err) => {
            console.error(err);
          });
      });
  });
});
