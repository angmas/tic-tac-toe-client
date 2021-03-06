'use strict'
const store = require('../store')
const gameStats = require('./gameStats')

const createSuccess = (data) => {
  store.game = data.game
  $('.alert').hide()
  $('.authentication').hide()
  $('.account-change').hide()
  $('.jumbotron').hide()
  $('.game-options').hide()
  $('.tic-tac-toe-grid').show()
  $('.game-stats').hide()
}
const createFailure = (error) => {
  $('#alert-danger-message').text(' Cannot start new game.')
  $('.alert-danger').show()
}

const updateSuccess = (data) => {
  $('.alert').hide()
  store.game = data.game
}
const updateFailure = (error) => {
  $('#alert-danger-message').text(' Cannot save move.')
  $('.alert-danger').show()
}

const getStatsSuccess = (data) => {
  $('.alert').hide()
  $('.tic-tac-toe-grid').hide()
  store.gameStats = data.games
  gameStats.displayGameStats(store.gameStats)
}
const getStatsFailure = (error) => {
  $('#alert-danger-message').text(' Cannot get game statistics.')
  $('.alert-danger').show()
}

module.exports = {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  getStatsSuccess,
  getStatsFailure
}
