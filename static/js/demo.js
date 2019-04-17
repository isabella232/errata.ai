$('div[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr('href')
  if (target == '#content-1') {
    $('#sec-1').addClass('text-fade')
    $('#sec-3').addClass('text-fade')
    $('#sec-5').addClass('text-fade')

    $('#E003').addClass('text-fade')
    $('#E004').addClass('text-fade')
    $('#E005').addClass('text-fade')

    // Remove errors:
    $('#E001').removeAttr('data-entity')
    $('#E002').removeAttr('data-entity')
    $('#E003').removeAttr('data-entity')
    $('#E004').removeAttr('data-entity')
    $('#E005').removeAttr('data-entity')
    $('#E006').removeAttr('data-entity')
    $('#E007').removeAttr('data-entity')
    $('#E008').removeAttr('data-entity')
    $('#E009').removeAttr('data-entity')
  } else if (target == '#content-2') {
    // Undo Step 1:
    $('#sec-1').removeClass('text-fade')
    $('#sec-3').removeClass('text-fade')
    $('#sec-5').removeClass('text-fade')

    $('#E003').removeClass('text-fade')
    $('#E004').removeClass('text-fade')
    $('#E005').removeClass('text-fade')

    // Remove errors:
    $('#E001').removeAttr('data-entity')
    $('#E003').removeAttr('data-entity')
    $('#E004').removeAttr('data-entity')
    $('#E005').removeAttr('data-entity')
    $('#E006').removeAttr('data-entity')
    $('#E008').removeAttr('data-entity')
    $('#E009').removeAttr('data-entity')

    // Show errors:
    $('#E002').attr('data-entity', 'error')
    $('#E007').attr('data-entity', 'error')
  } else if (target == '#content-3') {
    // Undo Step 1:
    $('#sec-1').removeClass('text-fade')
    $('#sec-3').removeClass('text-fade')
    $('#sec-5').removeClass('text-fade')

    $('#E003').removeClass('text-fade')
    $('#E004').removeClass('text-fade')
    $('#E005').removeClass('text-fade')

    // Remove errors:
    $('#E002').removeAttr('data-entity')
    $('#E003').removeAttr('data-entity')
    $('#E004').removeAttr('data-entity')
    $('#E005').removeAttr('data-entity')
    $('#E006').removeAttr('data-entity')
    $('#E007').removeAttr('data-entity')
    $('#E008').removeAttr('data-entity')

    // Show errors:
    $('#E001').attr('data-entity', 'error')
    $('#E009').attr('data-entity', 'error')
  } else if (target == '#content-4') {
    // Undo Step 1:
    $('#sec-1').removeClass('text-fade')
    $('#sec-3').removeClass('text-fade')
    $('#sec-5').removeClass('text-fade')

    $('#E003').removeClass('text-fade')
    $('#E004').removeClass('text-fade')
    $('#E005').removeClass('text-fade')

    // Remove errors:
    $('#E001').removeAttr('data-entity')
    $('#E002').removeAttr('data-entity')
    $('#E003').removeAttr('data-entity')
    $('#E004').removeAttr('data-entity')
    $('#E005').removeAttr('data-entity')
    $('#E006').removeAttr('data-entity')
    $('#E007').removeAttr('data-entity')
    $('#E008').removeAttr('data-entity')
    $('#E009').removeAttr('data-entity')
  }
})
