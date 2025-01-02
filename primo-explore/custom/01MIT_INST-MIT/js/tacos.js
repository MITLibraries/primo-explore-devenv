app.factory("tacosService", [
    "$http",
    function ($http) {
        return {
            sendQueryToTacos: function (searchQuery) {
                var graphQlQuery = '{logSearchEvent(searchTerm: "' + searchQuery + '", sourceSystem: "primo-production") ' +
                    '{phrase detectors {suggestedResources {title url}}}}';
                var req = {
                    method: "POST",
                    url: "https://tacos.libraries.mit.edu/graphql",
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    data: {
                        query: graphQlQuery,
                    },
                };
                return $http(req);
            },
        };
    },
]);

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

        $scope.$watch(
            function () {
                // Watch for changes to the $stateParams.query property

                return parseSearchQuery($stateParams.query);
            },
            function (newSearchQuery) {
                // This listener function triggers when the watcher is first initialized and
                // each time the results of the watched expression change afterward.
                // During the initial trigger, the listener will send a search query to TACOS
                // if the client's initial request to Primo includes search parameters.
                // This behavior is desirable because it ensures that TACOS receives a search query
                // right from the start. Without it, TACOS would only receive queries on subsequent user searches.

                if (newSearchQuery !== undefined) {
                    //avoid sending 'undefined' searches to TACOS
                    tacosService
                        .sendQueryToTacos(newSearchQuery)
                        .then(function (response) {
                            console.log(response);
                            vm.tacosResponse = response.data.data.logSearchEvent.phrase;
                        });
                }
            }
        );
    },


});