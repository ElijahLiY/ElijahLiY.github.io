// JavaScript Document
	function showtab(v){
	var divs = document.getElementsByClassName("tab_css");
        for(var i = 0; i < divs.length; i++) {
          var divv = divs[i];
          if(divv == document.getElementById("tab" + v + "_content")) {
            divv.style.display = "block";
          } else {
            divv.style.display = "none";
          }
		}
	}