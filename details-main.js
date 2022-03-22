document.getElementById("range-picker").addEventListener("click", function (e) {
	var sizeList = document.getElementById("range-picker").children;
	for (var i = 0; i <= sizeList.length - 1; i++) {
		console.log(sizeList[i].classList);
		if (sizeList[i].classList.contains("active")) {
		sizeList[i].classList.remove("active");
		}
	}
	e.target.classList.add("active");
});

function cong() {
	var a = document.getElementById("sl").value;
	a = Number(a);
	var b = 1;

	var kq = (document.getElementById("sl").value = a + b);
}

function tru() {
	var a = document.getElementById("sl").value;
	a = Number(a);
	var b = 1;
	if (a == "1") {
		var kq = (document.getElementById("sl").value = "1");
	} else {
		var kq = (document.getElementById("sl").value = a - b);
	}
}