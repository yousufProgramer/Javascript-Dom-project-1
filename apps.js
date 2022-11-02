// Project Requriments
// change the background color 

// step-1 create a onclick event

// window.onload = () => {
//     main();
// };
main();

function main(){
     const root = document.getElementById('header');

     const btn = document.getElementById('change-color');

     const inputValue = document.getElementById('input-value');

     btn.addEventListener('click', function () {
        const bgColor = hexaColor();
        root.style.backgroundColor = bgColor;
        inputValue.value = bgColor;
     })

     const copy = document.getElementById('copyBtn')

     copy.addEventListener('click',function(){
        navigator.clipboard.writeText(inputValue.value)
     })
}

/// create a hexa rbg color

function hexaColor(){
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}


