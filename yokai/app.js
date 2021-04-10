$(() => {
  const array = [];
  $.ajax({
      url:'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[categories]=horror'
  }).then(
    (data)=>{
      for ( i = 0; i < 12; i++) {
        const $imgUrl = $('<img>').attr('src', data.data[i].attributes.posterImage.tiny)
        // const $coverTitle = $('<div>').text(data.data[i].attributes.canonicalTitle);
        array.push(data.data[i].attributes.posterImage.small)
        const $modal = $('#Modal');
        const $closeBtn = $('#close');
        const $openBtn = $($imgUrl)

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
    }
  )
})
