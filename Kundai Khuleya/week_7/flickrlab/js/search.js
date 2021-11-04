const searchFlickr = function (keywords) {
  console.log('Searching Flickr for', keywords);
  // TODO ACTUALLY SEARCH
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';//JSONP
  $.getJSON(flickrURL,{
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json'

  }).done(showImages).done(function (info) {

  });
};

const showImages = function (results) {
  //console.log('is this working')
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    console.log(generateURL(photo))
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
    //generate the photo URL
    //create an image to display that URL
    //append to images
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg'
  ].join('');
};

$(document).ready(function () {
  //submit event listerner
  $('#search').on('submit', function (event){
    event.preventDefault();
    //console.log('ayyy baybee');

    const searchTerms = $('#query').val();
    // console.log(searchTerms);
    searchFlickr(searchTerms);
  });

  $(window).on('scroll', function (){
    //console.log('scroll');
    const scrollBottom = $(document).height() - $(window).scollTop - $(window).height();
    //console.log('scrollBottom')
    if (scrollBottom < 700) {
      const searchTerms = $('#query').val();
      searchFlickr( searchTerms );
    };
  });
});
