

/////////////////////////////////////////////////////////

// Function to update the countdown every second
function updateCountdown() {
    // Set the target time (884 days, 18:41:19)

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 884);  // Add 884 days
targetDate.setHours(18, 41, 19, 0);  // Set the time to 18:41:19

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

/////////////////////////////////////////////////////////


///loader function
function loader(){
    window.addEventListener('DOMContentLoaded', function() {
        let loader = document.querySelector(".loader");
        loader.classList.remove("hide-loader");
        setTimeout(()=>{
            loader.classList.add("hide-loader");        
        },5000);    
        
    });
}

/////////////////////////////////////////////////////////

//subscribe modal function
function subscribeModal() {
    setTimeout(()=>{
        let sub = document.querySelector('.subscribe');
        sub.style.animation = 'show 1s ease-out';
        setTimeout(() => sub.classList.remove("hide-subscribe"), 1000); 
        sub.addEventListener('click', (event) => {
            if(sub === event.target){
                sub.style.animation = 'fade 1s ease-out';
                setTimeout(() => sub.classList.add("hide-subscribe"), 1000); 
                
            }
        });
        let closebtn = document.querySelector('.closebtn');
        closebtn.addEventListener('click', () => {
            sub.style.animation = 'fade 1s ease-out';
            setTimeout(() => sub.classList.add("hide-subscribe"), 1000); 
        });
        
    },7000);
}

 /////////////////////////////////////////////////////////

//light dark modes
function changeMode(){

    document.querySelector('.light-mode').addEventListener('click',()=>{
        document.body.classList.remove("dark");
        
    });
    document.querySelector('.dark-mode').addEventListener('click', ()=>{
        document.body.classList.add("dark");
        
    });
}

/////////////////////////////////////////////////////////

//vendors:
function changeVendorImg(){


const imageArray = [
    {
        vendorImg: './assets/imgs/vendors/img-1.jpg',
        businessImg: './assets/imgs/vendors/vendor-1.jpg',
    },
    {
        vendorImg: './assets/imgs/vendors/img-2.jpg',
        businessImg: './assets/imgs/vendors/vendor-2.jpg',
    },
    {
        vendorImg: './assets/imgs/vendors/img-3.jpg',
        businessImg: './assets/imgs/vendors/vendor-3.jpg',
    },
    {
        vendorImg: './assets/imgs/vendors/img-4.jpg',
        businessImg: './assets/imgs/vendors/vendor-4.jpg',
    },
];

let vendorArr = document.querySelectorAll(".vendor-box");

vendorArr.forEach((vendor, i) => {

    vendor.addEventListener('click', () => {
        vendorArr.forEach((box) => {
            box.classList.remove("chosen");
        });

        vendor.classList.add("chosen");
        document.querySelector('.vendor-img').setAttribute("src", `${imageArray[i].vendorImg}`);
        document.querySelector('.local-img').setAttribute("src", `${imageArray[i].businessImg}`);
    });

});
}

/////////////////////////////////////////////////////////



//call functions:
loader();
subscribeModal();
changeMode();
changeVendorImg();