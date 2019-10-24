$( "document" ).ready(function() {
console.log("ready");
    $("#button").click(function(){
        var value = $(".input").val();
          $(".output").append(value);
        console.log(value);
        alert(value);
    });

});
