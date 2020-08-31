$(document).on("click","#previsao",function(){
  $.ajax({
    type: "get", // Como vou enviar
    //url: "https://viacep.com.br/ws/"+$("#cep").val()+"/json/",
    url: "https://api.hgbrasil.com/weather?key=9a5da2c2",
    success: function(data){ // Executar se der certo
      var previsao = ({
             "country": data.date
         })
      $("#dados").html(previsao);
    },
    error: function(){
      alert("Deu ruim");
    }
  })
})