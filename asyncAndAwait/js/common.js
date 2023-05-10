function delay() {
    const delayTime = Date.now() +2000;
    while (Date.now() < delayTime) { }
    console.log('B');
}
console.log('A');
delay();
console.log('C');


function delay2() {
    return new Promise(
        // function (resolve) {
        //     const dealyTime = Date.now() + 2000;
        //     while (Date.now() < delayTime) { }
        //     resolve('B');
        // }
        (resolve) => {
            const delayTime = Date.now() + 2000;
            while (Date.now() < delayTime) { }
            resolve('B');
        }
        );
    }

console.log('A');
delay2()
.then( b => console.log(b));
console.log('C');