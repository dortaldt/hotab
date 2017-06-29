// this is the background code...
var tabsList =[];
// listen for our browerAction to be clicked
chrome.tabs.onActivated.addListener( function(tab) {
  var currentTab = tab.tabId
  tabsList.unshift(currentTab);
  // alert(tabsList[0]+' '+tabsList[1])

	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tabsList[1],
    {
      file:'script.js'
    }
  );
    // {code:'function(){console.log("test")}'}
});
