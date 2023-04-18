alert('Welcome...');
alert('Please fill out this form:');
var nickname = prompt('What is your nickname');
const height =prompt('What is your height in inches?');
var weight = prompt('What is your weight in kg');


let newheight = Math.floor(height/12);
let newheight2 = height%12;
let newweight =  weight*2.2;

alert('Name: '+nickname+'\nHeight: '+newheight+'\' '+newheight2+ '\"' +'\nWeight: '+newweight+' lbs');

var firstname = prompt('What is your first name?');
var lastname = prompt('What is your last name?');
var year = prompt('What year were you born?');

let newyear = 2023-year;
alert('Hello '+firstname+' '+lastname+"! How does it feel to be "+newyear+" years old?");

var consent = confirm("Do you agree to share your personal information with my site?");

if(consent == true){
    document.write('Nickname: '+nickname);
    document.write('<br>Height: '+newheight+'\' '+newheight2+'\"');
    document.write('<br>Weight: '+newweight+' lbs');

 }
 else{
    document.write("User does not wish to share his/her information");
}