let box = document.querySelectorAll("span.label");
let  clicks = 0;

Array.from(box).forEach(e => {
   e.id = 'box';
  });

const dailyBtn = document.getElementById("addDaily");
const weeklyBtn = document.getElementById("addWeekly");
const monthlyBtn = document.getElementById("addMonthly");

dailyBtn.addEventListener("click", function() {
  boxes1 = document.getElementById("daily");
  clone1 = boxes1.cloneNode(true);
  clone1.id = "new";
  boxes1.parentNode.appendChild(clone1);
 });

 weeklyBtn.addEventListener("click", function() {
  boxes2 = document.getElementById("weekly");
  clone2 = boxes2.cloneNode(true);
  clone2.id = "new";
  boxes2.parentNode.appendChild(clone2);
 });

 monthlyBtn.addEventListener("click", function() {
  boxes3 = document.getElementById("monthly");
  clone3 = boxes3.cloneNode(true);
  clone3.id = "new";
  boxes3.parentNode.appendChild(clone3);
 });

 document.addEventListener('click', function(e){
  
  if(e.target && e.target.id=='box'){
  
    e.target = event.currentTarget;
    e.target.clicks = (e.target.clicks || 0) + 1;

    if (e.target.clicks == 1) {
      e.target.style.backgroundColor ='#d4fc79';
    } if (e.target.clicks == 2) {
      e.target.style.backgroundColor = '#ff7480';
    } if (e.target.clicks == 3) {
      e.target.style.backgroundColor = '';
      e.target.clicks = 0;
    }
}
})
    