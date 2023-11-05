const find_perimeter = (territory) => {
    let result = 0;
    const rows = territory.length;
    const columns = territory[0].length;

    for (let row = 0; row<rows; row++){

        for (let col = 0; col<columns; col++){

            if(territory[row][col] === 'X'){
                let island_per = 4;

                if(col < columns-1 && territory[row][col+1] === 'X')
                    island_per--;
                if(row < rows-1 && territory[row+1][col] === 'X')
                    island_per--;
                if(col > 0 && territory[row][col-1] === 'X')
                    island_per--;
                if(row > 0 && territory[row-1][col] === 'X')
                    island_per--;

                result += island_per;
            }

        }
    }
    return result;
}
