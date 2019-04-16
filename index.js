function takeANumber(currentLine, newPerson) {
  let humanWord;
  switch (currentLine.length) {
    case 1: humanWord = '1st'; break;
    case 2: humanWord = '2nd'; break;
    case 3: humanWord = '3rd'; break;
    default: humanWord = `${currentLine}th`;
  }
  return `Welcome, ${newPerson}. You are ${humanWord} in line.`
}

function nowServing(currentLine) {
  if (!currentLine.length) {
    return 'The line is currently empty.'
  }
  let serveNow = currentLine[0];
  currentLine.shift();
  return `Currently serving ${serveNow}.`
}