'use strict'
// The following comments are to help in console/node testing the function
// temporarily export function to test individually in node
// const tray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// const game = require('./assets/scripts/game/winLogic.js')
// winning lane coord: [ '147', '258', '369', '123', '456', '789', '159', '357' ]
// const tray = ['x','o','x','x','o','o','x','o','x']

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
const getLanes = function (tray) {
  const lanes = []
  for (let i = 0; i < winLanes.length; i++) {
    lanes.push(ticTacToe(tray, winLanes[i]))
  }
  return lanes
}

const getWinner = function (tray) {
  const lanes = getLanes(tray)
  // console.log('indexOf xxx: ', lanes.indexOf('xxx'), ' indexOf ooo: ', lanes.indexOf('ooo'))
  return lanes.indexOf('xxx') > -1 || lanes.indexOf('ooo') > -1
}

const didXWin = function (tray) {
  const lanes = getLanes(tray)
  return lanes.indexOf('xxx') > -1
}

const didOWin = function (tray) {
  const lanes = getLanes(tray)
  return lanes.indexOf('ooo') > -1
}

module.exports = {
  getWinner,
  didXWin,
  didOWin
}
