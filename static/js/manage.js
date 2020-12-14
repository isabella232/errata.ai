const API = "https://vale-studio.herokuapp.com/api/user/";
var KEY = null;

$(document).ready(function () {
    function handleError(e) {
        $("#activations, #back-to-key").fadeOut();
        $("#license-section, #forgot-key").fadeIn(300);
        alert("No activations were found for this license key.");

        KEY = null;
        console.log(e);
    }

    $("#license-section").submit(function (e) {
        e.preventDefault();
        $("#license-section, #forgot-key").fadeOut(300);

        KEY = $("#license-input").val().trim();
        $("#key-caption").html("license: <code>" + KEY + "</code>");

        $.ajax(API + "activations?key=" + KEY)
            .done(function (ret) {
                result = JSON.parse(ret);
                if (result === null || result.length === 0) {
                    handleError("no activations found");
                } else {
                    $("#act-list tbody").empty();
                    $("#activations, #back-to-key").delay(300).fadeIn();
                    $(".activations-list").html("");

                    for (var i = 0; i < result.length; i++) {
                        var curr = result[i];
                        var date = new Date(curr.Date);
                        var name = curr.Name.toLowerCase();

                        var icon = "fa-linux";
                        if (name.includes("win")) {
                            icon = "fa-windows";
                        } else if (name.includes("mac")) {
                            icon = "fa-apple";
                        }

                        var activationHTML =
                            '<tr class="text-small">' +
                            '<th scope="row">' +
                            '<span" class="d-flex align-items-center">' +
                            '<div class="thumbnail thumbnail-sm">' +
                            '<i class="fab ' +
                            icon +
                            ' desktop-icon"></i>' +
                            "</div>" +
                            '<span class="text-body">' +
                            curr.Name +
                            "</span>" +
                            "</span>" +
                            "</th>" +
                            "<td>" +
                            date +
                            "</td>" +
                            "<td>Individual</td>" +
                            "<td>" +
                            '<button type="button" class="btn btn-sm btn-danger button-deactivate" data-stamp="' +
                            curr.Date +
                            '">Deactivate</button>' +
                            "</td>" +
                            "</tr>";

                        $("#act-list tbody").append(activationHTML);
                    }
                }
            })
            .fail(handleError);
    });

    $(".back").click(function () {
        $("#activations, #back-to-key").fadeOut(300);
        $("#license-section, #forgot-key").delay(300).fadeIn();
        $("#license-input").focus();
    });

    $("body").on("click", ".button-deactivate", function (e) {
        const stamp = $(this).data("stamp");
        const entry = $(this).closest("tr");
        $.ajax({
            url: API + "deactivate",
            type: "POST",
            data: { license: KEY, date: stamp },
        })
            .done(function (result) {
                entry.remove();
            })
            .fail(function (e) {
                console.log(e);
                alert(
                    "Connection error. Sorry for the inconvenience, please try again later."
                );
            });
    });
});
