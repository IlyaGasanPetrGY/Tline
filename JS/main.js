var element = $(".nav__menu__header--mobile");
var wrapers = $(".short__description__content__wrapeer1")
var wrapers1 = $(".short__description__content__wrapeer2")
var wrapers2 = $(".short__description__content__wrapeer3")
var wrapers3 = $(".short__description__content__wrapeer4")


function ClickHamburger() {
    $(element).fadeToggle("slow", "linear");
}
function ClickText1() {
    wrapers.toggleClass("short__description__content__wrapeer--active");
}

function ClickText2() {
    wrapers1.toggleClass("short__description__content__wrapeer--active");
}
function ClickText3() {
    wrapers2.toggleClass("short__description__content__wrapeer--active");
}
function ClickText4() {
    wrapers3.toggleClass("short__description__content__wrapeer--active");
}
function ClickText5() {
    wrapers4.toggleClass("short__description__content__wrapeer--active");
}