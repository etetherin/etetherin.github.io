function navAnimate(event) {
		let $a = event.currentTarget;
		let link = ($a.attributes.href.nodeValue);
		event.preventDefault();
		gsap.to(window, {duration: .5, scrollTo: {y: link, x: link, offsetX: window.innerWidth/2, offsetY:window.innerHeight/2}});    
}

//https://greensock.com/docs/v3/Plugins/ScrollToPlugin
const BuildNav = function (
    ) {
    
        const $parent = document.querySelector(".navigation__inner");           // Select the body element
        const $navUL = document.createElement("ul");            // creates the ul element
        $navUL.classList.add('nav-ul')
        $parent.prepend($navUL);                                   // adds the UL to the nav element
        artifacts.forEach(function (value, index) {               // runs one time for each of the elements in the navlist array
            let $li = document.createElement("li");             // creates the li element
            let $a = document.createElement("a");               // creates the anchor element
            $a.setAttribute("href", "#" + value.id);                // sets the href attribute to be the "link" entry from the navlist array
            $a.innerText = value.artifactName;                          // sets the text for the anchor tag to be the "text" entry from the navlist array
						$a.addEventListener('click', navAnimate)
					
            $li.append($a);                                     // adds the anchor element to the li
            $navUL.append($li);                                 // adds the li to the navUL
				});
        // $main.style.left = pos($nav).oRightS;       
    }



var btn = document.querySelector('.test-button');

function navigationMenu() {
  const nav = document.getElementById('nav');
  const content = document.querySelector('.content');
  const arrow = document.querySelector('.test-button svg')
  const navUL = document.querySelector('.nav-ul')
  
  console.log(parseInt(content.style.marginLeft, 10))

  if(parseInt(content.style.marginLeft, 10) < 500) {
    setTimeout(function(){
      gsap.to(navUL, {opacity: 1})
    }, 350)
    content.style.marginLeft = '500px';
  } else {
    setTimeout(function(){
      gsap.to(navUL, {opacity: 0})
    }, 350)
    content.style.marginLeft = '200px';
  }
  
  nav.classList.toggle('active');
  btn.classList.toggle('outline');
  arrow.classList.toggle('flip');
}

btn.addEventListener('click', navigationMenu);