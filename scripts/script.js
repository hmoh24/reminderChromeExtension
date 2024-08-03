console.log('content script loaded');

const header = document.getElementsByTagName('header');
console.log(header);
header[0].style.backgroundColor = "green";