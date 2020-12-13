
//complete ----------------------- make the '200' be the variable number of lines
//complete ----------------------- make distance be part of my scaling system
//complete change distance between lines based on the width of the div.lines divided by the amount of lines you want.


//complete make the data structure take an input to select an image for the object generated

//todo (added 11/12) get the size of body to scale with the tallest item

//todo complete design on the pop up
    //complete Fix the bug of the pop up showing up all the way at the start of the timeline
    //complete(11/17) disable scrolling on the body while infoscreen is open
    //complete Make the x button work on the pop up
    //complete populate the pop up with information from the data structure
        //complete(11/05) This needs to be a function that loops over a list of text strings and puts them in as bullets
        //complete(11/05) make stuff that populates the video given a video file title.
        //complete (11/05)  populate the map svg given its location
    //complete some styling issues with the bottom half
      //complete add a subheader to the list
      //complete center the list 


//completed 11/06 (added 11/05) get some actual data structure for a 5 artifacts
  //completed get some actual sized pngs of all five objects
  //todo make at least one animation for at least 1 object
  //completed fill in all 5 artifacts interesting facts
  //completed fill in all 5 objects tags correctly


//completed 11/11 (added 11/05) Add a way to control objects y position
 
//todo Draw lines between the objects
  //complete Connect them if they were all on the same y axis
  //complete connect them with straight lines on two different y levels
  //complete connect them with 90 turns half way between two objects on seperate y levels.
  //todo this isnt completed just yet there is some tweaking to be done
     //! I am actually really confused on how to make them connect in a way that i intended. I could make them conenct the dummy way, but they connect in certain ways to convey information about them, like are there two things required? Are there two things being invented simultaneusly from one other invention? Its all encoded in how they connect :( so how they connect is important.


//todo(added 11/05) increase or decrease each age sections width based on how many objects are in them and the years represented inside it
  //? I could potentially put a "start: 'true'" and "end:'true'" in the data set for the starting and ending ones, with a for each and loop through, or just hard code the first and last item in each age.


//todo (added 11/05) Get zoom functional with - and + keys
  //todo scale the size of discovernodes based on "zoom level"
  //todo Scale the size of the headers based on "zoom level"
  //todo decrese or increase the width of the entire timeline based on "zoom level"
  //todo Scale the y positions of each one acourding to zoom


  
  
//  https://en.wikipedia.org/wiki/Timeline_of_historic_inventions
//  https://en.wikipedia.org/wiki/Outline_of_prehistoric_technology








//todo make the year cards (the things that display a year, like a rectangle with a triangle on top)
//? this should be another serries of functions that take a data structure
//todo Make the reference events
//? this should be a nother serries of functions that take a data structure and generates these items where they should go




//* -------------------------------------------------------  INITIALLIZES FUNCTIONS AT DOCUMENT LOAD ---------------------------------------------------
//*-----------------------------------------------------------------------------------------------------------------------------------------------------

var callback = function () {
  TimelineWidth();                              //Set the timeline width
  lineInitial();
  //initialize lines
  // createArtifacts(artifacts);
  // connectArtifacts();
  // change_lines(yearsPerPixel);
  // createInfoScreen(0);
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
};





//! Update boilerplate with: util > disable scroll