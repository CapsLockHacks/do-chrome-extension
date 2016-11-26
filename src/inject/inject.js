$form = "<p>Login below</p><form style='display: inline;' action='https://diohack.herokuapp.com/create'>" +
	"Name: <input type='text' name='name' class='form-control' style='display: inline;'><br>" +
	"Region: <input type='text' name='region' class='form-control' style='display: inline;'><br>" +
	"Size: <input type='text' name='size' class='form-control' style='display: inline;'><br>" +
	"<input type='hidden' name='giturl' id='giturl'><br>" +
	"authtoken: <input class='form-control' type='text' name='token'><br>"+
	"<button id='submit' type='submit'>Deploy</button><br>"+
	"</form>";


function insertBadge(){
	console.log("Inserting Badge!");
	$("#readme").prepend("<div class='depoly-form header header-logged-in'><a href=\"#\">deploy to heroku</a><div>"+$form+"</div>");
	$("#giturl").val(window.location + '.git');
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