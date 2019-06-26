function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

var r= 0;
function calcular(){
	r = document.getElementById("recipient-name2").value;
    bootbox.alert("Su Sueldo es: " +r*50);
}