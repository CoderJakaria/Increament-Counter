// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter)=>{

//   counter.innerHTML=0;

// const updateCounter=()=>{
//      let tergetCount = +counter.getAttribute("data-target");
//      // console.log(typeof tergetCount)

//      const startingCount = Number(counter.innerHTML);
//      const incr = tergetCount/100

//      if (startingCount<tergetCount) {
//           counter.innerHTML= `${Math.round(startingCount+incr)}`
//           setTimeout(updateCounter,1)
//      }else{
//           counter.innerHTML= tergetCount
//      }
// }

//   updateCounter()

// })








// ************* Another Way Of This Program********************** //







//for InnerHTML= 0 //
const counter1 = document.querySelector(".counter1");
const counter2 = document.querySelector(".counter2");
const counter3 = document.querySelector(".counter3");
counter1.innerHTML=0;
counter2.innerHTML=0;
counter3.innerHTML=0;
// End //


// reference
const cont1= document.querySelector("#counter1");
const cont2= document.querySelector("#counter2");
const cont3= document.querySelector("#counter3");
// End //


// for first div
let count = 0;
let counttoBe = 4000;
setInterval(()=>{
     if (count<counttoBe) {
          count+=50
          counter1.innerHTML=count
     }
},10)
// End


// for second div
let count1 = 0;
let counttoBe1 = 1500;
setInterval(()=>{
     if (count1<counttoBe1) {
          count1+=50
          counter2.innerHTML=count1
     }
},10)
// End

// for third div
let count2 = 0;
let counttoBe2 = 500;
setInterval(()=>{
     if (count2<counttoBe2) {
          count2+=10
          counter3.innerHTML=count2
     }
},10)
// End