console.log(location.host + ': This would be the main JS file.');
window.name = 'This is window.name data.';

if(window != window.parent) {
    postMessage('Message from ' + location.host, window.parent);
}
