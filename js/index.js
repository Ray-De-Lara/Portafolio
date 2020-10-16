//View menu
jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');

    menuBtn.click(function() {


        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');
        }
        
    });

});

//typewriter effect for HOLA text

var text = document.getElementById("hola");
var text1 = document.getElementById("saludo");

var str = text.innerHTML;
var str1 = text1.innerHTML;



text.innerHTML = "";
text1.innerHTML = "";


var speed = 200;

var i = 0;
var j = 0;


function typewriter(){
    if(i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typewriter, speed);   
    }
    else{
        function typewriter1(){
            if(j < str1.length){
                
                text1.innerHTML += str1.charAt(j);
                j++;
                setTimeout(typewriter1, speed);
            }
        }
        
        setTimeout(typewriter1,speed);
    }
}

setTimeout(typewriter,speed);


//type writer effect for SALUDO text

