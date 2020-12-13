// =========== loading
function loadImage(url, element) {
 return new Promise((resolve, reject)  => {
  element.onload = () => resolve(element);
  element.onerror = reject;
  element.src = url;
 })
}

//========== get an element
const ge = function (_elm) {
	let el = document.querySelector(_elm);
	return el;
};
//========== get elements
const gEls = function (_elm) {
	let elementLists = document.querySelectorAll(_elm);
	return elementLists;
};
// ============= returns rectangle position of an object
// const gRct = function (_obj) {
// 	let $obj = null;
// 	if (typeof _obj === "string") {
// 		$obj = document.querySelector(_obj);
// 	} else {
// 		$obj = _obj;
// 	}
// 	domRect = $obj.getBoundingClientRect();
// 	domRect.cx = domRect.x + domRect.width / 2;
// 	domRect.cy = domRect.y + domRect.height / 2;
// 	return domRect;
// };

// ============= returns rectangle position of an object

const gRct = function (_obj) {
	let $obj = null;
	if (typeof _obj === "string") {
		$obj = document.querySelector(_obj);
	} else {
		$obj = _obj;
	}
	domRect = $obj.getBoundingClientRect();
	domRect.cx = domRect.x + domRect.width / 2;
	domRect.cy = domRect.y + domRect.height / 2;
	
	domRect.oLeft = $obj.offsetLeft;
	domRect.oRight = $obj.offsetLeft+domRect.width;
	domRect.oTop = $obj.offsetTop;
	domRect.oBottom = domRect.oTop+domRect.height;

	domRect.ocx = domRect.oTop + domRect.width / 2;
	domRect.ocy = domRect.oLeft + domRect.height / 2;
	
	return domRect;
};

const pos = function (_obj, attach=false) {
	let $obj = null;
	if (typeof _obj === "string") {
		$obj = document.querySelector(_obj);
	} else {
		$obj = _obj;
	}
	domRect = $obj.getBoundingClientRect();
	domRect.cx = domRect.x + domRect.width / 2;
 	domRect.cy = domRect.y + domRect.height / 2;
	domRect.oLeft = $obj.offsetLeft;
	domRect.oLeftS = domRect.oLeft+"px";
	domRect.oTop = $obj.offsetTop;
	domRect.oTopS = domRect.oTop+"px";
	domRect.oBottom = $obj.offsetTop + $obj.offsetHeight;
	domRect.oBottomS = domRect.oBottom+"px";
	domRect.oRight = $obj.offsetLeft + $obj.offsetWidth;
	domRect.oRightS = domRect.oRight+"px";
	domRect.ocx = $obj.offsetLeft + domRect.width / 2;
	domRect.ocxs = domRect.ocx +"px";
	domRect.ocy = $obj.offsetTop + $obj.offsetHeight / 2;
	domRect.ocys = domRect.ocy +"px";
	if(attach){
	$obj.pos = domRect;
	} else {
	return domRect;
	}
};


//========== create element
const ce = function (_tag, _opts = {}) {
	let newElement = document.createElement(_tag);

	if (_opts._append != undefined) {
		let $appendObj;
		if (typeof _opts._append === "string") {
			$appendObj = document.querySelector(_opts._append);
		} else {
			$appendObj = _opts._append;
		}
		$appendObj.append(newElement);
	}
	if (_opts._html != undefined) {
		newElement.innerHTML = _opts._html;
	}
	if (_opts._class != undefined) {
		// can add 1 class attribute as an object, or multiples as an array
		if (Array.isArray(_opts._class)) {
			_opts._class.forEach((className) => {
				newElement.classList.add(className);
			});
		} else {
			newElement.classList.add(_opts._class);
		}
	}
	if (_opts._id != undefined) {
		newElement.id = _opts._id;
	}
	if (_opts._data != undefined) {
		// can add 1 data attribute as an object, or multiples as an array
		if (Array.isArray(_opts._data)) {
			_opts._data.forEach((element) => {
				let data_name = "data-" + element._name;
				newElement.setAttribute(data_name, element._value);
			});
		} else {
			let data_name_1 = "data-" + _opts._data._name;
			newElement.setAttribute(data_name_1, _opts._data._value);
		}
	}
	return newElement;
	/*
	// === options
	 {
		 // append to element, can be a string or selected 
         _append: "body",
         
		 // html to include in new element object;
        _html: "<h1>Bong</h1>",
        
		// can add 1 class attribute as a string, or multiples as an array 
        _class: "test",
        
        _class: ["test", "best"],
        
        _id: "T-dog",
        
		// can add 1 data attribute as an object, or multiples as an array 
		_data: { _name: "test", _value: "test" },
		_data: [{ _name: "test", _value: "test" }],
	}
	*/
};
