var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]



function addElementToBeginningOfArray(array, element){ 
  var chocolateBars = [element, ...array]; 
  return chocolateBars
}

<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}


function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function accessElementInArray(array, index) {
  return array[index] 
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift() 
  return array
}


function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}


function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1) 
}
=======
/*

function destructivelyAddElementToBeginningOfArray(array, element) {return
${array}.unshift(${element})
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "100grand")

function addElementToEndOfArray() {return
[...chocolateBars, "100grand"]
}

function destructivelyAddElementToEndOfArray() {return
chocolateBars.push("100grand")
}

function accessElementInArray() {return
(chocolateBars[0])
}

function destructivelyRemoveElementFromBeginningOfArray() {return
chocolateBars.shift() 
}

function removeElementFromBeginningOfArray() {return
chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray() {return
chocolateBars.pop()
}
chocolateBars

function removeElementFromEndOfArray() {return
chocolateBars.slice(0, chocolateBars.length - 1) 
*/
>>>>>>> 778e82ac086d6c1b94b11a835e181ad72dc82ac2
