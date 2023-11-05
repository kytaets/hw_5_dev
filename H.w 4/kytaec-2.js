class Vector {

    constructor(coordinates) {
        this.matrix = coordinates;
    }

    checkError(vector){
        if(this.matrix.length !== vector.matrix.length)
            throw new Error("Different lengths of vectors");
    }

    add(vector2){
        this.checkError(vector2);
        return new Vector(this.matrix.map((element, index) => element + vector2.matrix[index]));
    }

    subtract(vector2){
        this.checkError(vector2);
        return new Vector(this.matrix.map((element, index) => element - vector2.matrix[index]));
    }

    dot(vector2){
        this.checkError(vector2);
        const result = this.matrix.map((element, index) => element * vector2.matrix[index]);
        return result.reduce((i,j) => i+j);
    }

    norm(){
        const result = this.matrix.map((element) => element ** 2);
        return Math.sqrt(result.reduce((i,j) => i+j));
    }

    equals(vector2){
        for(const i in vector2.matrix) {
            if (this.matrix[i] !== vector2.matrix[i])
                return false;
        }
        return true;
    }

    toString(){
        return `(${this.matrix.join(',')})`;
    }
}
