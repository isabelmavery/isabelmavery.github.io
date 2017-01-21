var quo = document.getElementById("quote");

quo.addEventListener("click",function() {
	var newtext = prompt("Hey, want to enter a better quote?");
	// adding in quotation marks
	var q = "\"";
	var array = newtext.split(" - ");
	// account for - 
	if(array.length>1){
	var textwquotes = q+array[0]+q + "-"+array[1];
	}
	else {var textwquotes = q+newtext+q;}
	quo.innerHTML = textwquotes;
});

var mainhead = document.getElementById("title");
mainhead.addEventListener("mouseover",function() {
	mainhead.style.opacity = "0.7";
});

mainhead.addEventListener("mouseout",function() {
	mainhead.style.opacity = "1";
});

