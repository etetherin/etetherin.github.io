
//* THIS STUFF HANDLES THE POP UPS AND MORE INFO ON ALL THE EVENTS AND NODES. 

////_____________________________________________________________Creates the info screen


function createInfoScreen() {


    const itemInfoScreen = [
      {
        parent: 'body',
        tag: 'section',
        class: 'item-info-screen',
        children: [
          {
            tag: 'div',
            class: 'content-width',
            children: [
              {
                tag: 'a',
                class: 'exit-button',
                attributes: {
                  onclick: 'closeInfoScreen()'
                },
                children: [
                  {
                    svg: "x-button"
                  }
                ]
              },
              {
                tag: 'div',
                class: 'heading',
                children:[
                  {
                    tag: 'div',
                    class: 'title-holder',
                  },
                  {
                    tag: 'div',
                    class: 'tag-holder',
                  }
                ]   
              },
              {
                tag: 'div',
                class: 'video-container',
                children: [
                  {
                    tag: 'video',
                    class: 'video-actual',
                    attributes: {
                      width: '100%',
                      height: 'auto',
                      controls: '',
                    },
                  }
                ]
              },
              {
                tag: 'div',
                class: 'info-container',
                children: [
                  {
                    tag: 'div',
                    class: 'info-top',
                    children: [
                      {
                        tag: 'div',
                        class: 'info-topleft'
                      },
                      {
                        tag: 'div',
                        class: 'info-topright',
                        children: [
                          {
                            tag: 'div',
                            class: 'map-container',
                            children: [
                              {
                                svg: 'map'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  // }, //// I THINK I AM GOING TO MAKE THIS SECTION A STRETCH GOAL OR SOMETHING
                  // {
                  //   tag: 'div',   
                  //   class: 'info-bottom', 
                  //   children: [ 
                  //     {
                  //       tag: 'div',
                  //       class: 'info-bottom-header',
                  //       children: [
                  //         {
                  //           tag: 'h3',
                  //           text: 'Related Tech'
                  //         }
                  //       ]
                  //     },
                  //     {
                  //       tag: 'div',
                  //       class: 'info-bottom-footer', e
                  //       children: [
                  //         {
                  //           tag: 'div',
                  //           class: 'related-tech-container',
                  //           text: 'image of related tech'
                  //         }
                  //       ]
                  //     }
                  //   ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  
    CreateHTML(itemInfoScreen);
    
    gsap.from('.item-info-screen', {opacity: .3, top: '100%', duration: 1,  ease: "power2.out"})
  
  }
  
  ////_________________________________________________________________Populate the info screen with the relevant information
  
  
  function populateInfoScreen(_myIndex){
  
  
    const title = artifacts[_myIndex].artifactName;
    let year = artifacts[_myIndex].yearInvented;
    const tags = artifacts[_myIndex].tags;
  
  
    if(year < 0) {
      year = Math.abs(year) + ' BCE'
    }
  
    //? Populate the title area
  
    const titleSection = [
      {
        parent: '.title-holder',
        tag: 'h2',
        class: 'info-screen-heading',
        text: title
      },
      {
        tag: 'p',
        class: 'infoscrn-year',
        text: 'Invented/Discovered: ' + year
      }
    ]
  
    CreateHTML(titleSection);
  
    
  
    //? populate the tags area
  
  let tagsCollection;
  
    if (tags !== undefined) {
      
      tagsCollection = tags.map( listItem => {
        
        switch(listItem){
          case 'art':
            return {
              parent: '.tag-holder',
              tag: 'div',
              class: 'art-tag-holder',
              children: [
                {
                svg: "art-tag",
                }
              ]
            }
          
          case 'tool':
            return {
              parent: '.tag-holder',
              tag: 'div',
              class: 'tool-tag-holder',
              children: [
                {
                  svg: "tool-tag",
                }
              ]
            }
          
          case 'trade':
            return {
              parent: '.tag-holder',
              tag: 'div',
              class: 'trade-tag-holder',
              children: [
                {
                svg: "trade-tag",
                }
              ]
            }
          
          case 'religion':
            return {
              parent: '.tag-holder',
              tag: 'div',
              class: 'religion-tag-holder',
              children: [
                {
                  svg: "religion-tag",
                }
              ]
            }
  
          case 'science':
            return{
              parent: '.tag-holder',
              tag: 'div',
              class: 'science-tag-holder',
              children: [
                {
                  svg: "science-tag",
                }
              ]
            }
  
  
          case 'event':
            return {
              parent: '.tag-holder',
              tag: 'div',
              class: 'event-tag-holder',
              children: [
                {
                  svg: "event-tag",
                }
              ]
            }
        }
      })
  
      CreateHTML(tagsCollection);
  
    }
  
    //? Populate the list of neat facts
  
    if(artifacts[_myIndex].facts !== undefined){
  
      const factList = [
        {
          tag: 'h4',
          class: 'fact-list-Header',
          parent: '.info-topleft',
          text: 'INTERESTING FACTS'
        },
        {
          tag: 'ul',
          class: 'fact-list',
          parent: '.info-topleft',
          children: [
          ]
        }
      ]
  
      artifacts[_myIndex].facts.forEach( fact => 
      
        factList[1].children.push(
          {
            tag: 'li',
            text: fact
          },
        ),
      );
        
      CreateHTML(factList);
    }
  
  
    //? populate the map svg witht he correct one
  
  
    if(artifacts[_myIndex].location !== undefined){
  
      const location = artifacts[_myIndex].location;
      const objectClass = '.' + location;
      const $object = document.querySelector(objectClass);
      const color = getComputedStyle($object).stroke;
  
      $object.style.cssText = 'fill:' + color + '; stroke: none;';
  
    }
  
    //? populate the video with the correct one
    str = title.replace(/\s+/g, '-').toLowerCase();

    const videoStructure = [
      {
        parent: '.video-actual',
        tag: 'source',
        attributes: {
          src: 'videos\\' + str + '.mp4'
        }
      }
    ]
  
    CreateHTML(videoStructure);
  
  
  
  }
  
  
  ////                                                                          Create the pop up when you click on an object
  
  
  
  
  function loadItemPage (){
    let $item = document.querySelector('.artifact');
    $item.add
  };
  
  
  
  
  ////________________________________________________________________________Unload the info screen when press the x
  
  
  function closeInfoScreen() {
  
    //? reset the map colors to none
    const artifactName = document.querySelector('.info-screen-heading').innerHTML
    const found = artifacts.find(element => element.artifactName === artifactName);
    const $continent = document.querySelector('.' + found.location);
    const $continentColor = getComputedStyle($continent).fill;
  
    //? remove the info screen from the dom
    const infoScreen = document.querySelector('.item-info-screen');
  
    gsap.to('.item-info-screen', {opacity: .3, top: '100%', duration: .5,  ease: "power2.in"})
    setTimeout(function(){
      infoScreen.remove()
      $continent.style.cssText  = 'fill: none; stroke: ' + $continentColor + ';';
      const artifactsContainer = document.querySelector('.artifacts');
      artifactsContainer.style.pointerEvents =  'auto';
    }, 500);
    enableScroll();
  
  }