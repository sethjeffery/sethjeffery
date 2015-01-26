class @Cart
  initialize: ->
    $.easing.bounceUpDown = ( p, n, firstNum, diff ) ->
      Math.sin(p*Math.PI) * diff + firstNum

    $('.album a.btn.cd').click @buyCd
    $('#cart').on 'click', 'a.delete', @deleteCd

  buyCd: (e) =>
    e?.preventDefault()
    $el = $(e.currentTarget)
    $album = $el.parents('.album')
    albumArt = $album.find('.album-art img').attr('src')
    $item = $("#cart [data-id='#{$album.data("id")}']")

    if $item.length > 0
      $item.find('.count').text parseInt($item.find('.count').text()) + 1
      $item.find('img').animate(top: -12, 300, 'bounceUpDown').animate(top: 0, 0).animate(top: -5, 200, 'bounceUpDown').animate(top: 0, 0)

    else
      $item = $("<li data-id=\"#{$album.data("id")}\">
                        <span class=\"count\">1</span>
                        <img src=\"#{albumArt}\">
                        <a class=\"delete\">
                          <i class=\"sprites-x\"></i>
                        </a>
                      </li>").appendTo($('#cart ul'))

      $item.hide().slideDown 100, -> $item.addClass('in')

    $('#cart').addClass('in')
    @updateForm()

  deleteCd: (e) =>
    e?.preventDefault()
    $el = $(e.currentTarget)
    $item = $el.parents('li')
    $item.removeClass('in')
    setTimeout( =>
      $item.slideUp 100, =>
        $item.remove()
        $('#cart').removeClass('in') if $('#cart ul li').length == 0
        @updateForm()
    , 200)

  updateForm: =>
    e?.preventDefault()

    $('#cart form input[type=hidden]').remove()

    options =
      cmd: '_cart'
      business: 'UUBR4MHT7376W'
      currency_code: 'GBP'
      no_shipping: 2
      lc: 'GB'
      no_note: 0
      upload: 1

    totalCount = 0
    $('#cart ul li').each (index) ->
      $el = $(@)
      name = $el.data('id')
      quantity = parseInt($el.find('.count').text())
      if totalCount == 0
        discount = 5 * (quantity - 1)
      else
        discount = 5 * quantity
      totalCount += quantity
      options["amount_#{index+1}"] = '10.00'
      options["quantity_#{index+1}"] = quantity
      options["discount_amount_#{index+1}"] = "#{discount}.00"
      options["item_name_#{index+1}"] = name

    for own key, value of options
      $('#cart form').append("<input type='hidden' name='#{key}' value='#{value}'/>")

###
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
  <input type="hidden" name="cmd" value="_cart">
  <input type="hidden" name="business" value="UUBR4MHT7376W">
  <input type="hidden" name="lc" value="GB">
  <input type="hidden" name="item_name" value="Fire / Water CD">
  <input type="hidden" name="amount" value="10.00">
  <input type="hidden" name="currency_code" value="GBP">
  <input type="hidden" name="button_subtype" value="products">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="cn" value="Add special instructions to the seller:">
  <input type="hidden" name="no_shipping" value="2">
  <input type="hidden" name="add" value="1">
  <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHosted">
  <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online.">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
  </form>

  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="UUBR4MHT7376W">
  <input type="hidden" name="lc" value="GB">
  <input type="hidden" name="item_name" value="Fire / Water CD">
  <input type="hidden" name="amount" value="10.00">
  <input type="hidden" name="currency_code" value="GBP">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="cn" value="Add special instructions to the seller:">
  <input type="hidden" name="no_shipping" value="2">
  <input type="hidden" name="undefined_quantity" value="1">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted">
  <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online.">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
  </form>

###