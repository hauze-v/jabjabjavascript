/* --- Function Declaration --- */
function alpha() {
  console.log("alpha speaking!");
}

alpha();

function alpha() {
  console.log("new alpha speaking!!!");
} // this one will run because it was hoisted last

/* Remember that function declarations (and their bodies) get hoisted */

/* --- Function Expression --- */
var beta = function() {
  console.log("beta speaking");
}

beta();

var beta = function() {
  console.log("new beta speaking!!!");
}

/* Function expressions don't get hoisted, only function DECLARATIONS and variable DECLARATIONS get hoisted */