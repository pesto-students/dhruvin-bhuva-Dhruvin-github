

function getSpiralOrderMatrix(matrix){

    var row = (currentrow = matrix.length);
    var column = (currentcolumn = matrix[0].length);

    var finalMatrix = [];

    while (currentrow > row/2) {
        

        //for going forward

        for (let i = column-currentcolumn; i < currentcolumn; i++) {

            finalMatrix.push(matrix[row-currentrow][i]);            

        }

        //for going downward
        for (let i = (row-currentrow) + 1; i < currentrow; i++) {

            finalMatrix.push(matrix[i][currentcolumn - 1])

        }

        //for going backward

        for (let i = currentcolumn - 1; i > column-currentcolumn; i--) {

               finalMatrix.push(matrix[currentrow - 1][i -1]);  

        }

        //for going upward

        for (let i = currentrow - 1; i > row-currentrow + 1; i--) {

            finalMatrix.push(matrix[i-1][column-currentcolumn]);

        }


        currentcolumn--
        currentrow--
    }

    console.log(finalMatrix);

}

getSpiralOrderMatrix([
    [1, 2, 3, 4],
    [14, 15, 16, 5],
    [13, 20, 17, 6],
    [12, 19, 18, 7],
    [11, 10, 9, 8],
  ]);
