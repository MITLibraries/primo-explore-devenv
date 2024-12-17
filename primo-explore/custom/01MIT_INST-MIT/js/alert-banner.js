var alertBannerTemplate =
    '<div ng-if="$ctrl.active" class="full-width-alert">How are we doing? <a href="https://mit.co1.qualtrics.com/jfe/form/SV_0HZvFmPYRjCzSCO">Give us feedback on your search experience</a>.</div>';

app.component('mitAlertBanner', {
    controller: function () {
        this.active = false; //show banner if `true`
    },
    template: alertBannerTemplate
})