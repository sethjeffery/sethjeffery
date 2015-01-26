class @Menu
  initialize: ->
    @checkAffix()
    $(window).on 'scroll', @checkAffix

    $('a[href^="#"]').on 'click', @clickMenu

  checkAffix: ->
    top = $(window).scrollTop()
    $('aside').toggleClass 'affix', top > 140

    $currentItem = undefined
    $('aside a').each ->
      itemTop = $($(@).attr('href')).offset()?.top
      $currentItem = $(@) if itemTop < top + 50

    $('aside a').not($currentItem).removeClass('active')
    $currentItem?.addClass('active')

  clickMenu: (e) ->
    e?.preventDefault()
    $a = $(e.currentTarget)
    $target = $($a.attr('href'))
    $('html, body').animate scrollTop: $target.offset().top - 10
