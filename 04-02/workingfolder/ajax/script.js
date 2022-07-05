$(() => {
  $('#search').on({
    input: getResults
  })

  function getResults(params) {
    const searchString = $(this).val()
    console.log()
    const regex = new RegExp(searchString, 'i')

    $.getJSON('data.json', (data) => {
      // create UL element
      let $ul = $('<ul>')
      // loop over data items
      $.each(data, (index, value) => {
        // clear any items that exist after each search
        $('#update').empty()

        // set conditions to accept item
        if (searchString.length > 0 && value.name.search(regex) !== -1 || value.bio.search(regex) !== -1) {

          // create list item and children
          let $li = $('<li>')
          $('<h2>').text(value.name).appendTo($li)
          $('<img>').attr({
            src: `./images/${value.shortname}_tn.jpg`,
            alt: value.name
          }).appendTo($li)
          $('<p>').text(value.bio).appendTo($li)

          // append LI to UL
          $li.appendTo($ul)
        }
      })
      // mount UL to div
      $($ul).appendTo($('#update'))
    })
  }
})
