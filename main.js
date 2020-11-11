/// Movement animation
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');

/// Animate Items
const sneaker = document.querySelector('.sneaker img');
const info = document.querySelector('.info');


// Moving animation event
cardContainer.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

/// Animate In
cardContainer.addEventListener('mouseenter', e => {
    card.style.transition = 'all 500ms ease-out';
    info.style.transition = 'all 500ms ease-out';
    sneaker.style.transition = 'all 500ms ease-out';
    /// Popout effect
    sneaker.style.transform = 'translateZ(150px) rotateZ(45deg)';
    info.style.transform = 'translateZ(150px)';
})

/// Animate Out
cardContainer.addEventListener('mouseleave', e =>{
    card.style.transition = 'all 500ms ease-in';
    info.style.transition = 'all 500ms ease-in';
    sneaker.style.transition = 'all 500ms ease-in';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    /// Popback
    sneaker.style.transform = 'translateZ(0px) rotate(0deg)';
    info.style.transform = 'translateZ(0px)';
})

/// Click event buttons sizes
const sizes = document.querySelectorAll('.sizes button');

sizes.forEach(size=>{
    size.addEventListener('click', () => {
        SelectingSize(size);
    })
});

/// Highlight selected size
function SelectingSize(selectedSize){
    sizes.forEach(size =>{
        size.classList.remove('active');
    })
    selectedSize.classList.add('active');
}