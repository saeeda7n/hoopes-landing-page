const closeMenuButton = document.getElementById('closeMenuButton')
const menu = document.getElementById('menu')


function toggleMenu() {
    menu.classList.toggle('-translate-x-full')
}

document.addEventListener('click', (e) => {
    const menuSelf = e.target.closest('#menu');
    const showSelf = e.target.closest('#showMenuButton');
    if (showSelf) {
        toggleMenu();
        return;
    }
    if (!menuSelf && !menu.classList.contains('-translate-x-full')) {
        menu.classList.toggle('-translate-x-full')
    }
})


closeMenuButton.addEventListener('click', toggleMenu)



