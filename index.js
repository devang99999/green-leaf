function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less"; 
	  moreText.style.display = "inline";
	}
  }
  function myFunction2() {
	var dots = document.getElementById("dots2");
	var moreText = document.getElementById("more2");
	var btnText = document.getElementById("myBtn2");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less"; 
	  moreText.style.display = "inline";
	}
  }
  function myFunction3() {
	  document.getElementById("mn1").classList.toggle("cross1")
	  document.getElementById("mn2").classList.toggle("cross2")
	  document.getElementById("mn3").classList.toggle("cross3")
	  document.getElementById("menu").classList.toggle("menudisp")
  }
