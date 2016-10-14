var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction", "jimmies"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Loop through the two arrays provided (`bands` and `vegetables`) and output each element in the arrays into their corresponding HTML `<div>` element.
// Ensure that each item is in a block element (e.g. li, div, p. etc...)

var node;

// The number of loops to perform (what if the array changes?)
if(bands.length > vegetables.length){
  var loopCount = bands.length;
} else {
  var loopCount = vegetables.length;
};

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

function addBlockToDOM(parent, child, text) {
  var parentElement = document.getElementById(parent);
  var childElement = document.createElement(child);
  childElement.appendChild(document.createTextNode(text));
  parentElement.appendChild(childElement);
};

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  // Keep track of which band we're on in the loop
  var currentBand = bands[loopTracker];
  // Keep track of which veggie we're on in the loop
  var currentVeggie = vegetables[loopTracker];
  
  // Add the band names into the correct <div>
  if(currentBand) {
   addBlockToDOM("boy-bands", "p", currentBand);
  };
  if(currentVeggie) {
  // Add the veggie names into the correct <div>
  addBlockToDOM("vegetables", "p", currentVeggie);
  };
};
