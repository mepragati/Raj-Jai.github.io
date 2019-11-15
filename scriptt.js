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
    alert(" Syllabus :- \n Physics :- \n Gravitation\n Chemistry :- \n Chapter 1 - Matter in our surroundig \n Biology :- \n Chapter 1 - Cell \n Chapter 2 - Tissue \n Chapter 3 - Diversity in Living Organism");
}

function sanskrit() {
    alert(" Syllabus :- \n Nhi pata kisi ko pata hai toh bata do");
}

function sst() {
    alert(" Syllabus :- \n Geography :- \n Chapter 1 - Size and Location \n Chapter 2 - Physical Feature of India \n History :- \n Nhi pata kisi ko pata hai toh bata do \n Civics :- \n Nhi pata kisi ko pata hai toh bata do");
}
var myArray = ['Joy', 'Happiness', 'Peace', 'Hope', 'Javascript', 'Html', 'Css'];
var rand = Math.floor(Math.random() * myArray.length);
var concat = myArray[rand];

function random() {
    document.getElementById("love").innerHTML = (concat);
}
