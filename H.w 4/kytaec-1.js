class VigenèreCipher {

    constructor(key,abc) {
        this.key = key;
        this.abc = abc;
    }

    keyWord(text) {
        let j = 0;
        let result = '';
        for(let i = 0; i < text.length; i++){
            if(j >= this.key.length)
                j = 0;

            result += this.key[j];
            j++;
        }
        return result;
    }

    base (text, type) {
        let coded_word = this.keyWord(text);
        let i = 0;
        let result = '';

        for(const index of coded_word){

            if (this.abc.indexOf(text[i]) === -1)
                result += text[i];
            else {
                const num = this.abc.indexOf(index);
                let abc_tmp = this.abc.slice(num) + this.abc.slice(0, num);

                if(type)
                    result += abc_tmp[this.abc.indexOf(text[i])];
                else
                    result += this.abc[abc_tmp.indexOf(text[i])];
            }
            i++;
        }
        return result;
    }

    encode(text) {
        return this.base(text, 1);
    }
    decode(text){
        return this.base(text, 0);
    }
}
