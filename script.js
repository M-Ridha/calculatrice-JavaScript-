const btns = [...document.querySelectorAll('.btn')];
const listeKeyCode = btns.map(el=>el.dataset.key);
const screen = document.querySelector(".ecran");


document.addEventListener('keydown', (e) =>{
    const value = e.keyCode.toString();
    calc(value)
})

document.addEventListener('click', (e) =>{
    const value = e.target.dataset.key;
    calc(value)
    
})

const calc = (value) =>{
    if (listeKeyCode.includes(value)) {
        switch (value) {
            case "8":
                screen.textContent = "";
                break;
            
            case "13":
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;

            default:
                const indexKeyCode = listeKeyCode.indexOf(value);
                const key = btns[indexKeyCode];
                screen.textContent += key.innerHTML;
                
        }
    } 
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul')
})

