//will redirect the User to level two 
function level2(success) {

	location.replace("level2.html")

}

//will redirect the User to level three
function level3(success) {

	location.replace("level3.html")

};

//will redirect the User to the home page
function theEnd(success) {

	alert(" Congratulations, you finished the game!! We hope to see you again soon.")

    location.replace("index.html")
    
};

//will redirect the User to one of my favorite YouTube videos, that will hopefully make Them smile
function fail(fail) {

	alert(" Oh no, I hope this will make you happy.")

    location.replace("https://www.youtube.com/watch?v=NmPQNvbXyic")
    
};