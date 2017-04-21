'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  $('.alert').hide()
  $('.alert-success').show()
  $('#alert-success-message').text(' Account created. Sign in for Tic Tac Toe.')
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  $('#alert-danger-message').text(' Email already exists.')
  $('#global-alert-danger').show()
}

const signInSuccess = (data) => {
  $('.alert').hide()
  $('#sign-in').trigger('reset')
  $('.authentication').hide()
  store.user = data.user
  $('.dropdown-toggle').html(store.user.email + ' <span class="caret"></span>')
  $('.nav').show()
  $('.game-options').show()
  $('.not-signed-in').hide()
}

const signInFailure = (error) => {
  $('.alert').hide()
  $('#alert-danger-message').text(' Email or password is incorrect.')
  $('#global-alert-danger').show()
}
const signOutSuccess = () => {
  store.user = null
  $('.alert').hide()
  $('.authentication').show()
  $('.account-change').hide()
  $('.game-options').hide()
  $('.jumbotron').show()
  $('.tic-tac-toe-grid').hide()
  $('.game-stats').hide()
  $('.nav').hide()
  $('.not-signed-in').show()
}

const signOutFailure = (error) => {
  $('.alert').hide()
  $('#alert-danger-message').text(' Unexpected system error.')
  $('#global-alert-danger').show()
}

const changePasswordSuccess = () => {
  $('.alert').hide()
  $('.alert-success').show()
  $('#alert-success-message').text(' Password changed.')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = (error) => {
  $('.alert').hide()
  $('#alert-danger-message').text(' Cannot change password.')
  $('.alert-danger').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
