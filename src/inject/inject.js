$form = "<p>Login below</p><form style='display: inline;' action='https://diohack.herokuapp.com/create'>" +
	"Name: <input type='text' name='name' class='form-control' style='display: inline;'><br>" +
	"Region: <input type='text' name='region' class='form-control' style='display: inline;'><br>" +
	"Size: <input type='text' name='size' class='form-control' style='display: inline;'><br>" +
	"authtoken <input class='form-control' type='text' name='token'>"+
	"<button id='submit' type='submit'>Deploy</button><br>"+
	"</form>";

	$(function(){
		console.log('test');
	});


	function update_link(){
		  var client_id = document.getElementbyId('client_id');
		  var callback_uri = document.getElementbyId('client_id');
		  //TODO: Add check before hand

			var final_href = "https://cloud.digitalocean.com/v1/oauth/authorize?response_type=token&client_id="+
					client_id +
		  "&redirect_uri=" + callback_uri +
		  "&scope=read%20write&state=0807edf7d85e5d"

			document.getElementbyId('link_for_login').href = final_href;
	}


function insertBadge(){
	console.log("Insert Badge!");
	$("#readme").prepend("<div class='depoly-form header header-logged-in'><a href=\"#\">deploy to heroku</a><div>"+$form+"</div>");
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