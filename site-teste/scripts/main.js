
const myImage = document.querySelector("img");

myImage.onclick = () =>{
	const mySrc = myImage.getAttribute("src");
	
	if (mySrc === "imagens/budogue.jpg"){	
		myImage.setAttribute("src","imagens/budogue2.jpg");
		myImage.setAttribute("width","150");
		
		
	}else{
		myImage.setAttribute("src","imagens/budogue.jpg");
		myImage.setAttribute("width","default");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName(){
	const myName = prompt("por favor digite seu  nome");
	
	if (!myName){
		setUserName();
	}else{
		localStorage.setItem("name",myName);
		myHeading.textContent = 'Bem vindo ' + myName;
	}
}


if (!localStorage.getItem("name")){
	setUserName();
	
}else{
	const Name = localStorage.getItem("name");
	myHeading.textContent = 'Bem vindo ' + Name;
	
}



myButton.onclick = () =>{
	setUserName();
}
