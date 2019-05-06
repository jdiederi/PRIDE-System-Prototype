(function () {
	function display(id) {
	    document.getElementById(id).style.display = '';
	}
	function hide(id) {
	    document.getElementById(id).style.display = 'none';
	}
	var frm = document.getElementById('locationButtons');
	var qyes = frm.elements.campusOption[0];
	var qno = frm.elements.campusOption[1];
	qyes.onclick = function () {
		display('onCampusLocations');
	};
	qno.onclick = function () {
		hide('onCampusLocations');
	};
	qno.click();
	qno.onclick();
})();

function sendData(){
		var professorsName = document.getElementById("professorsNameBox").value;
		var courseNumber = document.getElementById("courseNumberBox").value;
		var studentName = document.getElementById("studentsNameBox").value;
		var courseDifficulty = document.getElementById("levelOfDifBox").value;
		
	  if(typeof(Storage)!=="undefined"){
	  localStorage.professorName= professorsName;
	  localStorage.courseNumber = courseNumber;
	  localStorage.studentName = studentName;
	  }
	else{
	  document.getElementById("review1").innerHTML="Sorry, your browser does not support web storage...";
	  }
		}