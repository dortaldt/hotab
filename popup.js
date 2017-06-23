// this is the background code...

// listen for our browerAction to be clicked
chrome.tabs.onActivated.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'timer.js',
	});
});
