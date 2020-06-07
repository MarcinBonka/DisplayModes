let darkMode = true;

/* Obsługa buttona do modyfikacji nagłówka strony index */
const button = document.querySelector('.btnModeSwitch--js');
button.addEventListener('click', (e) => {
    console.log(`button ${button.innerHTML} clicked `);
    if(!darkMode)
    {
        console.log(`Changing to dark mode`);
        button.innerHTML=`Switch to light mode`;
        document.documentElement.style.setProperty('--text-color', 'rgb(228, 228, 180)');
        document.documentElement.style.setProperty('--bg-color', 'rgb(25, 39, 223)');
        
        darkMode = true;
    }
    else
    {
        console.log(`Changing to light mode`);
        button.innerHTML=`Switch to dark mode`;
        document.documentElement.style.setProperty('--text-color', 'rgb(58, 35, 100)');
        document.documentElement.style.setProperty('--bg-color', 'rgb(181, 182, 202)');
        darkMode = false;
    }
});

