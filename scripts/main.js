let theImage = document.querySelector('img');
let theButton = document.querySelector('button');
let theHeading = document.querySelector('h3');

theImage.onclick = function()
{
    let imageSrc = theImage.getAttribute('src');
    if(imageSrc === 'images/firefox-logo.png'){
        theImage.setAttribute('src', 'images/firefox-logo2.png');
    }
    else{
        theImage.setAttribute('src', 'images/firefox-logo.png');
    }
}

function setUsername()
{
    let userName = prompt('Input user name');
    if(!userName)
    {
        setUsername();
    }
    else{
    localStorage.setItem('name', userName);
    theHeading.textContent = 'Wow, this actually works, ' + userName;
    }
}

if (!localStorage.getItem('name'))
{
    setUsername();
}
else{
    let storedName = localStorage.getItem('name');
    theHeading.textContent = 'Wow, this actually works, ' + storedName;
}

theButton.onclick = function()
{
    setUsername();
}