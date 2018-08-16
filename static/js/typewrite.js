var app = document.getElementById('heading');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('static site generators.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('continuous integration.')
    .pauseFor(2500)
    .deleteChars(12)
    .typeString('delivery.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('automated testing.')
    .pauseFor(2500)
    .start();
