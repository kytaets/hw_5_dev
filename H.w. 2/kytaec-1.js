const largestRadialSum = (honor, d) => {
    const space = honor.length/d;

    let max = -1/0;
    for(let i=0; i<space; i++){
        let group = 0;
        for(let j = i; j<honor.length;j+=space){
            console.log(j)
            group += honor[j];
        }

        if(group>max)
            max = group;
    }
    return max;
}
