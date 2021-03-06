var chai = require("chai"),
	sinon = require("sinon"),
	expect = chai.expect;

var projectAwesome = require('../'),
	questions = require('../problemTypes'),
	formats = require('../formats'),
	checkers = require('../checkers'),
	listers = require('../listers');

describe('list', function() {

		describe('list someBadType', function() {
			it('should throw error', function() {
				try {
					projectAwesome.list('someBadType');
					expect(false).to.be.true;
				} catch(err) {
					expect(err).to.equal("Illegal Argument: " + 'someBadType');
				}
			});	
		});

		describe('list problemType', function() {
			it('should list the problem types', function() {
				 result = projectAwesome.list('problemType');
				 expect(result).to.be.a('Array');
				 expect(result).to.eql(Object.keys(questions.problemTypes));
			});	
		});

		describe('list quizFormat', function() {
			it('should list the quiz formats', function() {
				 result = projectAwesome.list('quizFormat');
				 expect(result).to.be.a('Array');
				 expect(result).to.eql(Object.keys(formats.quizFormats));
			});	
		});

		describe('list checkableType', function() {
			it('should list the checkable types', function() {
				 result = projectAwesome.list('checkableType');
				 expect(result).to.be.a('Array');
				 expect(result).to.eql(Object.keys(checkers.checkers));
			});	
		});

		describe('list listableType', function() {
			it('should list the listable types', function() {
				 result = projectAwesome.list('listableType');
				 expect(result).to.be.a('Array');
				 expect(result).to.eql(Object.keys(listers.listers));
			});	
		});

	});
