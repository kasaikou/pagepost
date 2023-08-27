chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "quoteTweet",
    "title": "この文章を引用してツイート",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "quoteTweet") {
    const selectedText = info.selectionText;
    chrome.tabs.create({
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${selectedText}"`)}`
    });
  }
});
