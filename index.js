let fog_front = document.getElementById('fog_front');
let fog_front1 = document.getElementById('fog_front1');
let text = document.getElementById('text');


window.addEventListener('scroll' , function(){
let value = window.scrollY;

fog_front.style.left = value * 0.35 + 'px';
fog_front1.style.left = value * 1.25 + 'px'; 
text.style.marginRight = value * 2 + 'px';
});