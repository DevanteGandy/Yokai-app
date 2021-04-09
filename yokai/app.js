$(() => {
  $.ajax({
      url:'https://kitsu.io/api/edge/anime?filter[categories]=horror'
  }).then(
      (data)=>{
        const $imgUrl = $('<img>').attr('src', data.data[0].attributes.posterImage.tiny).addClass('innerImg');
        $('.displayCovers').append($imgUrl)
        $('#animeTitle').html(data.data[0].attributes.canonicalTitle);
      })












})
