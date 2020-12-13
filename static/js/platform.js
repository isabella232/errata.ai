$(document).ready(function () {
    const platform = navigator.platform;

    if (platform.startsWith("Win")) {
        $("#platform-btn").html(
            "<span>" +
                '<i class="fab fa-windows" aria-hidden="true"></i>' +
                "</span>" +
                "<p>Get Vale Server for Windows</p>"
        );

        $("#platform-other").html(
            '<span class="text-muted">' +
                'Also available for <a href=""><i class="fab fa-apple" aria-hidden="true"></i> macOS</a> and ' +
                '<a href=""><i class="fab fa-linux" aria-hidden="true"></i> Linux</a>.' +
                "</span>"
        );
    } else if (platform.startsWith("Mac")) {
        $("#platform-btn").html(
            "<span>" +
                '<i class="fab fa-apple" aria-hidden="true"></i>' +
                "</span>" +
                "<p>Get Vale Server for macOS</p>"
        );

        $("#platform-other").html(
            '<span class="text-muted">' +
                'Also available for <a href=""><i class="fab fa-windows" aria-hidden="true"></i> Windows</a> and ' +
                '<a href=""><i class="fab fa-linux" aria-hidden="true"></i> Linux</a>.' +
                "</span>"
        );
    } else {
        $("#platform-btn").html(
            "<span>" +
                '<i class="fab fa-linux" aria-hidden="true"></i>' +
                "</span>" +
                "<p>Get Vale Server for Linux</p>"
        );

        $("#platform-other").html(
            '<span class="text-muted">' +
                'Also available for <a href=""><i class="fab fa-windows" aria-hidden="true"></i> Windows</a> and ' +
                '<a href="" <i class="fab fa-apple" aria-hidden="true"></i>>macOS</a>.' +
                "</span>"
        );
    }
});
