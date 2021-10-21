 lineReader.eachLine('./data.txt',(line,last)=>{
        list.push(line)
        x = line.split(",");


        if ([0] >= 0 && x[1] >= 0)
            qua1 += 1
        else if (x[0] <= 0 && x[1] >= 0)
            qua2 += 1
        else if (x[0] <= 0 && x[1] <= 0)
            qua3 += 1
        else if (x[0] >= 0 && x[1] <= 0)
            qua4 += 1
        
        if(last){
            console.log(qua1+" "+qua2+" "+qua3+" "+qua4)
            fs.truncate('./data.txt', 0, function(){console.log('done')})

        }

        ///console.log(x[0])
    })