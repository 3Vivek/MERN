class Student{
    
    constructor(name,cls,age){
        this.myname=name;
        this.cls=cls;
        this.age=age;

    }
    //instance method= derived class can access(by defualt)
    //static method= cant access derived class
    biodata(){
        return (`HI i am ${this.myname} and my class is ${this.age}`);
    }
}
class Player extends Student{
    constructor(name,cls,age,game){
        super(name,cls,age); // parent class ka prop use krna h to phle uske parameter super constructor me laao 
        this.mygame=game;
    }
    biodata(){
        console.log(`HI i am ${this.myname} and my fav game is ${this.mygame}`);
    }

    player_data(){
        return (`${super.biodata()}`);
    }
}


let obj1=new Student("Vivek",5,12);
// let obj2=new Student("Vikki",4,10);
let obj3=new Player("Vikash",2,15,'COD')

obj1.biodata();
// obj2.biodata();
obj3.biodata();
console.log(obj3.player_data());