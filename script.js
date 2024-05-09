document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn-contato button").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".formulario").scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnTopo").addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function() {
  // Adicionar um evento de envio ao formulário
  document.getElementById("formWhatsapp").addEventListener("submit", function(event) {
      // Impedir o envio do formulário padrão
      event.preventDefault();

      // Número de telefone para envio da mensagem
      var phoneNumber = "+559281538278";

      // Obter os valores do nome e da mensagem
      var name = document.getElementById("name").value;
      var message = document.getElementById("message").value;

      // Formatar a mensagem para a URL do WhatsApp
      var messageFormatted = encodeURIComponent("Nome: " + name + "\nMensagem: " + message);

      // Abrir a URL do WhatsApp com o número de telefone e a mensagem
      window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + messageFormatted, "_blank");
  });
});




