let firstName="Divyanshu";
let age=19;
let isMarried=true;

console.log("This persons name is "+firstName+" and thier age is "+age);

if(age>18){
    console.log("THis person "+firstName+" is an adult");
}else{
    console.log("THis person is teen");
}

if(isMarried){
    console.log("This person is married");
}else{
    console.log("thsi person is unmarried");
}

//  Learning Loops
let answer=0;
for(let i=1; i<=1000; i++){
    answer+=i;
}
console.log(answer);

// Arrays
const ages = [21,22,25,28,29,33,44];
const numOfPeople=ages.length;
let maxAge=ages[0];
for(let i = 0; i<numOfPeople; i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
    if(maxAge<ages[i]){
        maxAge=ages[i];
    }
}
console.log("The eldest one is of age "+maxAge);

// problem
const personArray=["harkirat","Divyanshu","Priya"];
const genderArray=["male","male",'female'];
console.log("We are going to print all the males in the array")
for(let i=0;i<genderArray.length;i++){
    if(genderArray[i]=='male'){
        console.log(personArray[i]);
    }
}

// Objects
const user1={
    firstName:"Divyanshu",
    gender:"male"
}
console.log("THe name is "+user1["firstName"]+
    " and the gender is "+user1["gender"]);

// objects as an array
const allUsers=[{
    firstName:"Divyanshu",
    gender:"male",
    metadata:{
        age:19,
        address:"sultanpur"
    }
},
{
    firstName:"Om mishra",
    gender:"male"
},
{
    firstName:"Harsh Panchal",
    gender:"male"

},
{
    firstName:"Ridhi Ojha",
    gender:"Female"
},
{
    firstName:"My Mom",
    gender:"Female"
},
]

for(let i = 0; i < allUsers.length; i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"]);
    }
}
console.log(allUsers[0]["metadata"]["age"]);
console.log(allUsers[0]["metadata"]["address"]);