'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });
  });
  
  describe('PhoneListCtrl', function() {

  it('should create "phones" model with phones', function() {
    car scope ={},
	ctrl = new PhoneListCtrl(scope);
	
	expect(scope.phones.length).toBe(3);
  });

});
