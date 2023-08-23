var box = document.getElementById('check')
let checker = false;

let mything = document.getElementById('html-tag')
let here = document.querySelector("html")


//works to prevent any background scrolling for mobile
//even works when the menu isn't in a fixed position
//also this doesn't send the user back to the top --- works fine!!

//box is the label button thing used for the menu.
//the here thing is the html doc. Basically I set the height of the html to what is shown and hide the overflow
//to keep anything from moving as the size has been reached
//then when button is pressed again, the height is back to what it was before and the overflowY is off
//beyond that, the body and html have overflowX hidden at all times.
//also margin in all direction is set to zero for body

box.addEventListener('click' , () => {

  console.log(mything, 'is here')
  console.log('here', here)
  

    if(checker == false) {
    
      here.style.height = "100%"
      here.style.overflowY = "hidden"
          console.log('button pressed')

          checker = true; 
    } else if (checker == true) {
      console.log('button off')
      here.style.height = "unset"
      here.style.overflowY = "visible"
        checker = false;
    }
})

