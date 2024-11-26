
// render swipper:
const categories = [
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
    const swiperSlide = `<div class="custom-swiper swiper-slide swiper-${ind + 1}">
                            ${e.innerHTML}
                            </div>`;

    categories.shift();
    console.log(categories);
    // e.style.transform = `translateX(0)`;
    // categories.push(swiperSlide);
    
    // renderCategory();/
    document.querySelector(`.custom-swiper.swiper-${ind + 1}`).classList.remove("notvisible");
    
}
let value = 0;
setInterval(() => {
    let slidea = document.querySelectorAll('.custom-swiper.swiper-slide');
    let slide = [...slidea];
    value -= 100;
    console.log();
    let rect = 0;
    let distanceToRight = 0;
    
    slide.forEach((e, i) => {
        e.style.transform = `translateX(${value}px)`;
   
            rect = e.getBoundingClientRect();
            distanceToRight = window.innerWidth - rect.right;
            // console.log('Distance to the right edge:', distanceToRight);
            // console.log(distanceToRight, i)
            if (distanceToRight > 750) {
                // document.querySelector(`.custom-swiper.swiper-${i + 1}`).classList.add("notvisible");
                // changeArray(e, i);
                newSlide = categories.filter((c,ii)=> ii != i);

                categoryContainer.innerHTML = newSlide.join(" "); 
                categoryContainer.innerHTML += e; 
            }
            
        
        // if(i===1){

        //     rect = e.getBoundingClientRect();
        //     distanceToRight = window.innerWidth - rect.right;
        //     console.log('Distance to the right edge:', distanceToRight);
        //     console.log(distanceToRight, i)
        // }
    });
    // console.log(categories);


}, 1500);

console.log("hello");
