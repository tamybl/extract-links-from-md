const chai = require('chai');
const getMdLinks = require('../src/get-links.js');

describe('Validar', function() {
  it('Debe comprobar si existe patron []()', () => {
    chai.assert.equal(getMdLinks.MdLink(''), true);
  });
  it('Debe comprobar si existe patron []()', () => {
    chai.assert.equal(getMdLinks.MdLink(''), false);
  });  
});

describe('Validar', function () {
  it('Debe comprobar si es una url valida', () => {
    chai.assert.typeOf(getMdLinks.url(''), string);
  });
  it('Debe comprobar si es una url valida', () => {
    chai.assert.equal(getMdLinks.url(''), false);
  });
});

describe('Validar', function () {
  it('Debe comprobar si retorna el nombre de link', () => {
    chai.assert.equal(getMdLinks.text(''), true);
  });
  it('Debe comprobar si retorna el nombre de link', () => {
    chai.assert.equal(getMdLinks.text(''), false);
  });
});

describe('Validar', function () {
  it('Debe comprobar si ', () => {
    chai.assert.equal('');
  });
});
