function computer() {
    alert(" Syllabus :- \n Chapter - MS Word. ");
}

function english() {
    alert("Syllabus :- \n Beehive :- Ch 6 & 7 All Q&A from Eng+ and Beehive \n Poem :- No Men Are Foreign,The Duck and the Kangaroo. \n Moments :- Ch :- 6 & 7 Q&A from Eng+ and Moment. \n Writing :- Complete the story,Diary Entry,Articles, Conversation,Description. \n Grammar :- Error,Jumbled word..");
}

function maths() {
    alert(" Syllabus :- \n Quadrilateral, Triangle and Congruence,Volume and Surface Area.");
}

function science() {
    alert(" Syllabus :- \n Physics :- \n Chapter 3:- Gravitation \n Chapter 4:- Work and Energy \n Chemistry :- \n Chapter 1 - Matter in our surrounding \n Chapter 2:- Is Matter Around Us Pure? \n Biology :- \n Chapter Last- Why do we fall ill? ");
}

function sanskrit() {
    alert(" Syllabus :- \n Nhi pata kisi ko pata hai toh bata do");
}

function sst() {
    alert(" Syllabus :- \n Geography :- \n Nhi pata kisi ko pata hai toh bata do \n History :- \n Nhi pata kisi ko pata hai toh bata do \n Civics :- \n Nhi pata kisi ko pata hai toh bata do \n Economics:- \n Sayad POVERTY hoga ");
}
var myArray = ['Joy', 'Happiness', 'Peace', 'Hope', 'Javascript', 'Html', 'Css'];
var rand = Math.floor(Math.random() * myArray.length);
var concat = myArray[rand];

function random() {
    document.getElementById("love").innerHTML = (concat);
}
