chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "quoteTweetWithText",
    "title": tweetTextWithUrlAndText,
    "contexts": ["selection"]
  });
  chrome.contextMenus.create({
    "id": "quoteTweet",
    "title": tweetTextWithUrl,
    "contexts": ["page"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "quoteTweetWithText" || info.menuItemId === "quoteTweet") {
    const tweetText = info.selectionText == undefined ? `${tab.title} ${url}` : `> ${info.selectionText}\n${tab.title} ${tab.url}`;
    chrome.tabs.create({
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
    });
  }
});
