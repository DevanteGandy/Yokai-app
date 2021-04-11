$(() => {
  const imgArray = [];
  const titleArray = [];
  const synopArray = [];
  const dateArray = [];
  // let imgLink = null;
  $.ajax({
      url:'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[categories]=horror'
  }).then(
    (data)=>{
      for ( i = 0; i < 12; i++) {
        const $imgUrl = $('<img>').attr('src', data.data[i].attributes.posterImage.tiny).attr('value',i).addClass('displayCover')
        // const $boxTitle = $('<div>').text(data.data[i].attributes.canonicalTitle).attr('value',i);
        // const $boxSynop = $('<div>').text(data.data[i].attributes.synopsis).attr('value',i);
        // const $boxDate = $('<div>').text(data.data[i].attributes.startDate).attr('value',i);


        imgArray.push(data.data[i].attributes.posterImage.tiny)
        titleArray.push(data.data[i].attributes.titles.en_jp)
        synopArray.push(data.data[i].attributes.synopsis)
        dateArray.push(data.data[i].attributes.startDate)

        const $modal = $('#Modal');
        const $closeBtn = $('#close');
        const $openBtn = $($imgUrl);


        const openModal = () => {
          $modal.css('display', 'block');
        }
        const closeModal = () => {
          $modal.css('display', 'none');
        }

        $openBtn.on('click', openModal);
        $closeBtn.on('click', closeModal);


        $('.displayCovers').append($imgUrl);
        }
        $('.displayCover').on('click', (event) => {
          $('#innerImg').empty()
          $('#textLayout').empty()
          $('#innerImg').append($('<img>').attr('src', imgArray[$(event.target).attr('value')]))
          $('#textLayout').append($('<h1>').text(titleArray[$(event.target).attr('value')]))
          $('#textLayout').append($('<h2>').text(synopArray[$(event.target).attr('value')]))
          $('#textLayout').append($('<p>').text(dateArray[$(event.target).attr('value')]))



      })
    }
  )
})
$(() => {
  const imgArray = [];
  const titleArray = [];
  const synopArray = [];
  const dateArray = [];
  // let imgLink = null;
  $.ajax({
      url:'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=10&filter[categories]=supernatural'
  }).then(
    (data)=>{
      for ( i = 0; i < 12; i++) {
        const $imgUrl = $('<img>').attr('src', data.data[i].attributes.posterImage.tiny).attr('value',i).addClass('displayCover')
        // const $boxTitle = $('<div>').text(data.data[i].attributes.canonicalTitle).attr('value',i);
        // const $boxSynop = $('<div>').text(data.data[i].attributes.synopsis).attr('value',i);
        // const $boxDate = $('<div>').text(data.data[i].attributes.startDate).attr('value',i);


        imgArray.push(data.data[i].attributes.posterImage.tiny)
        titleArray.push(data.data[i].attributes.titles.en_jp)
        synopArray.push(data.data[i].attributes.synopsis)
        dateArray.push(data.data[i].attributes.startDate)

        const $modal = $('#Modal');
        const $closeBtn = $('#close');
        const $openBtn = $($imgUrl);


        const openModal = () => {
          $modal.css('display', 'block');
        }
        const closeModal = () => {
          $modal.css('display', 'none');
        }

        $openBtn.on('click', openModal);
        $closeBtn.on('click', closeModal);


        $('.superNRow').append($imgUrl);
        }
        $('.superNRow').on('click', (event) => {
          $('#innerImg').empty()
          $('#textLayout').empty()
          $('#innerImg').append($('<img>').attr('src', imgArray[$(event.target).attr('value')]))
          $('#textLayout').append($('<h1>').text(titleArray[$(event.target).attr('value')]))
          $('#textLayout').append($('<h2>').text(synopArray[$(event.target).attr('value')]))
          $('#textLayout').append($('<p>').text(dateArray[$(event.target).attr('value')]))
      })
    }
  )
})
