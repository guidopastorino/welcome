const $welcomeTitle = document.querySelector('h1')

const nameUser = prompt('Cómo te llamas?')

if (nameUser === null || nameUser.length == 0) {
    $welcomeTitle.innerHTML = 'Debes ingresar un nombre'
} else {
    $welcomeTitle.innerHTML = `Bienvenido, ${nameUser}!`
}