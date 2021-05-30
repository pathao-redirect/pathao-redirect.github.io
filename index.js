const googlePlayURI = "https://play.google.com/store/apps/details?id=com.pathao.user"
const iosURI = "https://itunes.apple.com/us/app/pathao/id1201700952"

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

function appInstallRedirect(url) {
    var base_url = ''
    if (url.searchParams.get('target') == 'ios') {
        let url_out = new URL(iosURI)
        url.searchParams.delete('target');
        for (let [key, val] of url.searchParams.entries()) {
            url_out.searchParams.append(key, val);
        }
        window.location.replace(url_out.toString());
    } else if (url.searchParams.get('target') == 'android') {
        let url_out = new URL(googlePlayURI)
        url.searchParams.delete('target');
        url_out.searchParams.append('referrer', url.searchParams.toString());
        window.location.replace(url_out.toString());
    } else {
        return null
    }


}

function campaignRedirect(url) {
    if (url.searchParams.has('redirect')) {
        window.location.replace(url.searchParams.get('redirect'))
    }
}