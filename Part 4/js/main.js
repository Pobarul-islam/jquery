 //$(document).ready(function(){


  /* $('button').hover(function(){
    alert('This is Pobarul islam')

    

    },
    
    function(){

        alert('by');

}) 
    
  


 })
 */
$(document).ready(function(){

    $('h1').on({
        mouseenter: function(){
            $(this).css('background-color','red')
        },
        
        click: function(){
            $(this).css('background-color','green')
        },
        mouseleave: function(){
            $(this).css('background-color','yellow')
        }
    });
 
});