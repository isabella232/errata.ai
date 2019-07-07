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
          '<div id="-1" class="list-group-item flex-column align-items-start list-group-item-success">' +
              '<div class="d-flex w-100 justify-content-between">' +
                  '<h5 class="mb-1">Looks good!</h5>' +
              '</div>' +
              '<p class="mb-1">No alerts found.</p>' +
          '</div>')
      } else {
        for (var i = 0; i < data.length; i++) {
          var alert = data[i]

          var rule = null
          var link = null

          var classes = 'list-group-item flex-column align-items-start'
          if (alert.Severity === 'error') {
            classes += ' list-group-item-danger'
          } else if (alert.Severity === 'warning') {
            classes += ' list-group-item-warning'
          } else {
            classes += ' list-group-item-info'
          }

          var parts = alert.Check.split('.')
          if (parts[0] === 'Microsoft') {
            link = alert.Link
            rule = 'https://github.com/errata-ai/Microsoft/blob/master/Microsoft/' + parts[1] + '.yml'
          } else if (parts[0] === 'proselint') {
            link = 'https://github.com/amperser/proselint/blob/master/README.md'
            rule = 'https://github.com/errata-ai/proselint/blob/master/proselint/' + parts[1] + '.yml'
          } else {
            link = 'https://github.com/rowanmanning/joblint/blob/master/README.md'
            rule = 'https://github.com/errata-ai/Joblint/blob/master/Joblint/' + parts[1] + '.yml'
          }

          var msg = alert.Message
          if (alert.Description != '') {
            msg = alert.Description
          }

          list.append(
            '<div class="' + classes + '">' +
                '<div class="d-flex w-100 justify-content-between">' +
                      '<h5 class="mb-1">' + alert.Check + ' [' + alert.Severity + ']</h5>' +
                '</div>' +
                '<p class="mb-1">' + msg + '</p>' +
                '<small>' +
                  '<a id="' + i + '" class="rule" href="#">Highlight text</a> | ' +
                  '<a href="' + link + '" target="_blank">Read more</a> | ' +
                  '<a href="' + rule + '" target="_blank">View rule</a>' +
                '</small>' +
            '</div>')

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

  // If this isn't set, Ace looks for its files in the root directory.
  ace.config.set('basePath', '/js/ace')

  var htmEditor = ace.edit('htmEditor')
  var info = 'Click on an alert (the right-side panel) to highlight the relevant text in the editor (the left-side panel).'
  var markdown = '# An example document \n\n\
Vale Server works by enforcing externally-created *styles* such as the \
Microsoft Writing Style Guide. \n\n\
Styles consist of YAML files, or "rules", that enforce a certain writing \
construct.\n\n\
## Another Section \n\n\
proselint is a linter for English prose that "places the world’s greatest \
writers and editors by your side." Here\'s a sample of what it checks for: \n\n\
- "That\'s an extremely complete solution." \n\n\
- "That has become increasingly less valuable." \n\n\
Joblint tests job posts for issues with sexism, culture, expectations, and \
recruiter fails such as: \n\n\
- "You should be comfortable with tight deadlines."\n\n\
- "He should have a background in mathematics."\
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

  $('#alerts').on('click', '.rule', function (e) {
    e.preventDefault()
    var alert = alerts[this.id]
    if (alert) {
      htmEditor.findAll(alert.Match, {
        caseSensitive: true,
        wholeWord: true,
        regExp: false
      })
    }
  })

  $('#styles').change(function () {
    var index = $('#styles').val()
    if (index == 0) {
      $('#style-info').html("<p>The 'Microsoft' style implements the guidelines outlined in the <a href=\"https://docs.microsoft.com/en-us/style-guide/welcome/\">Microsoft Writing Style Guide</a>.</p>")
    } else if (index == 1) {
      $('#style-info').html("<p>The 'proselint' style implements suggestions from Python's <a href=\"http://proselint.com/\"><code>proselint</code></a> linter.</p>")
    } else if (index == 2) {
      $('#style-info').html("<p>The 'Joblint' style implements suggestions from JavaScript's <a href=\"https://github.com/rowanmanning/joblint/blob/master/README.md\">Joblint</a> linter.</p>")
    } else {
      $('#style-info').text(info)
    }
  })
})
