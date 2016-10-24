"use strict";

// Yor code here ...

function LeftBracket(c){
  if (('(' == c || '{' == c || '[' == c || '<' == c)){
    return true;
  } else {
    return false;
  }
}
function Fit(lb,rb){
  if (('(' == lb && ')' == rb) || ('[' == lb && ']' == rb) || ('{' == lb && '}' == rb) || ('<' == lb && '>' == rb)){
    return true;
  } else {
    return false;
  }
}

function checkSyntax(str) {
    var bracket = [],
        pos = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if(LeftBracket(char))
        {
            bracket.push(char);
        }
        else if(Fit(bracket[bracket.length - 1], char))
        {
            bracket.pop();
        }
    }
    if(bracket.length>0){
      return 1;
    } else {
      return 0;
    }
}
// ... //

checkSyntax("---(++++)----") == 0
checkSyntax("") == 0
checkSyntax("before ( middle []) after ") == 0
checkSyntax(") (") == 1
checkSyntax("} {") == 1
checkSyntax("<(   >)") == 1
checkSyntax("(  [  <>  ()  ]  <>  )") == 0
checkSyntax("   (      [)") == 1
    // и так далее...
