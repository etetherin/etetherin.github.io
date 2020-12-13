////_________________________________________________________________This function connects all of the artifacts


//! This isnt completed yet!!!!!!!!!!!!!!!!

function connectArtifacts() {


    connectLinesContain = SVG().addTo(".connectionLines").size(timelineWidthPixels+"px", "100%");        //@ Draws an SVG container inside of .lines and sets its size equal to it
  // line_sym = SVG('#symbol-container').symbol();           //@ creates the <symbol></symbol> tags and puts them inside of #symbol-contianer
  // line_sym.line(1, 0, 1, "100%").stroke({ width: 1, color: "#FFFF00", dasharray: "1, 6" }); //@ creates a <line> element inside of the newly created symbol, then gives it some styling
  // pxBetweenEachLine = timelineWidthPixels/numberOfLines;

  
  let l = artifacts.length;
    for(i = 0; i < l; i++){ 
      //? loop through artifacts
      let currentObject = artifacts[i];
      
      // console.log(currentObject.container.pos.ocx)
      
      //? current object is the one being drawn from
      let firstObjectX = currentObject.container.pos.ocx;      //? grabs the first object (object being drawn from) x value
      let firstObjectY = currentObject.container.pos.ocy;      //? grabs the first ohject 

      
      
      const relationArrayCount =  currentObject.relation.length;

      if (relationArrayCount>1){
        relationMoreThan1 = true;
      };
      

      if(currentObject.relation.length > 0){ 
        for(j = 0; j < relationArrayCount; j++){
          let artifact = artifacts.find(element => element.artifactName === currentObject.relation[j]);
          let nextObjectX = artifact.container.pos.ocx;
          let nextObjectY = artifact.container.pos.ocy;
          //console.log(artifact);
          if(j === 0) {
            var line = connectLinesContain.line(firstObjectX, firstObjectY, nextObjectX, nextObjectY).stroke({ width: 10, color:"#FFFFFF" })
          }

          if(j > 0) {

            // var line = connectLinesContain.polyline([[firstObjectX, test], [(nextObjectX / 2), (firstObjectY + 50)], [nextObjectX,nextObjectY]]).stroke({ width: 1, color:"#FFFFFF" })
            // starting = [[firstObjectX, firstObjectY + 50],  
            const lineSpacer = 25; //? how much space they increment down
            const halfwayX = (nextObjectX + firstObjectX) / 2;

            // console.log(nextObjectX);
            line = connectLinesContain.polyline([[firstObjectX, firstObjectY + lineSpacer], [halfwayX, firstObjectY + lineSpacer], [halfwayX, nextObjectY], [nextObjectX, nextObjectY]]).stroke({ width: 10, color:"#FFFFFF"}).fill('none');
          }

        }    
      }
    }
  
  }



  
  const found = artifacts.find(element => element.artifactName === "test2");
  