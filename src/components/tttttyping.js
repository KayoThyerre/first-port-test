function activateLetter(element) {
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((letter, i)=>{
        setTimeout(() => {
            element.innerHTML += letter;
        }, 75 * i);
    });
}

activateLetter(title);

const title = document.querySelector('.typing');