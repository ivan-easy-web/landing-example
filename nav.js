var currentPage = $('#page-1');
var currentNav = $('#nav-1');

$('.elem').click(function() {
    currentPage.fadeOut();
    currentPage = $(`#${$(this).attr('to')}`);
    currentPage.fadeIn();
    currentNav.removeClass('selected');
    currentNav = $(this);
    currentNav.addClass('selected');
})

$('#next-2-button').click(function() {
    $('#nav-2').click();
})

$('#next-3-button').click(function() {
    $('#nav-3').click();
})

$('#next-4-button').click(function() {
    $('#nav-4').click();
})

$('#back-1-button').click(function() {
    $('#nav-1').click();
})

$('#back-2-button').click(function() {
    $('#nav-2').click();
})

$('#back-3-button').click(function() {
    $('#nav-3').click();
})

$('.mobile-nav-elem').click(function() {
    currentPage.hide();
    currentPage = $(`#${$(this).attr('to')}`);
    currentPage.show();
    currentNav.removeClass('selected');
    currentNav = $(this);
    currentNav.addClass('selected');
    $('#mobile-nav').slideUp('fast');
})

$('#mobile-nav-button').click(function() {
    $('#mobile-nav').slideDown('fast');
})

$('#mobile-nav-button-close').click(function()  {
    $('#mobile-nav').slideUp('fast');
})

$('#sss').click(function() {
    $('#nav-4').click();
})

$('#sss1').click(function() {
    $('#nav-3').click();
})



$('select').change(function() {
    countCoast();
})

function countCoast() {
    let cityCoeff = Number.parseFloat($('#city-select').val());
    let autoCoast = Number.parseFloat($('#auto-select').val());
    let days = Number.parseFloat($('#days-select').val());
    
    var daysCoeff;
    switch (days) {
        case 1: {
            daysCoeff = 1;
            break;
        }
        case 2: {
            daysCoeff = 0.96;
            break;
        }
        case 3: {
            daysCoeff = 0.91;
            break;
        }
        case 4: {
            daysCoeff = 0.85;
            break;
        }
        default: {
            $('#coast').text('На 5+ дней обсуждается отдельно.');
            return;
        }
    }


    let coast = autoCoast * days * cityCoeff * daysCoeff;

    $('#coast').text(coast);
}

$('#auto-select').change(function() {
    let autoCoast = Number.parseInt($('#auto-select').val());
    switch (autoCoast) {
        case 2500: {
            $('#page-3').css('background', ' 25% 75% url(/img/polo.jpg)')
            .css('background-size', 'cover');
            break;
        }
        case 3900: {
            $('#page-3').css('background', ' 25% 25% url(/img/cooper.jpg)')
            .css('background-size', 'cover');
            break;
        }
        case 4700: {
            $('#page-3').css('background', ' 25% 25% url(/img/bmw.jpg)')
            .css('background-size', 'cover');
            break;
        }
    }
}) 




var datefield = document.createElement("input")
datefield.setAttribute("type", "date")
if (datefield.type!="date"){ //if browser doesn't support input type="date", load files for jQuery UI Date Picker
    document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n')
    document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"><\/script>\n') 
}        
if (datefield.type != "date"){ //if browser doesn't support input type="date", initialize date picker widget:
    $(document).ready(function() {
        $('#date-select').datepicker();
    }); 
}  