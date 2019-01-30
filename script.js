
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

// date - calculer l'age
document.querySelector("#btn").addEventListener("click", () => {
	var birthday = document.getElementById("birthdate").value;
	
	
	var year = birthday.substr(0,4);
	var month = birthday.substr(5,2);
	var day = birthday.substr(8,2);
	
	
	//date d'ajourd'hui
	var today = new Date();
	//date d'aujourd'hui découpé
	var todayday = today.getDate();
	var todaymonth = today.getMonth()+1;
	var todayyear = today.getFullYear();

	var diffage = todayyear - year

	var monthBirthday = todaymonth - month;
	var dayBirthday = todayday - day;
	
	if(monthBirthday <0 ){
		diffage = diffage-1
	}

	document.querySelector("#age").innerHTML = 	diffage + " years "; 

});

console.log("Hey look in your browser console. It works!");
