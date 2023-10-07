"use script";

let names = [];

names.push("Vincent");
names.push("Paul");
names.push("Arthur");

for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + " va a la peche";
    console.log(names[i]);
}
