const Mission1 = (numLit) => numLit.filter(n => n % 2 == 0);
const Mission2 = (str) => str.split(" ").filter(w => w.length == 4).length
const Mission3 = (matr) => matr.flatMap(a => a)
const Mission4 = (numList) => {
    let up = false
    let daun = false
    for (let i = 0; i < numList.length - 2; i++) {
        if (numList[i] < numList[i + 1]) { up = true }
        if (numList[i] > numList[i + 1]) { daun = true }
    }
    if (up == true && daun == false) { return 1 }
    if (up == false && daun == true) { return 2 }
    return 0
}


module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}
//without 5 tnd 6
