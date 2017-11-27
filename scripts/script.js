
function fetch_status(server, map) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse( this.responseText );
			
			Object.keys(obj).forEach(function (key) {
				
				if ( !(key in map) ) {
					map[key] = key;
				}
				
				var e = document.getElementById(server + "-" + map[key]);
				if (e) {
					while (e.firstChild) {
						e.removeChild(e.firstChild);
					}
					
					var value = obj[key];
					if (obj[key] == true) {
						value = "Yes";
					}
					if (obj[key] == false){
						value = "No";
					}
					
					if (key == "last_checked_at") {
						var d = parseInt((new Date()).getTime() / 1000) - obj[key];
						value = "(last checked: " + d + "s ago)";
					}
					
					var t = document.createTextNode(value);
					
					if (key == "is_running") {
						var icon = document.createElement("i");
						if (obj[key]) {
							icon.className = "fa fa-check";
							e.className += " green bold";
						} else {
							icon.className = "fa fa-close";
							e.className += " red bold";
						}
						e.className += " a-rotation a-ease-in";
						e.appendChild(icon);
					}
					
					e.appendChild(t);
				}
			});
		}
	}

	xhr.open("GET", "/check/status/" + server + ".php?" + Math.random());
	xhr.send(null);
}

window.onload = function() {
	fetch_status("tskserver", {
		is_running: "is-running",
		last_checked_at: "last-checked-at",
	});
	fetch_status("skyblock", {
		is_running: "is-running",
		last_checked_at: "last-checked-at",
	});
}
