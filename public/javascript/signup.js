const divflag = document.querySelector(".containAlert");

async function sendflag(){
	//if(divflag.firstElementChild) divflag.removeChild(divflag.firstElementChild);
	const flag = await fetch("/getSignupFlag", {
		method: "POST"
	});
	console.log("What is the flag HERE??  ", flag);
	const res = await flag.json();
	const divName = document.createElement("div");
	if(res.flag){
		return;
		//divName.className = "alert alert-success alert-dismissible fade show";
	}else{
		console.log("FLAG IS HERE  ", res);
		divName.className = "alert alert-danger alert-dismissible fade show";
		/*
        try to add some html directly:
        const temp = document.createElement("div");
        const trytext = "<div class=\"alert alert-success alert-dismissable\" role=\"alert\" id=\"windows\">\n" +
            "    <button class=\"close\" type=\"button\" data-dismiss=\"alert\">×</button>\n" +
            "    \n" +
            "</div>";
        temp.innerHTML = trytext;
         */
	}
	divName.textContent = res.text;
	divName.role = "alert";
	divflag.appendChild(divName);
	await window.setTimeout(function(){
		const divName = document.querySelector(".alert");
		divflag.removeChild(divName);
	}, 2000);
}

function test(){
	document.getElementById("button").addEventListener("click", sendflag);
}
test();