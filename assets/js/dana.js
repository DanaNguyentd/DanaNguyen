//Detect using desktop or phone
/* Storing user's device details in a variable*/
let details = navigator.userAgent; 
/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone|kindle/i; 
/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details); 
if (isMobileDevice) { 
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="assets/css/StyleMobile.css" />'); 
} else { 
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="assets/css/StyleDesktop.css" />'); 
}
