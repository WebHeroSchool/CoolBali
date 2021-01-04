menu.onclick = function myFunction() {
	var x = document.getElementsById("myheader__menu")

	if(x.className === "header__menu") {
		x.className += "responsive";
	} else{
		x.className = "header__menu"
	}
}