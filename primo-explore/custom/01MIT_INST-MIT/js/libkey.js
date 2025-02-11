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
    articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)",
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