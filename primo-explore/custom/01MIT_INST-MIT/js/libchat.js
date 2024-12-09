/*----------below is the code for libchat-----------*/
// Adds the chat button

// load libchat
var libchatHash = "1e8f3119e6cff530e0d23e2cb1f2b2a7"; // hash string goes inside quotation marks
var div = document.createElement("div");
div.id = "libchat_" + libchatHash;
document.getElementsByTagName("body")[0].appendChild(div);
var scr = document.createElement("script");
scr.src = "https://libanswers.mit.edu/load_chat.php?hash=" + libchatHash;
setTimeout(function () {
    document.getElementsByTagName("body")[0].appendChild(scr);
}, 2000);

/*---------------libchat code ends here---------------*/