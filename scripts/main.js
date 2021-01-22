// const myHeading = document.querySelector('h1'); //querySelector function is used to grab a reference to our heading and then store it in a variable called myHeading; similar to css selectors when you want to do something with an element, you need to select it first
// myHeading.textContent = 'Hello World!'; //this code set the value of the myHeading variable's textContent property(which represents the content of the heading) to Hello World!

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// Same as above
// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {alert ('Ouch! Stop poking me!')};

let myImage = document.querySelector('img'); // store reference to <img> in the myImage variable

myImage.onclick = function() {                                // myImage variable's onclick event handler property equal to a function with no name(an "anonymous" function). Every time this element is clicked
    let mySrc = myImage.getAttribute('src');                  // the code retrieves the value of the image's src attribute
    if(mySrc === 'images/chakra1.jpg') {                      // The code uses a conditional to check if the src value is equal to the path of the original image:
        myImage.setAttribute('src', 'images/chakra.jpeg');    // If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element
    } else {                                                  
        myImage.setAttribute('src', 'images/chakra1.jpg');    // If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() {                                      // setUserName() function contains a prompt() function which display a dialog box similar to alert()
//     let myName = prompt('Please enter your name.');           // but prompt() asking the user to enter data and storing it in a variable after the users click OK
//     localStorage.setItem('name', myName);                     // the code calls an API(localStorage) which allows to store data in the browser and retrieve it later. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains user's name
//     myHeading.textContent = 'Welcome to my world ' + myName;        // finally we set the textContent of the heading to a string plus user's newly stored name
// }

if (!localStorage.getItem('name')) {                          // this line of this block uses negation operator(logical not === !) to check whether name data exists. If not
    setUserName();                                            // setUserName() function runs to create it
} else {
    let storedName = localStorage.getItem('name');            // If it exists( user set a user name during previous visit) we retrieve the stored name using getItem() and
    myHeading.textContent = 'You are cool, ' + storedName;    // set the textContent of the heading to a string plus user's name as we did inside setUserName()
}

myButton.onclick = function() {
    setUserName();
}

// When you cancel the prompt you end up with string plus null because value is set to null when cancelled(Null special value in JS refers to absence of value)
// If you click OK without writing anything in the prompt no name or null value is shown. To avoid this below code

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {                                            // If myName has no value run setUserName() again from the start 
        setUserName();
    } else {
        localStorage.setItem('name', myName);                   
        myHeading.textContent = 'Welcome to my world ' + myName;
    }
}