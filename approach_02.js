let arr = [2,1,2,0,0]
// console.log(arr.length);
let arr_01 = [];
for (let i = 0; i<arr.length; i++){
console.log("vlue of i:",[i])
    for (let j=0; j<arr.length; j++){
console.log("vlue of j:",[j])
        if (arr[j]>arr[i]){
            console.log("if")
            arr_01.push(arr[i]);
            arr.shift();
            console.log("arr_01:",arr_01);
            console.log("arr:",arr);
        }//else if (j=i){
        //     arr.push(i);
            // arr_01 = arr_01 + arr_01[j];
        // }
    }
    console.log(arr);
}
