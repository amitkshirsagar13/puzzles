console.log('Start Processing!!!');
printRow = (array) => {
  let row = array.join([separator = ' ']);
  console.log(row);
}

buildNextRow = (currentRow) => {
  let nextRow = [1];
  for (let index = 0; index < currentRow.length-1; index++) {
    let element = currentRow[index] + currentRow[index+1];
    nextRow.push(element);
  }
  nextRow.push(1);
  return nextRow;
}

buildPascalTringle = (lineCount) => {
  let currentRow = [1]
  for (let index = 0; index < lineCount; index++) {
    if(index < 2) {
      if (index === 1) {
        currentRow.push(1);
      }
    } else {
      currentRow = buildNextRow(currentRow);
    }
    printRow(currentRow);
  }
}

buildPascalTringle(7);
console.log('Finish Processing!!!');