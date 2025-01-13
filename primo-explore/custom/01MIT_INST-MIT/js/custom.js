(function(){
"use strict";
"use strict";

var app = angular.module("viewCustom", ["angularLoad", 'matomoAnalytics']);

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
    template: '<mit-no-search-result data-track-content data-content-name="no results"></mit-no-search-result>'
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
angular.module('matomoAnalytics', []);
angular.module('matomoAnalytics').run(function ($rootScope, $interval, analyticsOptions) {
    if (analyticsOptions.hasOwnProperty("enabled") && analyticsOptions.enabled) {
        if (analyticsOptions.hasOwnProperty("siteId") && analyticsOptions.siteId != '' && analyticsOptions.hasOwnProperty("siteUrl") && analyticsOptions.siteUrl != '') {
            if (typeof _paq === 'undefined') {
                window['_paq'] = [];
                _paq.push(['trackPageView']);
                _paq.push(['trackVisibleContentImpressions']);
                _paq.push(['logAllContentBlocksOnPage']);
                _paq.push(['enableLinkTracking']);
                (function () {
                    _paq.push(['setTrackerUrl', analyticsOptions.siteUrl + 'matomo.php']);
                    _paq.push(['setSiteId', analyticsOptions.siteId]);
                    var d = document,
                        g = d.createElement('script'),
                        s = d.getElementsByTagName('script')[0];
                    g.type = 'text/javascript';g.async = true;g.defer = true;g.src = analyticsOptions.siteUrl + 'matomo.js';s.parentNode.insertBefore(g, s);
                })();
            }
        }
        $rootScope.$on('$locationChangeSuccess', function (event, toState, fromState) {
            if (analyticsOptions.hasOwnProperty("defaultTitle")) {
                var documentTitle = analyticsOptions.defaultTitle;
                var timerStart = Date.now();
                var interval = $interval(function () {
                    if (document.title !== '') documentTitle = document.title;
                    if (window.location.pathname.indexOf('openurl') !== -1 || window.location.pathname.indexOf('fulldisplay') !== -1) if (angular.element(document.querySelector('prm-full-view-service-container .item-title>a')).length === 0) return;else documentTitle = angular.element(document.querySelector('prm-full-view-service-container .item-title>a')).text();

                    if (typeof _paq !== 'undefined') {
                        if (fromState != toState) _paq.push(['setReferrerUrl', fromState]);
                        _paq.push(['setCustomUrl', toState]);
                        _paq.push(['setDocumentTitle', documentTitle]);
                        _paq.push(['setGenerationTimeMs', Date.now() - timerStart]);
                        _paq.push(['enableLinkTracking']);
                        _paq.push(['enableHeartBeatTimer']);
                        _paq.push(['trackPageView']);
                        _paq.push(['trackVisibleContentImpressions']);
                        _paq.push(['logAllContentBlocksOnPage']);
                    }
                    $interval.cancel(interval);
                }, 0);
            }
        });
    }
});
angular.module('matomoAnalytics').value('analyticsOptions', {
    enabled: true,
    siteId: '12',
    siteUrl: 'https://matomo.libraries.mit.edu/',
    defaultTitle: 'Search our Collections'
});
var noResultTemplate = "<md-card class=\"default-card zero-margin _md md-primoExplore-theme\">\n            <md-card-title>\n                <md-card-title-text>\n                    <span class=\"md-headline\">Oops, no records found! Let's keep digging...</span>\n                </md-card-title-text>\n            </md-card-title>\n            <md-card-content>\n                <p><span class=\"bold-text\">No results matching \"{{$ctrl.getSearchTerm}}\". Is the spelling correct?</span></p>\n                <p><span >More options:</span></p>\n                    <ul>\n                        <li>Articles: Select the \"Search in full text\" checkbox in the sidebar, or request via <a href=\"https://libraries.mit.edu/illiad\">ILB/ILLiad</a>.</li>\n                        <li>If you have not already logged in, doing so may retrieve more results.</li>\n                        <li>Books, physical materials: Request via BorrowDirect/InterLibrary Borrowing (ILB) by finding the item in <a href=\"https://mit.on.worldcat.org/search?queryString={{$ctrl.getSearchTerm}}\" data-content-target=\"https://mit.on.worldcat.org/search?queryString={{$ctrl.getSearchTerm}}\">WorldCat</a>.</li>\n                        <li>Archives and manuscripts: Search and request via <a href=\"http://archivesspace.mit.edu/\">ArchivesSpace</a>.</li>\n                        <li><a href=\"https://libraries.mit.edu/suggest-purchase\">Suggest a purchase</a>.</li>\n                        <li><a href=\"https://libraries.mit.edu/ask\">Ask Us</a> for more help!</li>\n                    </ul>\n            </md-card-content>\n        </md-card>\n        ";

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