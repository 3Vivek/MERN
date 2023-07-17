//Synchronous programming
const fun2=()=>{
    setTimeout(()=>{
        console.log("Fun2 is starting");
    },3000);
}

const fun1=()=>{
    console.log("Fun1 is starting");
    fun2();
    console.log("Fun1 is ending");
}
fun1();