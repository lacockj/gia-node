var Gia = require('../index');
var assert = require('assert');

describe('Gia class', function() {

  before(function(){
    
  });

  it('connects to API', function(done) {
    var gia = new Gia(null);
    gia.checkConnection()
      .then(function(response){
        done();
      })
      .catch(done);
  });

});
