function makeNameTag(_artifact,index){
  const myTitle = artifacts[index].artifactName;
  const $nameTagHolder = ce('div', {_class: 'name-tag-container', _html: '<h3>' + myTitle + '</h3>', _append: '.artifacts'});

  $nameTagHolder.style.left = _artifact.pos.ocxs;
  $nameTagHolder.style.top = _artifact.pos.oBottomS;

  var titleSVGcanvas = SVG().addTo($nameTagHolder).size('100%','100%').addClass('name-tag')
  const titleHolderWidth = $nameTagHolder.offsetWidth;
  const titleHolderHeight = $nameTagHolder.offsetHeight;

  const nameHolderWidth = titleHolderWidth - 2;       //? This is here because for some reason when i use the actual width it draws outside of the bounding box
  const nameHolderHeight = titleHolderHeight - 2;     //? same as above

  var titleShape = titleSVGcanvas.polygon(
      '2,' + nameHolderHeight / 3 + ' ' +
      '2,' + nameHolderHeight + ' ' +
      nameHolderWidth + ',' + nameHolderHeight + ' ' +
      nameHolderWidth + ',' + nameHolderHeight / 3 + ' ' +
      ((nameHolderWidth * .5) + 20) + ',' + nameHolderHeight / 3 + ' ' +
      nameHolderWidth * .5 + ',' + '2'  + ' ' +
      ((nameHolderWidth * .5) - 20) + ',' + nameHolderHeight / 3 + ' ').attr({stroke: 'rgba(256, 256, 256, .25)', 'stroke-width': 1.5, 'stroke-alignment': 'center', fill: '#262626'
  })
}

let onArtUp = event => {
  let myIndex = event.currentTarget.i;
  createInfoScreen(myIndex);
  populateInfoScreen(myIndex);
  disableScroll();
  
  const artifactsContainer = document.querySelector('.artifacts');
  console.log(artifactsContainer)
  artifactsContainer.style.pointerEvents =  'none';
}


let onIn = event => {
  let myArtifact = event.currentTarget
  gsap.to(myArtifact, {scale: 1.05})
}


let onOut = event => {
  let myArtifact = event.currentTarget
  gsap.to(myArtifact, {scale: 1})
}

let loadCount = 0;
let biggestBottom = 0;

async function buildArtifact(artifact, index) {

const myName = artifact.artifactName;
const idString = myName.replace(/\s+/g, '-').toLowerCase();
artifact.id = idString;

  artifact.container = ce('div', {_class: 'artifact', _id: idString, _append: '.artifacts'});
  // artifact.container.style.marginLeft = bufferZone + 'px';
  artifact.container.i = index;

  const src = 'images/' + artifact.artifactImage;
  await loadImage(src, ce('img', {_append:artifact.container}));
  loadCount++;
  let yearInvented = artifact.yearInvented
  yearInvented += 2600000;
  //? figure outs its x coordinate
  const MyX = (yearInvented / yearsPerPixel);
  artifact.container.style.left = MyX + 'px';
 
  if (artifact.myYLevel){
    artifact.container.style.top = artifact.myYLevel * 250 + 'px';
  }

 


  const myPos = pos(artifact.container);
  artifact.container.style.top = myPos.oTop - myPos.height/2 + "px";
  artifact.container.style.left = myPos.oLeft - myPos.width/2 + "px";
  pos(artifact.container, true);


 
  if(artifact.container.pos.oBottom > biggestBottom){
    biggestBottom = artifact.container.pos.oBottom;
  }

  artifact.container.addEventListener("click", onArtUp);
  artifact.container.addEventListener("mouseover", onIn);
  artifact.container.addEventListener("mouseout", onOut);
  makeNameTag(artifact.container,index);

  if(loadCount===artifacts.length){
    connectArtifacts();
    BuildNav();
    // const scrollBarHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight)
    // console.log(scrollBarHeight)
    ge("main").style.height = biggestBottom + 25 + "px";
  }
}



artifacts.forEach( (element,index) => {
 buildArtifact(element,index);
})
