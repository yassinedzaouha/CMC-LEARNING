// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
controls = document.querySelectorAll('.control'),
headerItems = document.querySelectorAll('.item-header'),
descriptionItems = document.querySelectorAll('.item-description'),
activeDelay = 0.76,
interval = 5000;

let current = 0;

const slider = {
init: () => {
    controls.forEach(control =>
    control.addEventListener('click', (e) => {
        slider.clickedControl(e);
    })
    );
    controls[current].classList.add('active');
    items[current].classList.add('active');
},
nextSlide: () => {
    slider.reset();
    if (current === items.length - 1) current = -1;
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
},
clickedControl: (e) => {
    slider.reset();
    clearInterval(intervalF);
    const control = e.target,
    dataIndex = Number(control.dataset.index);
    control.classList.add('active');
    items.forEach((item, index) => {
    if (index === dataIndex) item.classList.add('active');
    });
    current = dataIndex;
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval);
},
reset: () => {
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
},
transitionDelay: (items) => {
    items.forEach(item => {
    const delay = item.parentNode.classList.contains('active') ? activeDelay : 0;
    item.firstElementChild.style.transitionDelay = `${delay}s`;
    });
}
};

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();
