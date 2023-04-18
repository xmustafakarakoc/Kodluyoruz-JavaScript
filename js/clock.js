let myName = prompt("Adınızı giriniz"); //User was asked for a name.
let name = document.querySelector("#myName"); //The location of the name is assigned to the variable.

myName = myName.charAt(0).toUpperCase() + myName.slice(1);  //Capitalization of the first letter of the name

name.innerHTML = myName; //The Html name of the location assigned to the variable has been changed.

//Date Function**********************************************

function showTime() {
    let myClock = document.querySelector("#myClock"); //To show on the homepage;
    let now = new Date(); //assigning a date property to a variable
    let day = now.getDate(); 
    let month = now.getMonth() +1; //The +1 converts the month from digital (0-11) to normal.
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`; //Template Literals

    myClock.innerHTML = time //changing variable name via html

    setTimeout(showTime, 1000); //increasing the second by 1

}
 showTime(); //starting function

 