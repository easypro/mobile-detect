var md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
    if (md.phone()) {
        $('span.yellow').html('Phone');
    } else if (md.tablet()) {
        $('span.yellow').html('Tablet');
    }
}