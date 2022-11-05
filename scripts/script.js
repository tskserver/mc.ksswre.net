function fetch_status(callback) {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		let obj = null;
		if (this.readyState == 4 && this.status == 200) {
			obj = JSON.parse( this.responseText );
		}
		if (callback) {
			callback(obj);
		}
	}
	xhr.open("GET", "/api/status");
	xhr.send(null);
}

function clear_child_element(e){
	// clear inner element: only <i> (loading icon) is listed
	while (e.firstChild) {
		e.removeChild(e.firstChild);
	}
}

function redraw_text(servername, key, value){
	let e = document.getElementById(servername + "-" + key);
	clear_child_element(e);
	let t = document.createTextNode(value);
	e.appendChild(t);
}

function redraw_is_running(servername, key, value){
	let is_online = (value == 'online') ? true : false;
	let e = document.getElementById(servername + "-" + key);
	clear_child_element(e);
	let elm = document.createElement("span");
	let icon = document.createElement("i");
	let text;
	if (is_online) {
		icon.className = "fa fa-check";
		elm.className += " green bold";
		text = 'Yes';
	} else {
		icon.className = "fa fa-close";
		elm.className += " red bold";
		text = 'No';
	}
	elm.className += " a-rotation a-ease-in";
	elm.appendChild(icon);
	elm.appendChild(document.createTextNode(text));
	e.appendChild(elm);
	return elm;
}

window.onload = function() {
	fetch_status(function(response){
		if (response == null) { return; }
		Object.keys(response).forEach(function (servername) {
			let info = response[servername];
			redraw_is_running(servername, 'is-running', info['status']);
			redraw_text(servername, 'version', info['body']['version']['name']);
			let str_status = "" + info['body']['players']['online'] + "/" + info['body']['players']['max'];
			redraw_text(servername, 'status', str_status);
			let str_last_checked_at = '(checked at: ' + info['last_checked_at'] + ')';
			redraw_text(servername, 'last-checked-at', str_last_checked_at);
		});
	})
}
