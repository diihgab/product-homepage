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
