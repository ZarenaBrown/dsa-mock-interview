/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
  const result = {};
  
  for(let i = 0; i < data.length; i++) {
    let sentence = data[i];
    const words = sentence.split(/[\s.,';]/)
    
   for(let j = 0; j < words.length; j++) {
     let word = words[j].toLowerCase();
     
     if(word === " ") {
       return null;
     }
     
     if(result[word]) {
       if(!result[word].includes(i)) {
         result[word].push(i);
       }
     } else {
       result[word] = [i];
     }
   }
  }
  console.log(result);
  return result;
}

module.exports = concordance;
