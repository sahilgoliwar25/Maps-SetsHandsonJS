function output1(){
  var a = "abcadeecfb";

  let b = new Set(a); // converted into set
  b = [...b]; // converted into array
  b = b.join(""); //converted into string

  alert(b);
}
// ##############################################
function output2(){
  function countAlphabets(str) {
    const alphabetCount = new Map();

    for (let char of str) {
      if (alphabetCount.has(char)) {
        alphabetCount.set(char, alphabetCount.get(char) + 1);
      } else {
        alphabetCount.set(char, 1);
      }
    }
    for (let [char, count] of alphabetCount) {
      console.log(`${char}= ${count}`);
    }
  }
  countAlphabets("abcadeecfb");
}