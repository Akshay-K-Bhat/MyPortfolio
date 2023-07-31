window.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

  const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function() {
  const pdfURL = "images/AKSHAY_BHAT_RESUME.pdf"; // Replace this with the actual URL of your PDF file
  const pdfFileName = "AKSHAY_BHAT_RESUME.pdf"; // Set the desired file name for the downloaded PDF

  // Create a link element for the download
  const link = document.createElement("a");
  link.href = pdfURL;
  link.download = pdfFileName;

  // Append the link to the DOM (required for some browsers)
  document.body.appendChild(link);

  // Simulate a click on the link to trigger the download
  link.click();

  // Clean up the link element after the download attempt
  document.body.removeChild(link);
});

  






