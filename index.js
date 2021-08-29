const toggleSwitch =  document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('textbox');

//dark theme 
function darkTheme(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textbox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Theme';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'img/undraw_conceptual_idea_dark.svg'
    image2.src = 'img/undraw_feeling_proud_dark.svg'
    image3.src = 'img/undraw_proud_coder_dark.svg'
}

//light theme
function lightTheme(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textbox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'light Theme';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'img/undraw_conceptual_idea_light.svg'
    image2.src = 'img/undraw_feeling_proud_light.svg'
    image3.src = 'img/undraw_proud_coder_light.svg'
    
}

//to dynamically change the theme
function switchTheme(event){
    if(event.target.checked)  {
        document.documentElement.setAttribute("data-theme", "dark")
        darkTheme();
     }else{
          document.documentElement.setAttribute("data-theme", "light");
          lightTheme();
     }
}

//add an event listener to the toggle switch
toggleSwitch.addEventListener('change',switchTheme);