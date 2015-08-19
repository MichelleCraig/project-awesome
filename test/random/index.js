var expect = require("chai").expect;

var random = require("../../random");

describe('#random',function() {

	it('should be that you can create a random object and set its seed', function(){
		var r = new random.random(0xABCD1234);
		expect(r.currentSeed.highBits).to.equal(5);
		expect(r.currentSeed.lowBits).to.equal(0x7521f459);

	    });

     it('should be that you can create a random object and set its seed', function(){
		var r = new random.random(0x0);
		expect(r.currentSeed.highBits).to.equal(5);
		expect(r.currentSeed.lowBits).to.equal(0xDEECE66D);
	    });

     it('should be that you can create a random object and set its seed using 48 bits', function(){
		var r = new random.random(0xABC000000000);
		expect(r.currentSeed.highBits).to.equal(0xABC5);
		expect(r.currentSeed.lowBits).to.equal(0xDEECE66D);
	    });

     it('should have a determineSeed method', function() {
	     expect(random.determineSeed).is.a('function');
	 });

     it('should have a determineSeed method that takes hex input', function() {
	     expect(random.determineSeed("0xA")).to.equal(10);
	     expect(random.determineSeed("10")).to.equal(16);
	 });

     it('should have a determineSeed method that if given bad input chooses a random int', function() {
	     expect(random.determineSeed("bar")).to.be.a("number");
	 });

     it('should have a determineSeed method that returns a random when no parameter is used',
	function() {
	    var result=random.determineSeed();
	     expect(result).to.be.a("number");
	     expect(result>=0);
	     expect(result<=0xFFFFFFFF);

	 });


    });	

   


// Mocha cheatsheet
/*
describe('test suite', function () {
  beforeEach(function() { 
  	// ...
  });
  afterEach(function() { 
  	// ...
  });

  before(function() { 
  	// ...
  });
  after(function() { 
  	// ...
  });

  it('a basic test', function() { 
  	// ...
  });

  it('a test with a promise', function() {
    return somePromiseObject; });

  it('an asynchronous test', function(next) {
    if (success) { next(); } else { next(error); }
  });

  xit('use "xit" for pending tests', function() { 
  	// ...
  });
});
*/

// Chai cheatsheet
/*
expect(3).to.eql(2);

expect(obj).to.be.a('string');
expect(obj).to.be.null;
expect(obj).to.be.true;
expect(obj).to.be.false;
expect(obj).to.be.undefined;

expect(list).to.include("item");
expect(list).to.have.length(3);
expect(list).to.have.length.gt(0);
*/






