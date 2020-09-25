let player1 = prompt('Player One: Enter Your Name, you will be Blue');
let player1Color = 'rgb(86,151,255)';

let player2 = prompt('Player Two: Enter Your Name, you will be Red');
let player2Color = 'rgb(237,45,73)';

let game_on = true;
let table = $('table tr');

function reportWin(rowNum, colNum) {
  console.log('You won start at this row, col');
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color) {
  return table
    .eq(rowIndex)
    .find('td')
    .eq(colIndex)
    .find('button')
    .css('background-color', color);
}

function returnColor(rowIndex, colIndex) {
  return table
    .eq(rowIndex)
    .find('td')
    .eq(colIndex)
    .find('button')
    .css('background-color');
}

function checkBottom(colIndex) {
  let colorReport = returnColor(5, colIndex);
  for (let row = 5; row > -1; row--) {
    colorReport = returnColor(row, colIndex);
    if (colorReport === 'rgb(128, 128, 128)') {
      return row;
    }
  }
}

function colorMatchCheck(one, two, three, four) {
  return (
    one === two &&
    one === three &&
    one === four &&
    one !== 'rgb(128,128,128)' &&
    one !== undefined
  );
}
