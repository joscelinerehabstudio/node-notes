console.log('Starting app');

setTimeout(() => {
    console.log('Timeout callback');
}, 2000);

setTimeout(() => {
    console.log('Second callback');
}, 0);

// This does not wait for the 2secs to pass and
// 'Timeout Callback' to print before running
console.log('FIN');