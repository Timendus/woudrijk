import RSSParser from 'rss-parser';
const url = 'https://medium.com/feed/woudrijk';

window.addEventListener('load', () => {
  fetch(url)
  .then(response => {
    if ( response.ok )
      return response.text();
    else
      throw 'Error: server returned ' + response;
  })
  .then(rss => new RSSParser().parseString(rss))
  .then(json => {
    return json.items.map(item => {
      return {
        date: new Date(item.isoDate),                                             // Date
        // Remove ?source=rss...
        link: item.link.split("?")[0],                                            // String (URL)
        // Expose `guid` field (perma/short link?)
        guid: item.guid,                                                          // String (URL|URI)
        title: item.title,                                                        // String
        // In RSS-land, the <dc:creator> tag is for the author's name while the
        // <author> tag is for the author's email address _and_ name. Wild, eh?
        // Sources: https://uly.io/as, https://uly.io/at
        author: item.creator,                                                     // String
        content: item[ctag],                                                      // String (HTML)
        categories: item.categories || []                                         // Array[String]
      }
    })
  })
  .then(rss => {
    console.log(rss);
  })
});

console.log("Testing fetching Medium articles");
