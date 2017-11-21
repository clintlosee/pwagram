var deferrredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log('service worker registerd');
        });
}

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferrredPrompt = e;
    return false;
});
