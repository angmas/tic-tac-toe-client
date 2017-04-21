'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  const password = $('#sign-up-password').val()
  const passwordConfirmation = $('#sign-up-password-confirmation').val()

  event.preventDefault()
  if (password !== passwordConfirmation) {
    $('#alert-danger-message').text(' Please enter matching passwords.')
    $('.alert-danger').show()
  } else {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onGoToChangePassword = function () {
  $('#change-password').trigger('reset')
  $('.jumbotron').hide()
  $('.game-options').hide()
  $('.account-change').show()
  $('.nav').show()
  $('.alert').hide()
  $('.authentication').hide()
  $('.jumbotron').hide()
  $('.tic-tac-toe-grid').hide()
  $('.game-stats').hide()
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  const oldPassword = $('#old-password').val()
  const newPassword = $('#new-password').val()
  event.preventDefault()
  $('.alert').hide()
  if (oldPassword === newPassword) {
    $('#alert-danger-message').text(' Old password and new password cannot be the same.')
    $('.alert-danger').show()
  } else {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.sign-out-nav').on('click', onSignOut)
  $('.change-password-nav').on('click', onGoToChangePassword)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
