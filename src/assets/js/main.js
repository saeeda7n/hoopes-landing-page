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


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        if (intersecting)
            entry.target.classList.add('active')
        else
            entry.target.classList.remove('active')

    })
}, {threshold: 0.6})

const targets = document.getElementsByClassName('anchor')

for (let i = 0; i < targets.length; i++) {
    observer.observe(targets[i])
}

const Tweet = {
    id,
    nftTokenId,
    body,
    signature,
    ownerAddress,
    transaction:{
      tx,
      nonce,
    },
    chain:{
        chainId,
        name,
    }
}


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 0,
    initialSlide: 2,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 0,
            initialSlide: 2,
            loop: true
        },
        570: {
            slidesPerView: 1.5,
            spaceBetween: 0,
            initialSlide: 2,
            loop: true
        },
        670: {
            slidesPerView: 1.8,
            spaceBetween: 0,
            initialSlide: 2,
            loop: true
        },
        830: {
            slidesPerView: 2,
            spaceBetween: 0,
            loop: false
        },
        1124: {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: false
        }
    },
});
