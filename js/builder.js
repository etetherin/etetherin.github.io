//* -----------------------------------  A SERIES OF FUNCTIONS THAT BUILD AND CONROL THE ELEMENTS IN THE DOM -------------------------------------------
//*-----------------------------------------------------------------------------------------------------------------------------------------------------


////                                                 Draws the Lines that make up the timeline in the DOM
//! runs at initial




let line_contain        //@ initialize line_contain so that its global
let line_sym            //@ initialize line_sym so that its global
let line_array = [];    //@ initialize line_array so that its global



//? ------------------ Function that sets up the initial state of lines. This entails creating all elements needed to change them later.
function lineInitial() {

  line_contain = SVG().addTo(".lines").size("100%", "100%");        //@ Draws an SVG container inside of .lines and sets its size equal to it
  line_sym = SVG('#symbol-container').symbol();           //@ creates the <symbol></symbol> tags and puts them inside of #symbol-contianer
  line_sym.line(1, 0, 1, "100%").stroke({ width: 2, color: "rgba(255,255,255,1)", dasharray: "1, 6" }); //@ creates a <line> element inside of the newly created symbol, then gives it some styling
  pxBetweenEachLine = timelineWidthPixels/numberOfLines;


  for (i = 0; i < numberOfLines; i++) { 
      let x_pos = pxBetweenEachLine * i; //@ calculates how far each line should be from left side
      let line = line_contain.use(line_sym).move(x_pos, 0); //@ actually renders the a line and puts it in the line_contain
      line_array.push(line);       //@ adds each line crated to an array
  }
  document.querySelector('.lines')
}

////                                                                                          Set the TimeLine Width and height in the DOM
//! runs at initial
// ? Function that sets the width of the timeline. To be ran at the start of loading the page


function TimelineWidth() {    
  let $content = ge('.content');
  let $main = ge('main');                           // Grabs The DOM element 'main'
  $main.style.width = timelineWidthPixels + 'px';                      // sets the width on main
  $content.style.marginLeft = 200 + 'px';
  $connectionLines = ge('.connectionLines');
  $connectionLines.style.width = timelineWidthPixels+ 'px';
  let $lines = ge('.lines');                        // Grabs the Dom element '.lines'
  $lines.style.width = timelineWidthPixels + 'px';                     // sets the width on lines,
};



////_____________________________________________________________________________________Create each section header

agesArray.forEach(function(element){
    
  let yearSpan = Math.abs(element.start) - Math.abs(element.end);
  yearSpan = Math.abs(yearSpan);
  // console.log(yearSpan)
  let myWidth = yearSpan/yearsPerPixel

  const html = [
      {
          parent: 'main',
          tag: 'section',
          class: element.age + '-age-section', //? this has to change
          children: [
              {
                  tag: 'header',
                  children: [
                      {
                          tag: 'h1',
                          text: element.age + ' AGE',
                          // svg: 'triangle',
                          // class: 'arrow'
                      }
                  ]

              }
          ]
      }
  ]

  CreateHTML(html);

  let theSection = ge('.' + element.age + '-age-section');
  theSection.style.width = myWidth + "px";
})

//* THIS HANDLES FIGURING THE HEIGHT THE BODY SHOULD BE




//* THIS STUFF HANDLES CHANGING THE TIMELINE WHEN STUFF HAPPENS



////                                                 Moves lines given a new distance (and animates them!)

//? loop through the lines to move them one at a time.

const change_lines = (newYearsPerPixel) => {
  newYearsPerPixel;

	line_array.forEach((element, index) => {
		let x_pos_moved = newYearsPerPixel * index;
		element.animate(1000, { ease: "<>" }).move(x_pos_moved, 0);
	});
};


