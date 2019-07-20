function computer() {
    alert(" Syllabus :- \n Chapter - 1 to 4");
}
function english(){
    alert("Syllabus :- \n Beehive :- Ch 1 to 3 All Q&A from Eng+ and Beehive \n Poem :- The Road Not Taken,Wind,Rain On The Roof. \n Moments :- Ch :- 1 to 3 Q&A from Eng+ and Moment. \n Writing :- Short Story,Diary Entry,Articles,Coversation,Write few lines on the topic. \n Grammar :- Sentence and part of speech.");
}
function maths() {
    alert(" Syllabus :- \n NCERT \n Chapter:- 1 - Number System \n Chapter:- 2 - Polynomials \n Chapter:- 3 - Coordinate Geometry \n Chapter:- 4 - Linear Equation in 2 Variable \n Chapter:- 12 - Heron's Formula.");
}

function science() {
    alert(" Syllabus :- \n Physics :- \n Chapter- 1 - Motion \n Chapter - 2 - Force and Laws of Motions \n Chemistry :- \n Chapter 1 - Matter in our surroundig \n Biology :- \n Chapter 1 - Cell \n Chapter 2 - Tissue \n Chapter 3 - Diversity in Living Organism");
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
