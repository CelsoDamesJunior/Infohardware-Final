$(function(){
    $(".mudarlayout").on("click",function(){
        var verifica = $("#mudaestilo").attr("href");
        var trocacss = "./css/estilo-novo.css";
        if(verifica == trocacss){
            verifica = "./css/estilo.css";
            $("#mudaestilo").attr("href",verifica);
        }
        else
            $("#mudaestilo").attr("href",trocacss);
        return false;
    })})
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }