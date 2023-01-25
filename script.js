function letterCombinations(input_digit) {
  if(input_digit == ""){
        return [];
    }
    let table = [ '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
     
    let res =[];
    let que = [''];
     
    while(que.length>0){
        let str = que[0];
        que.shift();
         
        if(str.length == input_digit.length){
            res.push(str); // if all input_digit are replaced with char push to result
        } else{
//             get the current number from the input_digit i.e if str.length = 2 , input_digit =123 s= 3
            let s= Number(input_digit.charAt(str.length));
            let val = table[s]; // get char from the table i.e def for s =3
             
            for(i=0;i<val.length;i++){
                que.push(str+val.charAt(i));
            }
        }
    }
     
    return res;
     
}

module.exports = letterCombinations;
