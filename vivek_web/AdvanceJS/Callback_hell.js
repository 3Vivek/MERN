// 1:after2s student roll Node
// 2:after2s 2nd _roll_Num and Age
// 3:after2s gender

const getRoll=()=>{
    setTimeout(()=>{
        console.log("API Getting roll number");
        let roll=[1,2,3,4,5,6];
        console.log(roll);

        setTimeout((roll)=>{
            const biodata={
                name:'Vivek',
                age:23
            };
            console.log(`My name is ${biodata.name} and I am ${biodata.age} years old`);

            setTimeout((name)=>{
                biodata.gender='Male';
                console.log(`
                My name is ${biodata.name} and 
                I am ${biodata.age} years old. My gender is ${biodata.gender}`
                );

            },2000,biodata.name);

        },2000,roll[1]);    

    },2000)
}
getRoll();