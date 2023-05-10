// async function delay() {
//     const delayTime = Date.now() +2000;
//     while (Date.now() < delayTime) {}
//     return 'B';
// }

// console.log('A');
// delay().then(b => console.log(b));
// console.log('C');

// function myDelay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function getA() {
//     myDelay(1000);
//     return 'A';
// }

// function getB() {
//     myDelay(2000);
//     return 'B';
// }

// console.log(getA() + getB())

// // function getAll() {
// //     getA()
// //     .then(strA => {
// //         return getB()
// //             .then(strB => console.log(`${strA} : ${strB}`))
// //     })
// // }

// async function getAllAsync() {
//     const strA = await getA();
//     const strB = await getB();
//     console.log(`${strA} : ${strB}`);
// }

// // getAllAsync();

// async function getAllAsyncPromis() {
//     Promise.all([getA(), getB()])
//     .then(all => all.join(' : '))
// }

// getAllAsyncPromis();