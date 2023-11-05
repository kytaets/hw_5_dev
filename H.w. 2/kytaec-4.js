const unpack = (truck) => {
    let result = [];

    for(const box of truck){

        for(let product of box){

            if(!product.startsWith('[') || !product.endsWith(']') || product.length!==6)
                continue;

            product = product.slice(1,-1)
            const check = product[0];
            let group = [];

            for (const sausage of product){

                if(check === sausage)
                    group.push(sausage);

                else {
                    group = false;
                    break;
                }
            }
            if(group)
                result.push(group.join(' '));
        }
    }

    for(let i in result){
        i = Number(i);
        if((i+1)%5===0)
            result.splice(i,1);
    }

    return result.join(' ');
}
