function LongestWord(sen) { 

  
    // code goes here  
  
    sen = sen.trim();
    console.log(sen);
    sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
    console.log(sen);
    
    let longest = ""
  
    var arr = sen.split(" ").forEach(word => {
        if(word.length > longest.length) longest = word;
    })
  
    return longest;
    return sen; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("você gosta mais de estudar ou de macarrao"));