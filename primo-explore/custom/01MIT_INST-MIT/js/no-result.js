var noResultTemplate = `
<md-card class="default-card zero-margin _md md-primoExplore-theme">
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline">Oops, no records found! Let's keep digging...</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content>
                <p><span class="bold-text">No results matching "{{$ctrl.getSearchTerm}}". Is the spelling correct?</span></p>
                <p><span>More options:</span></p>
                    <ul>
                        <li>Get more results by:</li>
                        <ul>
                            <li> Selecting "Also search in text of articles" in the sidebar </li>
                            <li> Signing in (some content only available to authenticated users) </li>
                        </ul>
                        <li>Articles: Request via <a href="https://libraries.mit.edu/illiad">ILB/ILLiad.</a></li>
                        <li>Books, physical materials: Request via BorrowDirect/InterLibrary Borrowing (ILB) by finding the item in <a href="https://mit.on.worldcat.org/search?queryString={{$ctrl.getSearchTerm}}">WorldCat</a>.</li>
                        <li>Try these other specialized search tools:</li>
                        <ul>
                            <li><a href="https://libguides.mit.edu/az.php">A-Z Databases</a>: Browse or search for databases.</li>
                            <li><a href="https://archnet.org/">Archnet</a>: Architecture, design, and conservation issues related to the Muslim world.</li>
                            <li><a href="http://archivesspace.mit.edu/">ArchivesSpace</a>: Archives and manuscripts in our <a href="https://libraries.mit.edu/distinctive-collections">Distinctive Collections</a>.</li>
                            <li><a href="https://libraries.mit.edu/dspace">DSpace@MIT</a>: MIT theses, articles and other research materials.</li>
                            <li><a href="https://libraries.mit.edu/dome">Dome</a>: MIT Libraries’ digital collections – images, media, maps, and more.</li>
                            <li><a href="https://geodata.libraries.mit.edu/">GeoData</a>: GIS/spatial data available at MIT.</li>
                            <li><a href="https://libraries.mit.edu/experts">Subject guides</a>: Created by our librarians for targeted research by subject.</li>
                        </ul>
                    </ul>
                    <p><span>You may also <a href="https://libraries.mit.edu/suggest-purchase">Suggest a purchase</a> or 
                    <a href="https://libraries.mit.edu/ask">Ask Us</a> for more help!
                    </span></p>
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