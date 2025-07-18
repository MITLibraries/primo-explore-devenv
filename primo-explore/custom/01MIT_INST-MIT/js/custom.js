(function(){
"use strict";
"use strict";

var app = angular.module("viewCustom", ["angularLoad"]);

app.component("prmSearchBookmarkFilterAfter", {
    template: '<mit-ask-us></mit-ask-us>'
});
app.component("prmLogoAfter", {
    template: '<mit-soc-title></mit-soc-title>'
});
app.component("prmSearchBarAfter", {
    template: "<mit-tacos></mit-tacos><mit-alert-banner></mit-alert-banner>"
});
app.component("prmAtozSearchBarAfter", {
    template: '<mit-alert-banner></mit-alert-banner>'
});
app.component("prmBrowseSearchBarAfter", {
    template: '<mit-alert-banner></mit-alert-banner>'
});
app.component("prmNoSearchResultAfter", {
    template: '<mit-no-search-result></mit-no-search-result>'
});

var alertBannerTemplate = '<div ng-if="$ctrl.active" class="full-width-alert">How are we doing? <a href="https://mit.co1.qualtrics.com/jfe/form/SV_0HZvFmPYRjCzSCO">Give us feedback on your search experience</a>.</div>';

app.component('mitAlertBanner', {
    controller: function controller() {
        this.active = false; //show banner if `true`
    },
    template: alertBannerTemplate
});
app.component("mitAskUs", {
    template: '<div id="ask-us-mit"><a href="https://libraries.mit.edu/ask" aria-expanded="false" aria-controls="collapsible--1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16.593px" height="16px" viewBox="0 0 16.593 16" enable-background="new 0 0 16.593 16" xml:space="preserve"><path d="M16.593 6.278c0 1.074-0.074 2.148-0.241 3.185 -0.204 1.353-1.722 2.574-3.055 2.722 -1.353 0.131-2.686 0.204-4.02 0.223L5.74 15.833C5.63 15.944 5.481 16 5.334 16c-0.094 0-0.167-0.019-0.241-0.037C4.871 15.87 4.74 15.647 4.74 15.407V12.37c-0.481-0.036-0.963-0.055-1.443-0.111 -1.334-0.148-2.853-1.443-3.074-2.796C0.074 8.426 0 7.352 0 6.296c0-1.092 0.074-2.185 0.223-3.24 0.222-1.352 1.74-2.648 3.074-2.797C4.963 0.093 6.63 0 8.297 0s3.333 0.093 5 0.259c1.333 0.149 2.851 1.445 3.055 2.797C16.519 4.111 16.593 5.204 16.593 6.278"></path></svg><span>Ask Us</span></a></div>'
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
// Begin BrowZine - Primo Integration...
window.browzine = {

    libraryId: "853",
    apiKey: "511d4ee2-2169-4ac4-928b-2641284eeb30",

    journalCoverImagesEnabled: true,

    journalBrowZineWebLinkTextEnabled: true,
    journalBrowZineWebLinkText: "View Journal Contents",

    articleBrowZineWebLinkTextEnabled: true,
    articleBrowZineWebLinkText: "Browse journal issue",

    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Get PDF",

    articleLinkEnabled: true,
    articleLinkText: "Read online",

    printRecordsIntegrationEnabled: true,
    showFormatChoice: true,
    showLinkResolverLink: false,
    enableLinkOptimizer: true,

    articleRetractionWatchEnabled: true,
    articleRetractionWatchText: "Retracted Article",

    articleExpressionOfConcernEnabled: true,
    articleExpressionOfConcernText: "Expression of Concern",

    unpaywallEmailAddressKey: "ils-lib@mit.edu",
    articlePDFDownloadViaUnpaywallEnabled: true,
    articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)",
    articleLinkViaUnpaywallEnabled: true,
    articleLinkViaUnpaywallText: "Read Article (via Unpaywall)",
    articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
    articleAcceptedManuscriptPDFViaUnpaywallText: "Download PDF (Accepted Manuscript via Unpaywall)",
    articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
    articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)"
};

browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
document.head.appendChild(browzine.script);

app.controller('prmSearchResultAvailabilityLineAfterController', function ($scope) {
    window.browzine.primo.searchResult($scope);
});

app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController'
});
// ... End BrowZine - Primo Integration
/* Matomo Tag Manager */

var _mtm = window._mtm = window._mtm || [];
_mtm.push({ 'mtm.startTime': new Date().getTime(), 'event': 'mtm.Start' });
(function () {
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.async = true;g.src = 'https://matomo.libraries.mit.edu/js/container_SF5ZTPZP.js';s.parentNode.insertBefore(g, s);
})();

/* End Matomo Tag Manager */
var noResultTemplate = "\n<md-card class=\"default-card zero-margin _md md-primoExplore-theme\">\n            <md-card-title>\n                <md-card-title-text>\n                    <span class=\"md-headline\">Oops, no records found! Let's keep digging...</span>\n                </md-card-title-text>\n            </md-card-title>\n            <md-card-content>\n                <p><span class=\"bold-text\">No results matching \"{{$ctrl.getSearchTerm}}\". Is the spelling correct?</span></p>\n                <p><span>More options:</span></p>\n                    <ul>\n                        <li>Get more results by:</li>\n                        <ul>\n                            <li> Selecting \"Also search in text of articles\" in the sidebar </li>\n                            <li> Signing in (some content only available to authenticated users) </li>\n                        </ul>\n                        <li>Articles: Request via <a href=\"https://libraries.mit.edu/illiad\">ILB/ILLiad.</a></li>\n                        <li>Books, physical materials: Request via BorrowDirect/InterLibrary Borrowing (ILB) by finding the item in <a href=\"https://mit.on.worldcat.org/search?queryString={{$ctrl.getSearchTerm}}\">WorldCat</a>.</li>\n                        <li>Try these other specialized search tools:</li>\n                        <ul>\n                            <li><a href=\"https://libguides.mit.edu/az.php\">A-Z Databases</a>: Browse or search for databases.</li>\n                            <li><a href=\"https://archnet.org/\">Archnet</a>: Architecture, design, and conservation issues related to the Muslim world.</li>\n                            <li><a href=\"http://archivesspace.mit.edu/\">ArchivesSpace</a>: Archives and manuscripts in our <a href=\"https://libraries.mit.edu/distinctive-collections\">Distinctive Collections</a>.</li>\n                            <li><a href=\"https://libraries.mit.edu/dspace\">DSpace@MIT</a>: MIT theses, articles and other research materials.</li>\n                            <li><a href=\"https://libraries.mit.edu/dome\">Dome</a>: MIT Libraries\u2019 digital collections \u2013 images, media, maps, and more.</li>\n                            <li><a href=\"https://geodata.libraries.mit.edu/\">GeoData</a>: GIS/spatial data available at MIT.</li>\n                            <li><a href=\"https://libraries.mit.edu/experts\">Subject guides</a>: Created by our librarians for targeted research by subject.</li>\n                        </ul>\n                    </ul>\n                    <p><span>You may also <a href=\"https://libraries.mit.edu/suggest-purchase\">Suggest a purchase</a> or \n                    <a href=\"https://libraries.mit.edu/ask\">Ask Us</a> for more help!\n                    </span></p>\n            </md-card-content>\n        </md-card>\n        ";

app.component("mitNoSearchResult", {
    //require the controller for the prmNoSearchResult directive
    //so we can get the "term" property to use in our controller
    require: {
        prmNoSearchResultCtrl: '^prmNoSearchResult'
    },
    controller: function controller() {
        this.$onInit = function () {
            this.getSearchTerm = this.prmNoSearchResultCtrl.term;
        };
    },
    template: noResultTemplate
});
app.component("mitSocTitle", {
    template: '<div id="title-mit"><a href="https://mit.primo.exlibrisgroup.com/discovery/search?vid=01MIT_INST:MIT&lang=en">Search Our Collections</a></div>'
});
app.factory("tacosService", ["$http", function ($http) {
    return {
        sendQueryToTacos: function sendQueryToTacos(searchQuery) {
            var graphQlQuery = '{logSearchEvent(searchTerm: "' + searchQuery + '", sourceSystem: "primo-production") ' + '{phrase detectors {suggestedResources {title url}}}}';
            var req = {
                method: "POST",
                url: "https://tacos.libraries.mit.edu/graphql",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                },
                data: {
                    query: graphQlQuery
                }
            };
            return $http(req);
        }
    };
}]);

app.component("mitTacos", {
    controller: function tacosController($scope, tacosService, $stateParams) {

        var vm = this;

        function parseSearchQuery(searchQuery) {
            // If searchQuery is an array of strings, joins the strings and returns the result
            // TACOS expects ;;; as the separator when there are multiple search strings in a query 
            if (Array.isArray(searchQuery)) {
                searchQuery = searchQuery.join(";;;"); // handle an array of strings (advanced search)
            }
            return searchQuery;
        }

        $scope.$watch(function () {
            // Watch for changes to the $stateParams.query property

            return parseSearchQuery($stateParams.query);
        }, function (newSearchQuery) {
            // This listener function triggers when the watcher is first initialized and
            // each time the results of the watched expression change afterward.
            // During the initial trigger, the listener will send a search query to TACOS
            // if the client's initial request to Primo includes search parameters.
            // This behavior is desirable because it ensures that TACOS receives a search query
            // right from the start. Without it, TACOS would only receive queries on subsequent user searches.

            if (newSearchQuery !== undefined) {
                //avoid sending 'undefined' searches to TACOS
                tacosService.sendQueryToTacos(newSearchQuery).then(function (response) {
                    console.log(response);
                    vm.tacosResponse = response.data.data.logSearchEvent.phrase;
                });
            }
        });
    }

});
})();