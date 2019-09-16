//Complete siguiendo las instrucciones del taller

var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('wrongemail@example.com');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('123467891');
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

When('I try to register', () => {
  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('button=Registrarse').click();
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue(email);

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
});

When(/^I fill with (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)$/ , (nombre, apellido, correo, idUniversidad, checkbox, idPrograma, password, acepta) => {
    var cajaSignUp = $('.cajaSignUp');

    var nombreInput = cajaSignUp.$('input[name="nombre"]');
    nombreInput.click();
    nombreInput.setValue(nombre);

    var apellidoInput = cajaSignUp.$('input[name="apellido"]');
    apellidoInput.click();
    apellidoInput.setValue(apellido);
    
    var correoInput = cajaSignUp.$('input[name="correo"]');
    correoInput.click();
    correoInput.setValue(correo);
    
    var idUniversidadsel = cajaSignUp.$('select[name="idUniversidad"]');
    idUniversidadsel.select(idUniversidad);
    
    var checkboxCb = cajaSignUp.$('[type="checkbox"]');
    checkboxCb.check();
    
    var idProgramasel = cajaSignUp.$('select[name="idPrograma"]');
    idProgramasel.select(idPrograma);
    
    var passwordInput = cajaSignUp.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
    
    var aceptaCb = cajaSignUp.$('input[name="acepta"]');
    aceptaCb.check();
});

Then(/^I expect to see (.*)/, (error) => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    var alertText = $('.aviso.alert.alert-danger').getText('.aviso.alert.alert-danger');
    expect(alertText).contains(error);
});
Then(/^I expect to see (.*)/, (button) => {
    $('button=Ingresar').waitForExist(5000);
});

Then(/^I expect to see success (.*)/, (message) => {
    $(body).contains(message);



