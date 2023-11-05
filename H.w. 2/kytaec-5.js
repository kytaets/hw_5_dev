const getRootProperty = (object,number) => {
    let result = false;
    const find_array = (item,number) => {
        if(Array.isArray(item)){
            if(item.includes(number))
                result = true;
        }
        else
            for(let i of Object.values(item))
                find_array(i, number);
    }

    for(let key of Object.keys(object)){
        const property = object[key];
        find_array(property,number);
        if(result)
            return key;
    }

    return null;
}

