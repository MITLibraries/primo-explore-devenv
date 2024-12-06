var app = angular.module("viewCustom", ["angularLoad"]);

app.component("prmSearchBookmarkFilterAfter", {
    template:
        '<div id="ask-us-mit"><a href="https://libraries.mit.edu/ask" aria-expanded="false" aria-controls="collapsible--1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16.593px" height="16px" viewBox="0 0 16.593 16" enable-background="new 0 0 16.593 16" xml:space="preserve"><path d="M16.593 6.278c0 1.074-0.074 2.148-0.241 3.185 -0.204 1.353-1.722 2.574-3.055 2.722 -1.353 0.131-2.686 0.204-4.02 0.223L5.74 15.833C5.63 15.944 5.481 16 5.334 16c-0.094 0-0.167-0.019-0.241-0.037C4.871 15.87 4.74 15.647 4.74 15.407V12.37c-0.481-0.036-0.963-0.055-1.443-0.111 -1.334-0.148-2.853-1.443-3.074-2.796C0.074 8.426 0 7.352 0 6.296c0-1.092 0.074-2.185 0.223-3.24 0.222-1.352 1.74-2.648 3.074-2.797C4.963 0.093 6.63 0 8.297 0s3.333 0.093 5 0.259c1.333 0.149 2.851 1.445 3.055 2.797C16.519 4.111 16.593 5.204 16.593 6.278"></path></svg><span>Ask Us</span></a></div>',
});
app.component("prmLogoAfter", {
    template:
        '<div id="title-mit"><a href="https://mit.primo.exlibrisgroup.com/discovery/search?vid=01MIT_INST:MIT&lang=en">Search Our Collections</a></div>',
});
app.component("prmSearchBarAfter", {
    template: `<tacos></tacos><mit-alert-banner></mit-alert-banner>`,
});
app.component("prmAtozSearchBarAfter", {
    template: '<mit-alert-banner></mit-alert-banner>',
});
app.component("prmBrowseSearchBarAfter", {
    template: '<mit-alert-banner></mit-alert-banner>',
});
app.component("prmNoSearchResultAfter", {
    template: '<mit-no-search-result></mit-no-search-result>'
});

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