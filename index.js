//======================================================
//REFERENCE MENU ELEMENTS
//======================================================
var resumeOption = document.getElementById("resumeMenu");
var aboutOption = document.getElementById("aboutMenu");
var contactOption = document.getElementById("contactMenu");

// store in array 
var menuLinks = [resumeOption, aboutOption, contactOption];

//focus icons 
var resumeIcon = document.getElementById("resumeFocus");
var aboutIcon = document.getElementById("aboutFocus");
var contactIcon = document.getElementById("contactFocus");

var menuIcons = [resumeIcon, aboutIcon, contactIcon]
var focusImage = document.createElement("img");
var focusIndex = 0; // index for menu navigation

var navigateSound = new Audio("sounds/navigateSound.wav"); // sound - plays on arrow input
var openSound = new Audio("sounds/openSound.wav"); // sound - plays on selection

focusImage.width = 32;//adjust image size
focusImage.src = "images/Pointer2GBOY.gif"; // assign image from files


//========================================================
// SET LOAD VALUES FOR MENU LINKS - and focus parameters
//========================================================

menuIcons[focusIndex].appendChild(focusImage)

menuLinks[0].innerHTML = "RESUME"
menuLinks[1].innerHTML = "ABOUT";
menuLinks[2].innerHTML = "CONTACT";


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
        openSound.play();
        menuLinks[focusIndex].click();
    }

    //press left
    if (event.keyCode == '37') {
        //limit index
        if(focusIndex >0){
            focusIndex--;
        }else{
            focusIndex= 0;
        }
        navigateSound.play();
        menuLinks[focusIndex].focus();
        menuIcons[focusIndex].appendChild(focusImage);
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
        menuIcons[focusIndex].appendChild(focusImage);
    }
}

function loadHome(){
    var main = document.getElementById("content");
    main.innerHTML = '<h1 class="header_title">FELIPE GOMEZ VILLALOBOS<br><span>Computer Science Student<span></h1>';
}

function loadResume( ){
    focusIndex =0;
    var main = document.getElementById("content");
    main.innerHTML = resumeHTML;
    
    var header = document.getElementById("header");
    header.innerHTML = "RESUME";

}

function loadAbout(){
    focusIndex =1;
    var main = document.getElementById("content");
    main.innerHTML = aboutHTML ;

    var header = document.getElementById("header");
    header.innerHTML = "ABOUT";
}

function loadContact(){
    focusIndex=2;
    var main = document.getElementById("content");
    main.innerHTML = contactHTML;
    
    var header = document.getElementById("header");
    header.innerHTML = "CONTACT";
}

var menuHTML= 
                '<div id="navContainer">'+
                '<table id="navMenu">'+
               '<tr>'+
                    '<td id="resumeFocus"></td>'+
                    '<td onclick="loadResume()" id="resumeMenu"></td>'+
                    '<td id="aboutFocus"></td>'+
                    '<td onclick="loadAbout()" id="aboutMenu"></td>'+
                    '<td id="contactFocus"></td>'+
                    '<td onclick="loadContact()" id="contactMenu"></td>'+
               ' </tr>'+
                '</table>'+
                '</div>';

var aboutHTML = '<h2 id="header">HEY</h2>'+
                '<p > <span><strong>INTRODUCTION </strong></span> - My name is Felipe Gomez'+
                ' Villalobos, I attend Santiago Canyon College in Orange, California. I am'+
                'pursuing a degree in Computer Science, and hope to transfer to a'+
                'four-year university next fall (2022).'+
                '</p>'+
                '<p>'+
                'My current goal is to develop skills and habits that will increase'+
               ' internship opportunities.'+
               ' </p>'+
                '<p>'+
                'I spend the majority of my time studying data structures, making simple'+
                'command console games in C++, Python and Java as well as making 2D games'+
               ' using Unity Game Engine. I am also in the process of learning HTML,'+
                'JavaScript, CSS and making websites for myself and friends.'+
               ' </p>';

var resumeHTML =
                '<h2 id="header">HEY</h2>'+
                '<table>'+
                ' <tr>'+
                '<td><strong> Santiago Canyon College</strong></td>'+
                '<td>GPA: 3.9 - Expected graduation spring 2022</td>'+
                '</tr>'+
                '<tr>'+
                '<td><strong>Transfer to 4-year college</strong></td>'+
                '<td>Start date - Fall 2022</td>'+
                '</tr>'+
                '</table>'+
                '<h3>Skills</h3>'+
                '<ul>'+
                '<li>Proficient in C++, Java, Python</li>'+
                '<li>Experience with HTML, Javascript, Java, XML</li>'+
                '<li>GitHub</li>'+
                '<li>Experience with Unity Game Engine - 2D Dungeon Crawler</li>'+
                '<li>Proficient Artist - Game Art</li>'+
                '</ul>'+
                '<h3>Course Work</h3>'+
                '<ul>'+
                '<li>Data Structures and Algorithms</li>'+
                '<li>Computer Architecture - x86 MASM (Irvine)</li>'+
                '<li>EA internship</li>'+
                '<li>Google Kotlin Certificate</li>'+
                '</ul>';

var contactHTML ='<h2 id="header">HEY</h2><p> Please email Felipe@FGomez.Dev with any questions.</p>';
