"use strict";

function generate_token(length) {
    let a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ123456789!@#$%^&*()';
    let b = [];
    for (let i = 0; i < length; i++) {
        let j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join('');
}
document.addEventListener('click', () => {
    console.log(generate_token(20));
    // document.querySelector('body').innerHTML = generate_token(32);
});