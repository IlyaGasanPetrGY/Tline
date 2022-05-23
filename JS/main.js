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
var dropdownwindow;
var NAME;
var Nomber;
var Email;
var Textarea;
const btn = $(".btn__title");
btn.on("click", e => {
    e.preventDefault();
    if (ValidPhone()) {
        NAME = document.getElementById('name').value;
        Nomber = document.getElementById('input__row').value;
        Email = document.getElementById('email').value;
        Textarea = document.getElementById('message').value;
        dropdownwindow = document.getElementById('dropdown__window').style.display = "flex";
        console.log (NAME+ ' '+ Nomber + ' ' + Email + ' ' + Textarea)
        document.getElementById('name').value = "Отправленно";
        document.getElementById('input__row').value = "Отправленно";
        document.getElementById('email').value = "Отправленно";
        fetch(`https://api.telegram.org/bot5001139628:AAERqrJSwZI4zVjH5O6qBIXVHnyB8ZAnxYo/sendMessage?chat_id=-794730103&text=имя ${NAME} телефон ${Nomber} Email${Email} Message${Textarea}`) 
    }
})
function ValidPhone(f) {
    var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var myPhone = document.getElementById('input__row').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    console.log (valid);
    return valid; 
}
var btnclose = $("#change");

btnclose.on("click", e => {
    e.preventDefault();
    dropdownwindow = document.getElementById('dropdown__window').style.display = "none";

})