const colourLoversAPI = '//www.colourlovers.com/api/colors';

function getColors() {

}

function searchColors(query, filters = {}) {
  const queryParams = [];
  /* eslint-disable-next-line */
    for(let key in filters){
    queryParams.push(`${key}=${filters[key]}`);
  }
  queryParams.push(`keywords=${query}`);
  queryParams.push('jsonCallback=?');

  const searchUrl = `${colourLoversAPI}?${queryParams.join('&')}`;


  return new Promise((resolve, reject) => {
    $.getJSON(searchUrl, resolve)
      .fail((jqxhr, textStatus, error) => {
        reject(error);
      });
  });
}

module.exports = {
  getColors,
  searchColors,
};
