$ ->
  @menu = new Menu
  @menu.initialize()

  @albums = new Albums()
  @albums.initialize()

  @cart = new Cart()
  @cart.initialize()

  @top = new Top()
  @top.initialize()

  $(".photos a").fancybox
    openEffect: 'elastic'
    closeEffect: 'elastic'
    helpers:
      overlay:
        locked: false
      title:
        type: 'inside'
      buttons	: {}
      thumbs:
        width: 80
        height: 50
