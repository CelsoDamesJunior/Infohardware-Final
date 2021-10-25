$(function (){
    $(".mudarlayout").on("click",function(){
        var verifica = $("#mudaestilo").attr("href");
        var trocacss = "./css/estilo.css";
        if(verifica == trocacss){
            verifica = "./css/estilo-novo.css";
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
    function verificaCookie(){
        var trocaestilo = confirm("O site passou por uma atualização de layout, Deseja utiliza-la ?");
        if(trocaestilo == true){
          var trocacss = "./css/estilo-novo.css";
              $("#mudaestilo").attr("href",trocacss);
              teste = Cookies.set("alertaoff","true");
              console.log(teste);
          }
          alert("Esse Site utiliza Cookies,para manter o estilo perguntado,uma vez confirmado os alertas não apareceram mais");
          alert("Por razões tecnicas os sites ligados a esse já estarão com o novo layout podendo ser alterado,por esse botão 'Alterar Layout' ");
      }

      window.onload = function(){
        var myCookie = Cookies.get("alertaoff");
        console.log(myCookie);
        if(myCookie){
          var aux = "./css/estilo-novo.css"
          $("#mudaestilo").attr("href",aux);
        }
        else{
          setTimeout(verificaCookie(),5000);
        }
      }
