
// const bufferZone = 200; // This lets me make sure stuff doesnt start right on the start of the page
//todo Need to add this buffer as a margin-left on: main, connectionlines and artifacts
const bceYears = 2600000; // How many years before 0 are there in the timeline
const ceYears = 0; // This is how many years after 0 there are in the timeline

const totalYears = bceYears + ceYears; // This is the total amount of years that are shown on the timeline




let yearsPerPixel = 500; // This number represents how many years are represented by a single pixel width.
//? This will eventually be user set with zoom i think

let yearsPerLine = 100000; //How many years are between each line


let timelineWidthPixels  = (totalYears + yearsPerLine/2)/yearsPerPixel;
let numberOfLines = timelineWidthPixels/(yearsPerLine/yearsPerPixel);





const $main = ge('main');
const $body = ge('body');





const agesArray = [ 
    {
        age:'stone', 
        start: -2600000,
        end: -2000,
        // transition: -2000,
    }, 
];




const artifacts = [  //todo Move this to a different file with all the data in it.

    {
      artifactName: 'Mode 1 Stone Tools',
      artifactImage:'pebble-tool.png',
      yearInvented: -2600000,
      tags: ['tool'],
      location: 'southamerica',
      facts: ['First manmade tools', 'Essentially rocks with one edge that are crudely sharpened', 'Used to cut or apply force concussively', 'Made by pounding rocks together until one side happens to break into rough point'],
      relation: [ 'Mode 2 Stone Tools'],
      // myYlevel: 0,
    },
    {
      artifactName: 'Mode 2 Stone Tools',
      artifactImage:'biface-stone-tools.png',
      yearInvented: -1760000,
      tags: ['tool'],
      location: 'southamerica',
      facts: ['Created with a slightly more predictable method of smashing rocks tooutlookgether, still very luck based.','More sophisticated than previous stone tools, slightly sharper, and somwhate purpose built.', 'Used exactly as previous stone tools.'],
      relation: [ 'Hand Axe'],
      // myYlevel: 0,
    },
    {
      artifactName: 'Hand Axe',
      artifactImage:'hand-axe.png',
      yearInvented: -1600000,
      tags: ['tool'],
      location: 'africa',
      facts: ['Produced by a series of controled strikes to break them in controlled ways.', 'One of the first refined stone tools.', 'The first tool designed with a specific task in mind.', 'Sometimes used as "killer frisbies."', 'Most had a sharp border all around'],
      relation: ['Fire'],
    },
    {
      artifactName: 'Fire',
      artifactImage:'fire.png',
      yearInvented: -1000000,
      tags: ['science'],
      location: 'africa',
      facts: ['Control of fire happened in multiple steps.', 'The first step was interacting with burned landscapes in the wake of wildfires.', 'The next stop would be to use residual hotspots that occured after wildfires in order to process undercooked meat.', 'The final step would have been transporting it from burned areas to unberned ones and lighting them on fire '],
      relation: ['Mode 3 Stone Tools'],
    },
    {
      artifactName: 'Mode 3 Stone Tools',
      artifactImage: 'prepared-core-tool.png',
      yearInvented: -315000,
      tags: ['tool'],
      location: 'africa',
      facts: ['Created by first striking the edge of a larger rock all around its edge, then striking the newly created points all the way around, then lastly striking the tool out of the center.', 'This method was used to make a wide range of specialized tools such as cutting tools, spear heads, and slicing tools.'],
      relation: ['Shell Beads','Early Clothing'],
    },
    {
      artifactName: 'Early Clothing',
      artifactImage: 'early-clothing.png',
      yearInvented: -170000,
      tags: ['tool'],
      location: 'africa',
      facts: ['The date of first clothing is wildly debated amongst scholars.', 'The most popular theory for when clothing first was invented and used is based off of the divergence of head louse into body louse', 'The earliest examples of clothing consisted of crude cloth sections, and in some cultures shoes'],
      relation: [],
      myYLevel: 2,
    },
    {
      artifactName: 'Shell Beads',
      artifactImage:'shell-beads.png',
      yearInvented: -135000,
      tags: ['art', 'trade'],
      location: 'southamerica',
      facts: ['Most commonly made from snail shells.', 'First sogn of cultural development.', 'First sign of arts development.'],
      relation: ['Sewing Needle'],
    },
    {
      artifactName: 'Sewing Needle',
      artifactImage: 'sewing-needle.png',
      yearInvented: -50000,
      tags: ['tool', 'trade'],
      location: 'asia',
      facts: ['The first form of sewing was probably tying animal skins together using thorns and small sharpened rocks.', ''],
      relation: [],
    }
  ]
  