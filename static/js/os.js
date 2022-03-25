function switch_os(os) {
    if (os === "windows") {
        $(".windows").removeClass("d-none").addClass("d-block")
        $(".macos").removeClass("d-block").addClass("d-none")
        $(".linux").removeClass("d-block").addClass("d-none")
    } else if (os === "macos") {
        $(".windows").removeClass("d-block").addClass("d-none")
        $(".macos").removeClass("d-none").addClass("d-block")
        $(".linux").removeClass("d-block").addClass("d-none")
    } else if (os === "linux") {
        $(".windows").removeClass("d-block").addClass("d-none")
        $(".macos").removeClass("d-block").addClass("d-none")
        $(".linux").removeClass("d-none").addClass("d-block")
    }
}


$(document).ready(function () {
    const platform = navigator.platform

    if (platform.startsWith('Win')) {
        switch_os("windows")
        $("#windows").button('toggle')
    } else if (platform.startsWith('Mac')) {
        switch_os("macos")
        $("#macos").button('toggle')
    } else {
        switch_os("linux")
        $("#linux").button('toggle')
    }

    $("#platforms :input").change(function () {
        const selection = this.id
        if (selection === "option1") {
            switch_os("windows")
        } else if (selection === "option2") {
            switch_os("macos")
        } else if (selection === "option3") {
            switch_os("linux")
        }
    })
})
