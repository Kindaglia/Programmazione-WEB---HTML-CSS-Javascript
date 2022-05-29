
/*Functions */
function useful(){
     console.log("run");
}
function cancelScheduling(){
    clearTimeout(a);
    console.log("canceled function");

}
//clear
let a = setTimeout(useful,10000);
setTimeout(cancelScheduling,5000);



