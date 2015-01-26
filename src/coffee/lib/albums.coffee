class @Albums
  initialize: ->
    @checkBoxReflect()

    $(window).scroll @animateTables
    @animateTables()

  checkBoxReflect: ->
    unless Modernizr.testProp('webkitBoxReflect')
      $('.album-art').each ->
        $el = $(@)
        $shim = $('<div class="reflect-shim"></div>').appendTo($el)
        $shim.append $el.find('img').clone().addClass('reflection')

  animateTables: =>
    $('.table:not("in")').each ->
      $window = $(window)
      offset = $(@).offset()
      if offset.top > $window.scrollTop() and offset.top < $window.scrollTop() + $window.height() - 120
        $(@).addClass('in')
