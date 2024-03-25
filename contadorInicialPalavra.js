const getCountWords = (str)=> {
    
    if(!str.trim() || typeof str !== "string") return null

    const  strArr = str.trim().split(" ") //Retirar possiveis espaços das strings;
    console.log(strArr)
    const obj = {}

    for(let word of strArr){
        const firstLetter = word[0]
        console.log(word)
        if(obj[firstLetter]){
            obj[firstLetter]++
            console.log(obj);
        } else {
            obj[firstLetter] = 1
            console.log(obj);
        }
    }


    return obj
}

console.log(getCountWords("você gosta mais de estudar ou de macarrão"))