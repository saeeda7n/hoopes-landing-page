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

//
// const header = document.querySelector("#header")
// const observer = new IntersectionObserver(
//     ([e]) => {
//         console.log(e.target.classList.toggle("is-pinned", e.intersectionRatio < 1))
//         console.log('asdas')
//     },
//     {threshold: [1]}
// );
//
// observer.observe(header);
//

// const Tweet = {
//     id,
//     nftTokenId,
//     body,
//     signature,
//     ownerAddress,
//     transaction:{
//       tx,
//       nonce,
//     },
//     chain:{
//         chainId,
//         name,
//     }
// }


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true
});
