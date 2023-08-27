const tweetWithUrl = chrome.i18n.getMessage("tweetWithUrl")
const tweetWithUrlAndText = chrome.i18n.getMessage("tweetWithUrlAndText")

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "quoteTweetWithText",
    "title": tweetWithUrlAndText,
    "contexts": ["selection"]
  });
  chrome.contextMenus.create({
    "id": "quoteTweet",
    "title": tweetWithUrl,
    "contexts": ["page"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "quoteTweetWithText") {
    const tweetText = `> ${info.selectionText}\n${tab.title} ${tab.url}`;
    chrome.tabs.create({
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
    });

  } else if (info.menuItemId === "quoteTweet") {
    const tweetText = `${tab.title} ${tab.url}`;
    chrome.tabs.create({
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
    });
  }
});
