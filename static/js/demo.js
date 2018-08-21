$('div[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href")
    if (target == "#content-1") {
        $("#sec-2").addClass("text-fade");
        $("#sec-3").addClass("text-fade");
        $("#sec-4").addClass("text-fade");

        $("#E002").removeAttr("data-entity");
        $("#E001").removeAttr("data-entity");
        $("#E004").removeAttr("data-entity");
        $("#E003").removeAttr("data-entity");

        $("#sec-1").removeClass("text-fade");
    } else if (target == "#content-2") {
        $("#sec-1").addClass("text-fade");
        $("#sec-3").addClass("text-fade");
        $("#sec-4").addClass("text-fade");

        $("#sec-2").removeClass("text-fade");
        $("#E001").attr("data-entity", "error");
        $("#E002").attr("data-entity", "error");

        $("#E003").removeAttr("data-entity");
        $("#E004").removeAttr("data-entity");
    } else if (target == "#content-3") {
        $("#sec-2").addClass("text-fade");
        $("#sec-1").addClass("text-fade");
        $("#sec-4").addClass("text-fade");

        $("#E001").removeAttr("data-entity");
        $("#E002").removeAttr("data-entity");
        $("#E004").removeAttr("data-entity");

        $("#sec-3").removeClass("text-fade");
        $("#E003").attr("data-entity", "spelling");
    } else if (target == "#content-4") {
        // Add text fades ...
        $("#sec-2").addClass("text-fade");
        $("#sec-3").addClass("text-fade");
        $("#sec-1").addClass("text-fade");

        // Disable inactive entities ...
        $("#E001").removeAttr("data-entity");
        $("#E002").removeAttr("data-entity");
        $("#E003").removeAttr("data-entity");

        // Activate the section ...
        $("#sec-4").removeClass("text-fade");
        $("#E004").attr("data-entity", "error");
    }
});
