var deferrredPrompt;

if (!window.Promise) {
    window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log('service worker registerd');
        })
        .catch(function(err) {
            console.log(err);
        });
}

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferrredPrompt = e;
    return false;
});
