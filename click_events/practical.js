var buttons = document.getElementsByClassName('button');
var array = ['button blue', 'button red', 'button orange', 'button green'];
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        document.getElementsByClassName('button')[0].setAttribute('class', array[0 + 1]);
    });
}