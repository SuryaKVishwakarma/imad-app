console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML='New Value';

var img=document.getElementById('img');

img.onclick = function() {
    img.style.marginleft = '100px';  
};