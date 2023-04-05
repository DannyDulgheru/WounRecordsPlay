chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.match(/music\.amazon\.com/)) {
      chrome.tabs.executeScript(tabId, { file: 'amazon.js' });
    } else if (changeInfo.status === 'complete' && tab.url.match(/web\.napster\.com/)) {
      chrome.tabs.executeScript(tabId, { file: 'napster.js' });
    } else if (changeInfo.status === 'complete' && tab.url.match(/music\.youtube\.com/)) {
      chrome.tabs.executeScript(tabId, { file: 'youtubemusic.js' });
    } else if (changeInfo.status === 'complete' && tab.url.match(/open\.spotify\.com/)) {
      chrome.tabs.executeScript(tabId, { file: 'spotify.js' });
    }
  });
  
  chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: '.' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }]);
    });
  });
  

  chrome.action.onClicked.addListener(function() {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.reload(tab.id);
      });
    });
  });
  