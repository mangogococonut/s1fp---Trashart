const Box = document.querySelector(".box");
const fruits = document.querySelectorAll(".fruit");
const yellowbox = document.querySelector(".yellowbox");


Box.addEventListener("click", function() {
  Box.classList.toggle("open");
  yellowbox.classList.toggle("active");
  
  fruits.forEach(function(fruit) {
    fruit.style.display = "block";


    
    var random2 = Math.random();
    var range2 = 1500;
    var min2 = -750;
    var translateX = 'translateX(' + (random2 * range2 + min2) + 'px)';
    
 var random1 = Math.random();
    var range1 = 400;
    var min1 = 0;
    var translateY = 'translateY(' + (random1 * range1 + min1) + 'px)';



// Notice the easing functions are 
// different for the horizontal and 
// vertical component of the
// transformation. This mismatch prevents 
// us from being able to combine both sets of
// keyframes into a single unified set.
const throwHorizontalKeyframes = [
  { transform: 'none', easing: 'linear' },
  { //transform: 'translateX(600px)' 
     transform: translateX
  }
];
const throwVerticalKeyrames = [
  { 
    transform: 'translateY(300px)',
    easing: 'cubic-bezier(0.1, 0.3, 0.6, 1)' 
  }, { 
    transform: 'translateY(100px)',
    easing: 'cubic-bezier(0.4, 0, 0.9, 0.7)'
  },
  {     
  transform: translateY
  
  }
];
let animationOptions = {
  duration: 1000,
  fill: 'forwards'
};


// With composite mode support, we no longer need
// the additional element.
const animH = fruit.animate(
  throwHorizontalKeyframes, 
  animationOptions);
animationOptions.composite = 'add';
fruit.animate(
  throwVerticalKeyrames,
  animationOptions);


// animH will get marked as replaced
// once the last animation finishes
// since it animates the same property.
// We have two options to ensure that
// both effects remain when the animations
// finish.

// Option 1:
// Set animation as persistent to prevent
// getting auto-removed as a replaceable
// animation. 
// animH.persist();

// Option 2:
// Commit the current state of the
// animation as an inline style. The
// animation is no longer in effect, but
// the style change lives on.
animH.onremove = () => {
  animH.commitStyles();
};

    
    
    
  });
});


      document.querySelector("body").addEventListener("mousemove", eyeball);
      function eyeball() {
        var eye = document.querySelectorAll(".eye");
        eye.forEach(function(eye) {
          let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
          let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
          let radian = Math.atan2(event.pageX - x, event.pageY - y);
          let rot = radian * (180 / Math.PI) * -1 + 0;
          eye.style.transform = "rotate(" + rot + "deg)";
        });
      }
