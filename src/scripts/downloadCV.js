document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadCVBtn");
  
    downloadBtn.addEventListener("click", function (event) {
      const downloadLink = "/Curriculum_Vitae_EfrainCruzLobato.pdf";
      window.location.href = downloadLink;
  
      event.preventDefault();
    });
  });
  