const logo2 = document.querySelectorAll("#logo2 path");


for (let i = 0; i < logo2.length; i++) {
    console.log(`Letter ${i} is ${logo2[i].getTotalLength()}`);
}
