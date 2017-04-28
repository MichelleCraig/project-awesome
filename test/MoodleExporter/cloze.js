var expect = require("chai").expect;
var cloze = require('../../MoodleExporter/cloze');

// TODO: Need escapeCloze function to escape the special chars that are part of cloze syntax.
//   SHOULD write escapeCloze that puts \ in front of  } # ~ / " or \
//   SHOULD call escapeCloze any time  questionText, answer, or distractor is passed through
// https://docs.moodle.org/23/en/Embedded_Answers_(Cloze)_question_type
// https://moodle.org/mod/forum/discuss.php?d=275299


describe('cloze', function () {

    describe('qi2cloze(questionInstance)', function () {

    var qi_fr1 = {
        "outputType": "fr",
        "problemType": "paq-change-of-base",
        "questionText": "Convert 28 from decimal to binary.",
        "answer": "11100",
        "title": "Change of Base"
    };
    var expected_fr1 = "<div>Convert 28 from decimal to binary.</div>{1:SA:=11100}";

    var qi_fr2 = {
        "outputType": "fr",
        "problemType": "paq-change-of-base",
        "questionText": "Convert 2 from decimal to binary.",
        "answer": "10",
        "title": "This title will be ignored",
	"points": 42
    };
    var expected_fr2 = "<div>Convert 2 from decimal to binary.</div>{42:SA:=10}";

    var qi_mc1 = {
        "outputType": "mc",
        "problemType": "paq-change-of-base",
        "questionText": "Convert 1100 0011 from binary to hexadecimal.",
        "answer": "c3",
        "title": "Change of Base",
        "distractors": [
            "4a",
            "195",
            "67",
            "303",
            "c3"
        ],
        "answerIndex": 4
    }
    var expected_mc1 = "<div>Convert 1100 0011 from binary to hexadecimal.</div>{1:MCV:4a~195~67~303~=c3}";

    var qi_mc2 = {
            "outputType": "mc",
            "problemType": "paq-change-of-base",
            "questionText": "Convert 1000 from base 2 to base 16.",
            "answer": "8",
	    "points": 7,
            "title": "Change of Base",
            "distractors": [
                "22",
                "dc",
                "8",
                "b9"
            ],
            "answerIndex": 2
        }
    var expected_mc2 = "<div>Convert 1000 from base 2 to base 16.</div>{7:MCV:22~dc~=8~b9}";		
  
    var qi_label1 = {"label": "Example Label"};
    var expected_label1 = "<div>Example Label</div>";		

    var qi_list1 = [qi_label1,qi_fr1, qi_mc1];

    

    	it('should return valid cloze for a fr question with no points specified', function() {
    	    expect(cloze.qi2cloze(qi_fr1)).to.equal(expected_fr1);
    	});
    	
    	it('should return valid cloze for a fr question that does have points specified', function() {
    	    expect(cloze.qi2cloze(qi_fr2)).to.equal(expected_fr2);
    	});
    	it('should return valid cloze for a mc question with no points specified', function() {
    	    expect(cloze.qi2cloze(qi_mc1)).to.equal(expected_mc1);
    	});
    
    	it('should return valid cloze for a mc question with no points specified', function() {
    	    expect(cloze.qi2cloze(qi_mc2)).to.equal(expected_mc2);
    	});

    	it('should return valid cloze for a label', function() {
    	    expect(cloze.qi2cloze(qi_label1)).to.equal(expected_label1);
    	});
    	
    	it('should return valid cloze for a list', function() {
            var expected_list1 = expected_label1 + expected_fr1 + expected_mc1;
    	    expect(cloze.qi2cloze(qi_list1)).to.equal(expected_list1);
    	});

	
    });

    
});















