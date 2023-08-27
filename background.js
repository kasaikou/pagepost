chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "quoteTweet",
    "title": "この文章を引用してツイート",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "quoteTweet") {
    const tweetText = info.selectionText == undefined ? `${tab.title} ${url}` : `> ${info.selectionText}\n${tab.title} ${url}`;
    chrome.tabs.create({
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
    });
  }
});
