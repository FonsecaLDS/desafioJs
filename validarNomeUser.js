function CodelandUsernameValidation(str) { 

    // code goes here  
    const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    const valid_length = (str) => str.length >= 4 && str.length <= 25;
    console.log(valid_length);
    return valid_reg.test(str) && valid_length(str);
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation("u__hello_world123"));