// Function to create download icon and handle download
function createDownloadIcon(img) {
    // Create a download icon
    const downloadIcon = document.createElement('div');
    downloadIcon.classList.add('download-icon');
    downloadIcon.innerHTML = '⬇️';
  
    // Handle click event to download image
    downloadIcon.addEventListener('click', function() {
      chrome.runtime.sendMessage({ action: 'downloadImage', url: img.src });
    });
  
    // Append the download icon to the image's parent
    img.parentNode.appendChild(downloadIcon);
  
    // Set a timeout to remove the icon after 3 seconds
    let timeoutId;
    img.addEventListener('mouseleave', function() {
      timeoutId = setTimeout(function() {
        downloadIcon.remove();
      }, 3000); // Adjust the delay (in milliseconds) as needed
    });
  
    // Clear the timeout if mouse re-enters the image area
    img.addEventListener('mouseenter', function() {
      clearTimeout(timeoutId);
    });
  }
  
  // Listen for mouseover events on the document
  document.addEventListener('mouseover', function(event) {
    // Check if the element being hovered over is an image
    if (event.target.tagName === 'IMG') {
      const img = event.target;
      createDownloadIcon(img);
    }
  });
  