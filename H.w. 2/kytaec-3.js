const groupAnagrams = (words) => {
    let result = [];

    while(words.length>0){
        let group = [];
        let check1 = words[0].split('').sort().join('');

        for(let word of words){
            const check2 = word.split('').sort().join('');
            if(check2 === check1)
                group.push(word);
        }

        result.push(group);
        for (const i of group) 
            words.splice(words.indexOf(i), 1);

    }
    return result;
}
