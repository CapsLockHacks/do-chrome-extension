function insertBadge(){
	console.log("Insert Badge!");
	$("#readme").prepend("<div class='depoly-form'><a href=\"#\">deploy to heroku</a></div>");
}


chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		var links = [];
		$('a').each(function() {
		   var href = this.href;
		   // now process with the href as you wish      

		   if(href.indexOf("Dockerfile")!=-1){

		   	links.push(href);

		 	 }
		});

		if(links.length >= 1){
			insertBadge();
		}

	}
	}, 10);
});