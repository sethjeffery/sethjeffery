class @Top
  initialize: ->
    setTimeout ->
      $('#top .phone').prop href: ['te', 'l:', '+', '44', '78', '10', '28', '21', '04'].join('')
      $('#top .email').prop href: ['ma', 'il', 'to', ':', 'seth', '@', 'seth', 'jeffery', '.', 'com'].join('')
    , 500

    setTimeout (-> $('#top .email').addClass('in')), 500
    setTimeout (-> $('#top .phone').addClass('in')), 600
    setTimeout (-> $('#top .linkedin').addClass('in')), 700
    setTimeout (-> $('#top .github').addClass('in')), 800
