chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'downloadImage' && message.url) {
      chrome.downloads.download({
        url: message.url,
        filename: 'downloaded_image.jpg'
      });
    }
  });
  