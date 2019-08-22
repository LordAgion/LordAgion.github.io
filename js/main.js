$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
//button 1
$(document).ready(function(){
    $("#button1").click(function(){
        $("#text1").toggle();
    });
});

document.addEventListener('submit', buttonPush)
