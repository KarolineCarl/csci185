const defaultTheme = ev => {
    document.querySelector('body').className = '';
};

const oceanTheme = ev => {
   document.querySelector('body').className = 'ocean';
};

const desertTheme = ev => {
   document.querySelector('body').className = 'desert';
};

const highContrastTheme = ev => {
    document.querySelector('body').className = 'high-contrast';
}; 


document.querySelector('#default').addEventListener('click', defaultTheme); 
document.querySelector('#ocean').addEventListener('click', oceanTheme); 
document.querySelector('#desert').addEventListener('click', desertTheme); 
document.querySelector('#high-contrast').addEventListener('click', highContrastTheme); 
