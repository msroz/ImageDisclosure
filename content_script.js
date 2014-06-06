// get command from browser action via click
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
	if (msg.command && (msg.command === 'get_img')){
		$('img').each(function(){
			var src = this.src;
			$(this).after("<p style='display:blick;'><a href="+src+">"+src+"</a></p>");
		});
	}
	sendResponse('sent');
});



