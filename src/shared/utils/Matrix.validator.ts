export const matrixValidate = (matrix: string): boolean =>  {
    if (matrix[0] !== '[' || matrix[1] !== '[' || matrix[matrix.length - 1] !== ']' || matrix[matrix.length - 2] !== ']') {
        return false;
    }

    if (/[a-zA-Z]/.test(matrix)) {
        return false;
    }
}