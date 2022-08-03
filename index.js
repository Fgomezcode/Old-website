
var contentHTML = document.getElementById("contentHTML");
var contentHeader = document.getElementById("contentHeader");

//menu links
var resumeOption = document.getElementById("resumeMenu");
var aboutOption = document.getElementById("aboutMenu");
var contactOption = document.getElementById("contactMenu");
var projectOption = document.getElementById("projectMenu");

// store in array 
var menuLinks = [resumeOption, aboutOption, contactOption, projectOption];

//focus icons 
var resumeIcon = document.getElementById("resumeFocus");
var aboutIcon = document.getElementById("aboutFocus");
var contactIcon = document.getElementById("contactFocus");
var projectIcon = document.getElementById("projectFocus");

//store img locations in array
var menuIcons = [resumeIcon, aboutIcon, contactIcon, projectIcon];

var focusIndex = 0; // index for menu navigation

var navigateSound = new Audio("sounds/navigateSound.wav"); // sound - plays on arrow input
var openSound = new Audio("sounds/8-bit-kit-whoop.wav"); // sound - plays on selection

var menuHTML= ` <div id="navContainer">
                <table id="navMenu">
                <tr>
                <td id="resumeFocus"></td>'+
                <td onclick="loadResume()" id="resumeMenu"></td>
                <td id="aboutFocus"></td>
                <td onclick="loadAbout()" id="aboutMenu"></td>
                <td id="contactFocus"></td>
                <td onclick="loadContact()" id="contactMenu"></td>
                <td id="projectFocus"></td>
                <td onclick="loadProject()" id="projectMenu"></td>
                </tr>
                </table>
                </div>`;

var aboutHTML = `<p >My name is Felipe Gomez'+
                Villalobos, I currently attend UC Irvine in California. I am
                pursuing a degree in Computer Science, and expect to complete my studies Winter 2025
                </p>
                <p>
                My current goals are to develop skills and habits that will allow me to pursue interships and job opportunities this comming Summer. 
                As well as maintain a competetive GPA and graduate in a timely manner.
                </p>
                <p>
                I spend the majority of my time studying data structures, making simple 
                games using Unity Game Engine and Unreal Engine.'+
                I also enjoy doing frontend web design for friends and family in my spare time.
                </p>`;

var resumeHTML =
                `<table>
                 <tr>
                 <td><strong>Email: </strong></td>
                 <td>Felipe@FGomez.Dev</td>
                 </tr>
                 <tr><td></td></tr>
                 </table>

                 <table>
                 <tr>
                 <td><strong>UC Irvine </strong></td>
                 <td>B.S. Computer Science - Expected Graduation 2025</td>
                 </tr>
                 <tr>
                 <td><strong> Santiago Canyon College</strong></td>
                 <td>A.A. Lib. Arts Math 2020-2022</td>
                 <td></td>
                 </tr>
                 </table>

                 <h3>Technical Skills</h3>
                 <ul><strong>LANGUAGES</strong>
                 <li>C++ | Python | Java | HTML CSS</li>
                 </ul>
                 <ul><strong>TOOLS</strong>
                 <li>GitHub | Unity | Unreal | Aseprite</li>
                 </ul>

                 <h3>Course Work</h3>
                 <ul>
                 <li>Data Structures and Algorithms</li>
                 <li>Computer Architecture - x86 MASM (Irvine)</li>
                 <li>EA internship</li>
                 <li>Google Kotlin Certificate</li>
                 </ul>`;


var contactHTML = '<p><center>Please email Felipe@FGomez.Dev with any questions.</center> </p>';
var projectHTML = `<ul>
                    <li><a href="Projects//Bladesmithing//smithing.html" target="blank"> BLADESMITHING</a></li>
                   </ul>`


function loadResume(){
    contentHeader.innerHTML = "RESUME";
    contentHTML.innerHTML = resumeHTML;
    openSound.play();
    focusIndex =0;  //update the index so that the user can click or use arrows
    showIcon(focusIndex);
    document.getElementById("content").scrollTo(0,0);
    document.getElementById("homeImage").hidden =true;
}

function loadAbout(){
    contentHeader.innerHTML = "ABOUT";
    contentHTML.innerHTML = aboutHTML;
    openSound.play();
    focusIndex =1; //update the index so that the user can click or use arrows
    showIcon(focusIndex);
    document.getElementById("content").scrollTo(0,0);
    document.getElementById("homeImage").hidden =true;

}

function loadContact(){
    contentHeader.innerHTML = "CONTACT";
    contentHTML.innerHTML = contactHTML;
    openSound.play();
    focusIndex = 2;  //update the index so that the user can click or use arrows
    showIcon(focusIndex);
    document.getElementById("content").scrollTo(0,0);
    document.getElementById("homeImage").hidden =true;
}


function loadProject(){
    contentHeader.innerHTML = "PROJECTS";
    contentHTML.innerHTML = projectHTML;
    openSound.play();
    focusIndex = 3;
    showIcon(focusIndex);
    document.getElementById("content").scrollTo(0,0);
    document.getElementById("homeImage").hidden =true;
}

function loadHome(){
    contentHeader.innerHTML = '';
    contentHTML.innerHTML = "";
    openSound.play();
    focusIndex = 0; //update the index so that the user can click or use arrows
    showIcon(0);
    document.getElementById("content").scrollTo(0,0);
    document.getElementById("homeImage").hidden =false;

}


function navRight(){
    if(focusIndex < menuLinks.length -1){
        focusIndex++;
    }else{
        focusIndex = menuLinks.length -1;
    }
    navigateSound.play();
    menuLinks[focusIndex].focus();
    showIcon(focusIndex);
}

function navLeft(){
     if(focusIndex > 0){
        focusIndex--;
    }else{
        focusIndex= 0;
    }
    navigateSound.play();
    menuLinks[focusIndex].focus();
    showIcon(focusIndex);
}


function navUp(){
    document.getElementById("content").scrollBy(0,-19);
}

function navDown(){
    document.getElementById("content").scrollBy(0,19);
}

function pressA(){
    menuLinks[focusIndex].click();
    openSound.play();
}

function pressB(){
    loadHome();
    openSound.play();
}
onLoad();

// Navigate the menu, check user input - up and down arrows to move and enter to call onClick and load html content
document.onkeydown = checkInput;
function checkInput(event) {

    event = event || window.event;
    if(event.keyCode =='38'){
        document.getElementById("content").scrollBy(0,-19);
        console.log("worked");
    }else if(event.keyCode =='40'){
        document.getElementById("content").scrollBy(0,19);
        console.log("worked");
    }
    //press escape
    if(event.keyCode == '27'){
       loadHome();
       openSound.play();
    }
    //press enter
    if(event.keyCode == '13'){
       
        menuLinks[focusIndex].click();
    }

    //press left
    if (event.keyCode == '37') {
        //limit index
        if(focusIndex > 0){
            focusIndex--;
        }else{
            focusIndex = 0;
        }
        navigateSound.play();
        menuLinks[focusIndex].focus();
        showIcon(focusIndex);
    }
    //press right
    else if (event.keyCode == '39') {
        //limit index
        if(focusIndex < menuLinks.length -1){
            focusIndex++;
        }else{
            focusIndex = menuLinks.length -1;
        }
        navigateSound.play();
        menuLinks[focusIndex].focus();
        showIcon(focusIndex);
    }
}


function showIcon(index){
    for(let i = 0; i < menuLinks.length; i++){
        menuIcons[i].src = "images/PointerStill_Blank.png";
    }
    menuIcons[index].src= "images/PointerStill.png";
}

function onLoad(){
    document.getElementById("navMenu").focus();
    showIcon(0);
}