const divflag = document.querySelector(".containAlert");

async function sendflag(){
	const nm = document.getElementsByName("userName")[0].value;
	const pw1 = document.getElementsByName("passWord")[0].value;
	const pw2 = document.getElementsByName("passWord2")[0].value;
	const userinfo = {
		userName: nm,
		passWord: pw1,
		passWord2: pw2
	};
	if(nm === ""){
		const divName = document.createElement("div");
		divName.textContent = "Username is Empty";
		divName.className = "alert alert-danger alert-dismissible fade show";
		divName.role = "alert";
		divflag.appendChild(divName);
		window.setTimeout(function(){
			divflag.removeChild(divName);
		}, 2000);
	}else if(pw1 === "" || pw2 === ""){
		const divName = document.createElement("div");
		divName.textContent = "Password is empty";
		divName.className = "alert alert-danger alert-dismissible fade show";
		divName.role = "alert";
		divflag.appendChild(divName);
		window.setTimeout(function(){
			divflag.removeChild(divName);
		}, 2000);
	}
	else if(pw1 !== pw2){
		const divName = document.createElement("div");
		divName.textContent = "Passwords are not same";
		divName.className = "alert alert-danger alert-dismissible fade show";
		divName.role = "alert";
		divflag.appendChild(divName);
		window.setTimeout(function(){
			divflag.removeChild(divName);
		}, 2000);
	} else{
		const flag = await fetch("/test/signup", {
			method: "POST",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userinfo)
		});
		console.log("Have I been here????");
		console.log("What is the flag HERE??  ", flag);
		const res = await flag.json();
		const divName = document.createElement("div");
		if(res.flag){
			divName.className = "alert alert-success alert-dismissible fade show";
			//divName.textContent = "Sign up successful";
		}else{
			console.log("FLAG IS HERE  ", res);
			divName.className = "alert alert-danger alert-dismissible fade show";
			//divName.textContent = "User name is already taken";
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
		window.setTimeout(function(){
			divflag.removeChild(divName);
		}, 2000);
		if(res.flag) window.location.href = "/sign_in.html";
	}
}

function test(){
	const btn = document.getElementById("button");
	if(btn == null){
		console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwhyyyyyyyyyyyyyyyyyyyyyyyyy");
	}
	btn.addEventListener("click", sendflag);
}
test();