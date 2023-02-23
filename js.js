const fnAbout = ()=> {
	about.style.display ="block";
	about.style.animation = "0.5s ease-in-out cardsh";
	experience.style.display ="none";
	education.style.display ="none";
	contact.style.display ="none";
	btnAbout.style.background ="#336677";
	btnExp.style.background ="#3366aa";
	btnEdu.style.background ="#3366aa";
	btnCont.style.background ="#3366aa"
}

const fnExp = ()=> {
	about.style.display ="none";
	experience.style.display ="block";
	experience.style.animation = "0.5s ease-in-out cardsh";
	education.style.display ="none";
	contact.style.display ="none";
	btnAbout.style.background ="#3366aa";
	btnExp.style.background ="#336677";
	btnEdu.style.background ="#3366aa";
	btnCont.style.background ="#3366aa";
}

const fnEdu = ()=> {
	about.style.display ="none";
	experience.style.display ="none";
	education.style.display ="block";
	education.style.animation = "0.5s ease-in-out cardsh";
	contact.style.display ="none";
	btnAbout.style.background ="#3366aa";
	btnExp.style.background ="#3366aa";
	btnEdu.style.background ="#336677";
	btnCont.style.background ="#3366aa";

}

const fncont = ()=> {
	about.style.display ="none";
	experience.style.display ="none";
	education.style.display ="none";
	contact.style.display ="block";
	contact.style.animation = "0.5s ease-in-out cardsh";
	btnAbout.style.background ="#3366aa";
	btnExp.style.background ="#3366aa";
	btnEdu.style.background ="#3366aa";
	btnCont.style.background ="#336677";
}



document.getElementById("btnAbout").onclick = fnAbout;
document.getElementById("btnExp").onclick = fnExp;
document.getElementById("btnEdu").onclick = fnEdu;
document.getElementById("btnCont").onclick = fncont;




