// Loader

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function startAnimation(element) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return element.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= element.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 5; // Slower transition
    }, 20); // Increase interval duration
}

document.addEventListener("DOMContentLoaded", () => {
    const h1Element = document.querySelector("h1");
    startAnimation(h1Element);
});


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: " 101%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#monster",{
    top: "120%",
    left: "11%"
}, 'watermelon')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%",
    rotate:"360deg"
}, 'watermelon')
tl.to("#watermelon",{
    width: "14%",
    top:"172%",
    right: "10%",
    rotate:"360deg"
}, 'watermelon')
tl.to("#leaf",{
    top:"100%",
    rotate: "130deg",
    left: "70%"
}, 'watermelon')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'watermelon')

gsap.from(".lemon1",{scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 30%",
    scrub: true,
    // markers: true,
},
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
})
gsap.from(".lemon2",{scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 30%",
    scrub: true,
    // markers: true,
},
    rotate: "90deg",
    left: "120%",
    top: "110%"
})

gsap.from("#blue",{scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 30%",
    scrub: true,
    // markers: true,
},
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
})

gsap.from("#red",{scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 30%",
    scrub: true,
    // markers: true,
}, 
    rotate: "90deg",
    top: "110%",
    left: "100%",
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "195%",
    rotate:"360"
}, 'ca')
tl2.to("#monster",{
    height:"350px",
    top: "210%",
    left: "44%",
}, 'ca')

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})