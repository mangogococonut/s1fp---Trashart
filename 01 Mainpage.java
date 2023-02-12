const giftBox = document.querySelector(".box");
const fruits = document.querySelectorAll(".fruit");

giftBox.addEventListener("click", function() {
  giftBox.classList.toggle("open");

  fruits.forEach(function(fruit) {
    fruit.style.display = "block";

 var random1 = Math.random();
    var range1 = 700;
    var min1 = 0;
    var translateY = 'translateY(' + (random1 * range1 + min1) + 'px)';

    var random2 = Math.random();
    var range2 = 2500;
    var min2 = -1250;
    var translateX = 'translateX(' + (random2 * range2 + min2) + 'px)';



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
