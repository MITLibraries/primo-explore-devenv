var noResultTemplate = `<md-card class="default-card zero-margin _md md-primoExplore-theme">
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline">Oops, no records found! Let's keep digging...</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content>
                <p><span class="bold-text">No results matching "{{$ctrl.getSearchTerm}}". Is the spelling correct?</span></p>
                <p><span >More options:</span></p>
                    <ul>
                        <li>Articles: Select the "Search in full text" checkbox in the sidebar, or request via <a href="https://libraries.mit.edu/illiad">ILB/ILLiad</a>.</li>
                        <li>If you have not already logged in, doing so may retrieve more results.</li>
                        <li>Books, physical materials: Request via BorrowDirect/InterLibrary Borrowing (ILB) by finding the item in <a href="https://mit.on.worldcat.org/search?queryString={{$ctrl.getSearchTerm}}">WorldCat</a>.</li>
                        <li>Archives and manuscripts: Search and request via <a href="http://archivesspace.mit.edu/">ArchivesSpace</a>.</li>
                        <li><a href="https://libraries.mit.edu/suggest-purchase">Suggest a purchase</a>.</li>
                        <li><a href="https://libraries.mit.edu/ask">Ask Us</a> for more help!</li>
                    </ul>
            </md-card-content>
        </md-card>
        `

app.component("mitNoSearchResult", {
    //require the controller for the prmNoSearchResult directive
    //so we can get the "term" property to use in our controller
    require: {
        prmNoSearchResultCtrl: '^prmNoSearchResult'
    },
    controller: function () {
        this.$onInit = function () {
            this.getSearchTerm = this.prmNoSearchResultCtrl.term;
        };
    },
    template: noResultTemplate
});