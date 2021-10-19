



var corordinateList = []

qua1 = qua2 = qua3 = qua4 = 0




// console.log(qua1);



module.exports =  function addCoordinateData(x,y) {
    console.log([x,y]);
    corordinateList.push([x,y]);
    console.log(corordinateList);
}


module.exports =  function printDatabase() {
    // corordinateList.push([x,y]);
    console.log(corordinateList);
}




