var app = angular.module("viewCustom", ["angularLoad"]);

app.component("prmSearchBookmarkFilterAfter", {
    template:
        '<mit-ask-us></mit-ask-us>',
});
app.component("prmLogoAfter", {
    template:
        '<mit-soc-title></mit-soc-title>',
});
app.component("prmSearchBarAfter", {
    template: `<mit-tacos></mit-tacos><mit-alert-banner></mit-alert-banner>`,
});
app.component("prmAtozSearchBarAfter", {
    template: '<mit-alert-banner></mit-alert-banner>',
});
app.component("prmBrowseSearchBarAfter", {
    template: '<mit-alert-banner></mit-alert-banner>',
});
app.component("prmNoSearchResultAfter", {
    template: '<mit-no-search-result data-track-content data-content-name="no results"></mit-no-search-result>'
});

