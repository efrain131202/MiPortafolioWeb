document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadCVBtn");
  
    downloadBtn.addEventListener("click", function (event) {
      const downloadLink = "/EfrainCruzLobato_CV.pdf";
      window.location.href = downloadLink;
  
      event.preventDefault();
    });
  });