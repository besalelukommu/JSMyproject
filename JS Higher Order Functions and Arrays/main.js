const companies= [
    { name: "company one", category: "Finance", start: "1981", end: "1989"},
    { name: "company two", category: "Retail", start: "1987", end: "2000"},
    { name: "company three", category: "Auto", start: "1999", end: "2006"},
    { name: "company four", category: "Retail", start: "1985", end: "1999"},
    { name: "company five", category: "Technology", start: "1982", end: "2001"},
    { name: "company six", category: "Retail", start: "1988", end: "2001"},
    { name: "company seven", category: "Finance", start: "1991", end: "2009"},
    { name: "company eight", category: "Auto", start: "1988", end: "1999"},
    { name: "company nine", category: "Retail", start: "1981", end: "1989"}
];

const ages= [33, 21, 15, 14, 10, 21, 34, 56, 34, 65, 66, 53, 39, 40, 41, 55, 64];

// for
// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company){
//     console.log(company);
// });

// filter
// let canDrink = [];
// for(let i=0; i<ages.length; i++){
//     if(ages[i] > 21){
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

//const canDrink = ages.filter(age => age >= 21);

// filter retail companies
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// const startCompany = companies.filter(company => company.start >= 1985);

// console.log(startCompany);

// map
// create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// });

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// })

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// console.log(testMap);
// sort
// sort companies by year
// const sortedCompanies = companies.sort(function(a,b){
//     if(a.start > b.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
//const sortedCompanies = companies.sort((a,b) => (a.start < b.start ? 1 : -1));
// Sort ages
// const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges);

// reduce 
// let ageSum = 0;
// for(i=0; i< ages.length; i++){
//     ageSum += ages[i]; 
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

//const ageSum = ages.reduce((total, age) => total + age, 0);

// Total years for all companies
// const companiesTotal = companies.reduce(function(total, company){
//     return total + (company.end - company.start)
// }, 0);

// const yearTotal = companies.reduce((total, company) => total +(company.end - company.start), 0);
// console.log(yearTotal); 

// COmbaine all methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 42)
    .sort((a, b)=> a - b)
    .reduce((a,b) => a + b, 0);

console.log(combined);