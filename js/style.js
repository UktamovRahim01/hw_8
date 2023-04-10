let student = {
    name: "Rustam",
    gender: "male",
    age: 15,
    isMarried: true,
    wifes: [`Nargiza`, `Angelica`, `Rustama`, `Amina`]
}
let passport = {
    serries: `AC`,
    number: 938127312,
    data: `2030-20-20`,
    exp: `2030-20-20`
}

let types = {
    string:[],
    number:[],
    boolean:[],
    object:[]
}


let student_2 = Object.assign({}, student, {passport})
let student_3 = Object.assign({}, student, passport)

let keys = Object.keys(student_2)
let values = Object.values(student_2)

// let keys = Object.keys(student_3)
// let values = Object.values(student_3) 

let all = [...keys, ...values]

for (let i = 0; i < all.length; i++) {
     types[typeof(all[i])].push(all[i])
}



console.log(`Обединение обектов`);
console.log(student_2);
console.log(`ключи`);
console.log(keys);
console.log(`значения`);
console.log(values);
console.log(`обединение`);
console.log(all);
console.log(`типы`);
console.log(types);


