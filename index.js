const googlePlayURI = "https://play.google.com/store/apps/details?id=com.pathao.user"
const iosURI = "https://itunes.apple.com/us/app/pathao/id1201700952"
const urlParams = new URLSearchParams(window.location.search);

$(document).ready(function() {
    let target = 'Android'
    if (urlParams.has('target')) {
        if (urlParams.get('target') == 'ios') {
            target = 'iOS'
        }
    }
    document.getElementById('target').innerHTML = target
});

function pageRedirect() {
    var base_url = ''
    if (urlParams.get('target') == 'ios') {
        base_url = base_url + iosURI
    } else if (urlParams.get('target') == 'android') {
        base_url = base_url + googlePlayURI
    } else {
        base_url = base_url + googlePlayURI
    }
    urlParams.delete('target');
    window.location.replace(base_url + "&" + urlParams.toString());
}
setTimeout("pageRedirect()", 500);