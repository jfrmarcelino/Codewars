/*
Create a regular expression capable of evaluating binary strings (which consist of only 1's and 0's) and determining whether the given string represents a number divisible by 7.

Note:

    Empty strings should be rejected.
    Your solution should reject strings with any character other than 0 and 1.
    No leading 0's will be tested unless the string exactly denotes 0.

*/

// Write a regular expression to detect whether a binary number is divisible by 7
// It won't be accepted if you code something else like Function
const solution = /^(((((((0+)?1)1)((10*1)1)*(((10*1)0)0)|((((0+)?1)0)0))((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(((10*1)0)1)|((00|1)1))|((((0+)?1)1)((10*1)1)*(((10*1)0)1)|((((0+)?1)0)1)))((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(((10*1)0)1)|((00|1)1))|(0((10*1)1)*(((10*1)0)1)))*((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*0)|(0((10*1)1)*0))|(((((0+)?1)1)((10*1)1)*(((10*1)0)0)|((((0+)?1)0)0))((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*0)|((((0+)?1)1)((10*1)1)*0)))(0((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(((10*1)0)1)|((00|1)1))|(0((10*1)1)*(((10*1)0)1)))*((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*0)|(0((10*1)1)*0))|1)*(0((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(((10*1)0)1)|((00|1)1))|(0((10*1)1)*(((10*1)0)1)))*((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(1(0+)?))|(0((10*1)1)*(1(0+)?))))|((((((0+)?1)1)((10*1)1)*(((10*1)0)0)|((((0+)?1)0)0))((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(((10*1)0)1)|((00|1)1))|((((0+)?1)1)((10*1)1)*(((10*1)0)1)|((((0+)?1)0)1)))((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(((10*1)0)1)|((00|1)1))|(0((10*1)1)*(((10*1)0)1)))*((0((10*1)1)*(((10*1)0)0)|1)((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(1(0+)?))|(0((10*1)1)*(1(0+)?)))|(((((0+)?1)1)((10*1)1)*(((10*1)0)0)|((((0+)?1)0)0))((01)((10*1)1)*(((10*1)0)0)|((00|1)0))*((01)((10*1)1)*(1(0+)?))|((((0+)?1)1)((10*1)1)*(1(0+)?)|(0(0+)?)))))$/;
