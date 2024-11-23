let arr = document.querySelectorAll('.carousel-item');
let i = 0;
setInterval(() => {
    arr.forEach((e, ind) => {
        if (e.classList.contains('active-carousel-item')) {
            i = ind;
        }
        e.classList.remove('active-carousel-item');
    });

    if (i < 2) {
        i++;
    } else {
        i = 0;

    }

    arr[i].classList.add('active-carousel-item');
}, 7000);






// render swipper:
const categories = [
    `<div class="custom-swiper custom-swiper swiper-slide swiper-1">

                               <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/2.svg" alt="">
                                </div>
                                <h3>Fruits</h3>
                                <p>291 items</p>

                            </div>`,

    `<div class="custom-swiper custom-swiper swiper-slide swiper-2">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/3.svg" alt="">
                                </div>
                                <h3>Cold Drinks</h3>
                                <p>49 items</p>

                            </div>`,

    ` <div class="custom-swiper custom-swiper swiper-slide swiper-3">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/4.svg" alt="">
                                </div>
                                <h3>Bakery</h3>
                                <p>08 items</p>

                            </div>`,

    `<div class="custom-swiper custom-swiper swiper-slide swiper-4">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/1.svg" alt="">
                                </div>
                                <h3>Vegetables</h3>
                                <p>485 items</p>

                            </div>`,
    `<div class="custom-swiper swiper-slide swiper-1">

                               <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/2.svg" alt="">
                                </div>
                                <h3>Fruits</h3>
                                <p>291 items</p>

                            </div>`,

    `<div class="custom-swiper swiper-slide swiper-2">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/3.svg" alt="">
                                </div>
                                <h3>Cold Drinks</h3>
                                <p>49 items</p>

                            </div>`,

    ` <div class="custom-swiper swiper-slide swiper-3">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/4.svg" alt="">
                                </div>
                                <h3>Bakery</h3>
                                <p>08 items</p>

                            </div>`,

    `<div class="custom-swiper swiper-slide swiper-4">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/1.svg" alt="">
                                </div>
                                <h3>Vegetables</h3>
                                <p>485 items</p>

                            </div>`,
    `<div class="custom-swiper swiper-slide swiper-1">

                               <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/2.svg" alt="">
                                </div>
                                <h3>Fruits</h3>
                                <p>291 items</p>

                            </div>`,

    `<div class="custom-swiper swiper-slide swiper-2">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/3.svg" alt="">
                                </div>
                                <h3>Cold Drinks</h3>
                                <p>49 items</p>

                            </div>`,

    ` <div class="custom-swiper swiper-slide swiper-3">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/4.svg" alt="">
                                </div>
                                <h3>Bakery</h3>
                                <p>08 items</p>

                            </div>`,

    `<div class="custom-swiper swiper-slide swiper-4">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/1.svg" alt="">
                                </div>
                                <h3>Vegetables</h3>
                                <p>485 items</p>

                            </div>`,
    `<div class="custom-swiper swiper-slide swiper-1">

                               <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/2.svg" alt="">
                                </div>
                                <h3>Fruits</h3>
                                <p>291 items</p>

                            </div>`,

    `<div class="custom-swiper swiper-slide swiper-2">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/3.svg" alt="">
                                </div>
                                <h3>Cold Drinks</h3>
                                <p>49 items</p>

                            </div>`,

    ` <div class="custom-swiper swiper-slide swiper-3">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/4.svg" alt="">
                                </div>
                                <h3>Bakery</h3>
                                <p>08 items</p>

                            </div>`,

    `<div class="custom-swiper swiper-slide swiper-4">

                                <div class="category-img-explore">
                                    <img src="./assets/imgs/categories/1.svg" alt="">
                                </div>
                                <h3>Vegetables</h3>
                                <p>485 items</p>

                            </div>`
];


const categoryContainer = document.querySelector('.category-container'); // Target the container for Swiper slides

function renderCategory() {
    let data = ``;
    for (let i = 0; i < categories.length; i++) {
        data += categories[i];
    }
    categoryContainer.innerHTML = data; // Append the slide to the container

}
renderCategory();

function changeArray(e, ind) {
    const swiperSlide = `<div class="custom-swiper swiper-slide swiper-${ind}">
                            ${e.innerHTML}
                            </div>`;

    categories.shift();
    // e.style.transform = `translateX(0)`;
    categories.push(swiperSlide);
    renderCategory();

}





let value = 0;
let loop = 0;
setInterval(() => {
    let slidea = document.querySelectorAll('.custom-swiper swiper-slide');
    let slide = [...slidea];
    value -= 100;

    slide.forEach((e, i) => {
        e.style.transform = `translateX(${value}px)`;
        // if (value * -1 > (230 * (i + 1))) {
        //     changeArray(e,i);
        // }
    });

}, 5000);



// Count down:
// Set the target time (884 days, 18:41:19)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 884);  // Add 884 days
targetDate.setHours(18, 41, 19, 0);  // Set the time to 18:41:19

// Function to update the countdown every second
function updateCountdown() {
    const now = new Date();
    const remainingTime = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML =
        days + " Days " +
        hours + " : " +
        minutes + " : " +
        seconds;

    // Stop the countdown when the target date is reached
    if (remainingTime < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();



