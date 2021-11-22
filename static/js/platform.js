const URL = 'https://github.com/errata-ai/errata.ai/releases/download/v1.0.0'

const win = URL + '/Vale-Server-1.13.0-windows.exe'
const mac = URL + '/Vale-Server-1.13.0-macos.dmg'
const linux = URL + '/Vale-Server-1.13.0-linux.AppImage'

$(document).ready(function () {
  const platform = navigator.platform

  if (platform.startsWith('Win')) {
    $('#platform-btn').html(
      '<span>' +
      '<i class="fab fa-windows" aria-hidden="true"></i>' +
      '</span>' +
      '<p>Get Vale Server for Windows</p>'
    )
    $('#platform-btn').attr('href', win)

    $('#platform-other').html(
      '<span class="text-muted">' +
      'Also available for <a href="' + mac + '"><i class="fab fa-apple" aria-hidden="true"></i> macOS</a> and ' +
      '<a href="' + linux + '"><i class="fab fa-linux" aria-hidden="true"></i> Linux</a>.' +
      '</span>'
    )
  } else if (platform.startsWith('Mac')) {
    $('#platform-btn').html(
      '<span>' +
      '<i class="fab fa-apple" aria-hidden="true"></i>' +
      '</span>' +
      '<p>Get Vale Server for macOS</p>'
    )
    $('#platform-btn').attr('href', mac)

    $('#platform-other').html(
      '<span class="text-muted">' +
      'Also available for <a href="' + win + '"><i class="fab fa-windows" aria-hidden="true"></i> Windows</a> and ' +
      '<a href="' + linux + '"><i class="fab fa-linux" aria-hidden="true"></i> Linux</a>.' +
      '</span>'
    )
  } else {
    $('#platform-btn').html(
      '<span>' +
      '<i class="fab fa-linux" aria-hidden="true"></i>' +
      '</span>' +
      '<p>Get Vale Server for Linux</p>'
    )
    $('#platform-btn').attr('href', linux)

    $('#platform-other').html(
      '<span class="text-muted">' +
      'Also available for <a href="' + win + '"><i class="fab fa-windows" aria-hidden="true"></i> Windows</a> and ' +
      '<a href="' + mac + '" <i class="fab fa-apple" aria-hidden="true"></i> macOS</a>.' +
      '</span>'
    )
  }
})
