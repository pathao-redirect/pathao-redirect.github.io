const googlePlayURI = "https://play.google.com/store/apps/details?id=com.pathao.user"
const iosURI = "https://itunes.apple.com/us/app/pathao/id1201700952"

$(document).ready(function() {
    const url = new URL(window.location.href);
    if (url.searchParams.has('type')) {
        let cType = url.searchParams.get('type')
        url.searchParams.delete('type')
        if (cType == 'install') {
            appInstallRedirect(url)
        } else if (cType == 'campaign') {
            campaignRedirect(url)
        }
    }
});

function appInstallRedirect(url) {
    setTimeout(function() {
        var base_url = ''
        if (url.searchParams.get('target') == 'ios') {
            base_url = base_url + iosURI
        } else if (url.searchParams.get('target') == 'android') {
            base_url = base_url + googlePlayURI
        } else {
            return null
        }
        let url_out = new URL(base_url)
        url.searchParams.delete('target');
        url_out.search = url.searchParams
        window.location.replace(url_out.toString());
    }, 10);
}

function campaignRedirect(url) {
    if (url.searchParams.has('redirect')) {
        window.location.replace(url.searchParams.get('redirect'))
    }
}