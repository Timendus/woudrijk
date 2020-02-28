import RSSParser from 'rss-parser';
const url = 'https://cors-anywhere.herokuapp.com/https://medium.com/feed/woudrijk';

export default () => {
  return fetch(url)
    .then(response => {
      if ( response.ok ) return response.text();
      else throw 'Error: server returned ' + response;
    })
    .then(rss => new RSSParser().parseString(rss))
    .then(json => {
      return json.items.map(item => ({
        date: new Date(item.isoDate),
        link: item.link.split("?")[0],    // Remove ?source=rss...
        title: item.title,
        author: item.creator,
        content: item['content:encoded'].split('<img src="https://medium.com/_/stat?')[0]
      }))
    });
}
