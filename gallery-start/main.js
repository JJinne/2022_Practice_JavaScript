const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'] ;

/* Looping through images */
for(let i = 1; i<=images.length; i++ ){
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/pic' + i+'.jpg');
    newImage.style.width = '20%';
    newImage.style.float= 'left';

    thumbBar.appendChild(newImage);
}
thumbBar.addEventListener('click', e => {
    const clickImage = e.target.getAttribute('src')
    displayedImage.setAttribute('src',clickImage);

});


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () =>{
    if(btn.className == 'dark'){
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent = 'Lighten';
        btn.setAttribute('class','light');
    }else{
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent = 'Darken';
        btn.setAttribute('class','dark');

    }
});
