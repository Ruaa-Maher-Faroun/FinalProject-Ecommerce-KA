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




// let slide = document.querySelectorAll('.swiper-slide');
// setInterval(() => {
//     slide.forEach((e, ind) => {
//         if (e.classList.contains('d-none')) {

//         }
//     });
//     slide.classList.add('d-none");
// }, 7000);


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
        seconds ;

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