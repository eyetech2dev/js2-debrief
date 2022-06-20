// The following code takes a given name, runs a function to create a string and logs the name.
// The output should be "My name is Zara Williams !" when run.
// The code has 7 errors, find them and fix them and use node to check it is working.
// Hint: check particularly for incorrect marks/syntax, mispelled functions, and that information is returned from a function if needed.

function concatenate(first, last) {
    return `My name is ${first} ${last} !`;
  }
  function getName(first, last) {
    var result;
    result = concatenate(first, last);
    console.log(result);
  }
  getName("Zara", "Williams");
  
  // 1 line 8, ` and "
  // 2 line 16 " and '
  // 3 line 13 concat to concatenate
  // 4 line 11 missing function
  // 5 line 13, first and last
  // 6 line 16 secondFunction to getName
  // 7 line 9 return instead of full = (could maybe delete line 7 too)