$(() => {
  $.getJSON('data.json', (data) => {
    let $ul = $('<ul>')
    $.each(data, (key, val) => {
      console.log(val.shortname)
      let $li = $('<li>')
      $('<h2>').text(val.name).appendTo($li)
      $('<img>').attr({
        src: `./images/${val.shortname}_tn.jpg`,
        alt: val.name
      }).appendTo($li)
      $li.appendTo($ul)
    })
    $($ul).appendTo($('#update'))
  })
})
