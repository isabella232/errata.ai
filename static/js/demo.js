$('div[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href")
    if (target == "#content-2") {
        $("#fm-section").addClass("text-fade");
        $("#style-section").addClass("text-fade");
        $("#sc-section").addClass("text-fade");

        $("#syntax-section").removeClass("text-fade");
        $("#E001").attr("data-entity", "error");
        $("#E002").attr("data-entity", "error");

        $("#E003").removeAttr("data-entity");
        $("#E004").removeAttr("data-entity");
    } else if (target == "#content-1") {
        $("#syntax-section").addClass("text-fade");
        $("#style-section").addClass("text-fade");
        $("#sc-section").addClass("text-fade");

        $("#E002").removeAttr("data-entity");
        $("#E001").removeAttr("data-entity");

        $("#fm-section").removeClass("text-fade");
    } else if (target == "#content-3") {
        $("#syntax-section").addClass("text-fade");
        $("#style-section").addClass("text-fade");
        $("#fm-section").addClass("text-fade");

        $("#E001").removeAttr("data-entity");
        $("#E002").removeAttr("data-entity");
        $("#E004").removeAttr("data-entity");

        $("#sc-section").removeClass("text-fade");
        $("#E003").attr("data-entity", "spelling");
    } else if (target == "#content-4") {
        // Add text fades ...
        $("#syntax-section").addClass("text-fade");
        $("#fm-section").addClass("text-fade");
        $("#sc-section").addClass("text-fade");

        // Disable inactive entities ...
        $("#E001").removeAttr("data-entity");
        $("#E002").removeAttr("data-entity");
        $("#E003").removeAttr("data-entity");

        // Activate the section ...
        $("#style-section").removeClass("text-fade");
        $("#E004").attr("data-entity", "error");
    }
});
