


document.getElementById("button").addEventListener("click",()=>{

let nameValue = document.getElementById("name").value;
let yearValue = document.getElementById("year").value;

	
	if(nameValue!='' && yearValue!=''){
                 document.getElementById("url").innerHTML=`
                   https://localhost:8080/?name=${nameValue}&year=${yearValue}`
	}
	else if(nameValue!=''){
		 document.getElementById("url").innerHTML=`
                   https://localhost:8080/?name=${nameValue}`
	}
	else if(yearValue!=''){
		 document.getElementById("url").innerHTML=`
                   https://localhost:8080/?year=${yearValue}`
	}
	
	
});