'use strict'
// The following is to aid in console testing the function
// const tray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// const game = require('./assets/scripts/winLogic.js')

// the following array holds all the possible winning lanes for the game
const winLanes = [
  // horizontal lanes
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],

  // vertical lanes
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],

  // diagonal lanes
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
]

// function to string together elements into a 3 character string
const ticTacToe = (tray, coords) =>
  coords.map(c => tray[c[0] * 3 + c[1]]).join('')

// function to loop through winLanes to create an array of 3 character
// strings to check for wins or ties.
const getLanes = function (tray, array) {
  const lanes = []
  for (let i = 0; i < array.length; i++) {
    lanes.push(ticTacToe(tray, array[i]))
  }
  return lanes
}

const getWinner = function (array) {
  console.log('indexOf xxx: ', array.indexOf('xxx'), ' indexOf ooo: ', array.indexOf('ooo'))
  return array.indexOf('xxx') > -1 || array.indexOf('ooo') > -1
}

module.exports = {
  winLanes,
  ticTacToe,
  getLanes,
  getWinner
}
