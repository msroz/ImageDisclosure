chrome.browserAction.onClicked.addListener(function(tab){
//console.log('background.js is started');
	chrome.tabs.sendMessage(tab.id, {
		command: 'get_img',
		title: 'hoge',
	},
	function(msg){
		//console.log('result message:', msg);
	});
});
