function query (text, server, index) {
  var alerts = []

  $.ajax({
    type: 'POST',
    url: server,
    datatype: 'json',
    data: {
      text: text,
      format: '.md',
      index: index
    },
    success: function (data, status, xhr) {
      var list = $('#alerts')

      list.empty()
      if (data === null) {
        list.append(
          '<a id="-1" href="#" class="list-group-item list-group-item-action flex-column align-items-start list-group-item-success">' +
              '<div class="d-flex w-100 justify-content-between">' +
                  '<h5 class="mb-1">Looks good!</h5>' +
              '</div>' +
              '<p class="mb-1">No alerts found.</p>' +
          '</a>')
      } else {
        for (var i = 0; i < data.length; i++) {
          var alert = data[i]

          var classes = 'list-group-item list-group-item-action flex-column align-items-start'
          if (alert.Severity === 'error') {
            classes += ' list-group-item-danger'
          } else if (alert.Severity === 'warning') {
            classes += ' list-group-item-warning'
          } else {
            classes += ' list-group-item-info'
          }

          list.append(
            '<a id="' + i + '" href="#" class="' + classes + '">' +
                '<div class="d-flex w-100 justify-content-between">' +
                      '<h5 class="mb-1">' + alert.Check + ' [' + alert.Severity + ']</h5>' +
                '</div>' +
                '<p class="mb-1">' + alert.Message + '</p>' +
            '</a>')

          alerts.push(alert)
        }
      }

      console.log(data, status)
    },
    error: function (error) {
      console.log('Unable to connect to server (' + server + ').')
    }
  })

  return alerts
}

$(document).ready(function () {
  // The URL to our Vale demo
  //
  // NOTE: This API is rate-limited and NOT meant for public consumption.
  var server = 'https://valedemo-e6d6y86c4.now.sh'
  // A list of all active alerts.
  //
  // We use this to highlight text in the editor.
  var alerts = [
    {Match: 'externally-'},
    {Match: '"rules",'},
    {Match: 'Another Section'}
  ]
  var htmEditor = ace.edit('htmEditor')
  var markdown = '# An example document \n\n\
Vale Server works by enforcing externally-created \
*styles* such as the Microsoft Writing Style Guide. \n\n\
Styles consist of YAML files, or "rules", that \
enforce a certain writing construct.\n\n\
## Another Section \n\n\
```python\n\
# Vale Server knows how to skip code, URLs, and other\n\
# non-prose content while checking your documents.\n\
print("Hello, world!")\n\
```\
'

  htmEditor.getSession().setMode('ace/mode/markdown')
  htmEditor.setOptions({
    wrap: true,
    indentedSoftWrap: false,
    showLineNumbers: false,
    behavioursEnabled: false
  })

  htmEditor.setHighlightActiveLine(false)

  htmEditor.setValue(markdown)
  htmEditor.clearSelection()

  $('#lint').click(function () {
    var index = $('#styles').val()
    if (index >= 0) {
      console.log('Linting...')
      alerts = query(htmEditor.getValue(), server, index)
    }
  })

  $('#alerts').on('click', '.list-group-item', function (e) {
    e.preventDefault()
    var alert = alerts[this.id]
    if (alert) {
      htmEditor.findAll(alert.Match, {
        caseSensitive: true,
        regExp: false
      })
    }
  })
})
