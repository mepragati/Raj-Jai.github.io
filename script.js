function it() {
    alert(" Syllabus :- \n Chapter - 7 to 10 \n Page no= 163");
}

function msc() {
    alert("Syllabus :- \n Chapter - 1 to 12 ");
}

function gk() {
    alert("Syllabus :- \n Chapter - 26 to 48");
}

function sst() {
    alert("Syllabus :- \n History - Chapter - 1,6,8,12,13,14. \n Civics - Chapter - 1 to  5 Except Q&A, 6 to 10 Everthing \n Geography - Chapter - 1 to 4 Except LAQ, 5 to 8 Everything ");
}

function science() {
    alert("Syllabus :- \n Physics - Chapter - 10 to 16 \n Chemistry - Chapter - 4,5,17,18 \n Biology - Chapter - 1,2,6,7,8,9");
}

function hindi() {
    alert("Syllabus :- \n हिंदी - पाठ- 8 to 24 बस व्याकरण <मुख्य पाठ - 15,16,18,19,21,23,24> \n हिंदी व्याकरण- Page no - 131,137,190 का 6-7-8,162,156,भाववाचक संघ्या,संधि,वाक्य-विचार,मुहावरे,वचन भिन्नार्थक,समास,लिंग,वाच्य,काल,क्रिया-विशेसन,किसने-किससे कहा,वाक्य,कवि और लेखक के नाम, तत्षम-तद्भव,उपसर्ग-प्रत्यय,लेख-6,7,8");
}

function maths() {
    alert("Syllabus :- \n Chapter - 1 to 25.");
}

function sanskrit() {
    alert("Syllabus :- \n संस्कृत - पाठ - 12,13,14,15,5 का श्लोक \n संस्कृत व्याकरण -शब्दरूप - फलम्,माता , संधि , संख्यावाची , धातुरूप -ग़म,नम लट और लोट लाकर में ,अभ्यास भी ");
}

function english() {
    alert("Syllabus :- \n Litreture - Unit - 9,10,11,12 Q&A BtL \n M.C.B - Unit - 11 to 15 Q&A BtL \n Gra/W.B/Electra - choose the correct words,Sound of things ,Letter,Story-Writing,error,E-mail,Article,Revision,Direct and Indirect speech.");
}

 function random() {
            document.getElementById("love").innerHTML = (concat);

            if ((n == 1 && h > 9) || (n == 2 && h <= 9)) {
                document.getElementById("tuesday").classList.add("current");
            } else if ((n == 2 && h > 9) || (n == 3 && h <= 9)) {
                document.getElementById("wednesday").classList.add("current");
            } else if ((n == 3 && h > 9) || (n == 4 && h <= 9)) {
                document.getElementById("thursday").classList.add("current");
            } else if ((n == 4 && h > 9) || (n == 5 && h <= 9)) {
                document.getElementById("friday").classList.add("current");
            } else if ((n == 5 && h > 9) || (n == 6 && h <= 9)) {
                document.getElementById("saturday").classList.add("current");
            } else if ((n == 6 && h > 9) || (n == 6 && h <= 23)) {
                document.getElementById("sunday").innerHTML = "Enjoy! tommorow is Sunday.";
            } else if ((n == 0 && h > 9) || (n == 1 && h <= 9)) {
                document.getElementById("monday").classList.add("current");
            } else if ((n == 0 && h >= 0) || (n == 0 && h <= 8)) {
                document.getElementById("sunday").innerHTML = "Enjoy! today is Sunday.";
            }
        }
