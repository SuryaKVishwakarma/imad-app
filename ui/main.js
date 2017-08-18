console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML='New Value';

var img=document.getElementById('img');

img.onclick = function() {
    img.style.marginLeft = '100px';  
};