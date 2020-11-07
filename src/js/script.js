$(function(){

    //scroll

    $(".link-scroll").on("click", function(e){
        e.preventDefault()
        var id = $(this).attr("href") 
        var dist = $(id).offset().top 
        $("body, html").animate({scrollTop: dist - 100}, 900)
    })

 
    //ajax
    
    $('#grafite').on("click", function(e){
        e.preventDefault()
        $.get("grafites.html", function(data){
            $('#content').html(data)
        })    
    })

    $('#quadro').on("click", function(e){
        e.preventDefault()
        $.get("quadros.html", function(data){
            $('#content').html(data)
        })
    })
    $('#desenho').on("click", function(e){
        e.preventDefault()
        $.get("desenhos.html", function(data){
            $('#content').html(data)
        })

    })
    
    $(document).ready(function(){
        $.get("grafites.html", function(data){
            $('#content').html(data)
        })    
    })

})
