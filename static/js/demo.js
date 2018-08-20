$('div[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href")
    if (target == "#content-2") {
        $("#fm-section").addClass("text-fade");
        $("#style-section").addClass("text-fade");
        $("#sc-section").addClass("text-fade");

        $("#syntax-section").removeClass("text-fade");
        $("#text-link").attr("data-entity", "link");
        $("#text-code").attr("data-entity", "code");
        $("#text-heading").attr("data-entity", "heading");

        $("#text-term").removeAttr("data-entity");
        $("#text-branding").removeAttr("data-entity");
    } else if (target == "#content-1") {
        $("#syntax-section").addClass("text-fade");
        $("#style-section").addClass("text-fade");
        $("#sc-section").addClass("text-fade");

        $("#text-link").removeAttr("data-entity");
        $("#text-code").removeAttr("data-entity");
        $("#text-heading").removeAttr("data-entity");
        $("#text-term").removeAttr("data-entity");
        $("#text-branding").removeAttr("data-entity");

        $("#fm-section").removeClass("text-fade");
    } else if (target == "#content-3") {
        $("#syntax-section").addClass("text-fade");
        $("#style-section").addClass("text-fade");
        $("#fm-section").addClass("text-fade");

        $("#text-link").removeAttr("data-entity");
        $("#text-code").removeAttr("data-entity");
        $("#text-heading").removeAttr("data-entity");
        $("#text-term").removeAttr("data-entity");
        $("#text-branding").removeAttr("data-entity");

        $("#sc-section").removeClass("text-fade");
    } else if (target == "#content-4") {
        $("#syntax-section").addClass("text-fade");
        $("#fm-section").addClass("text-fade");
        $("#sc-section").addClass("text-fade");

        $("#text-link").removeAttr("data-entity", "link");
        $("#text-code").removeAttr("data-entity", "code");
        $("#text-heading").removeAttr("data-entity", "heading");

        $("#style-section").removeClass("text-fade");

        $("#text-term").attr("data-entity", "term");
        $("#text-branding").attr("data-entity", "branding");
    }
});
