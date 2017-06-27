$ ->
  # Very basic web crawler protection
  email = ['s', 'e', 't', 'h', '@', 's', 'e', 't', 'h', 'j', 'e', 'f', 'f', 'e', 'r', 'y', '.', 'c', 'o', 'm']
  setTimeout (-> $('#em').attr('href', 'mailto:' + email.join(''))), 500
