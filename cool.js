function generateBingoCard() {
    const bingoTable = document.getElementById("bingoTable");
    const columns = [
        generateUniqueNumbers(1, 15),
        generateUniqueNumbers(16, 30),
        generateUniqueNumbers(31, 45),
        generateUniqueNumbers(46, 60),
        generateUniqueNumbers(61, 75)
    ];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (row === 2 && col === 2) continue;
            bingoTable.rows[row + 1].cells[col].innerText = columns[col][row];
        }
    }
}

function generateUniqueNumbers(min, max) {
    const numbers = new Set();
    while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return [...numbers];
}
