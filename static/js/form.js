$.validator.setDefaults({
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback')
    element.closest('.col-sm-10').append(error)
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid')
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid')
  }
})

var validator = $('#trial').validate({
  onkeyup: false,
  onclick: false,
  onfocusout: false,
  rules: {
    email: {
      required: true,
      email: true,
      remote: {
        url: 'https://vale-server-trial.herokuapp.com/add',
        type: 'post'
      }
    }
  },
  submitHandler: function(form) {
    if ($('#mac').is(':checked')) {
      window.location.href = 'https://github.com/errata-ai/errata.ai/releases/download/v1.0.0/vs-setup-x64-mac.dmg'
    } else {
      window.location.href = 'https://github.com/errata-ai/errata.ai/releases/download/v1.0.0/vs-setup-x64-windows.exe'
    }
    $('#download-submit').prop('disabled', true)
  }
})
