let fog_front = document.getElementById('fog_front');
let fog_front1 = document.getElementById('fog_front1');
let heading = document.getElementById('heading');
let day = document.getElementById('day');


window.addEventListener('scroll' , function(){
let value = window.scrollY;

fog_front.style.left = value * 1.35 + 'px';
fog_front1.style.left = value * 0.25 + 'px'; 
heading.style.marginRight = value * 2 + 'px';
day.style.left = value * 0.5 + 'px';
});