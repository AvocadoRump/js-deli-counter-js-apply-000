function takeANumber(currentLine, newPerson) {
  let place = currentLine.length + 1;
  return `Welcome, ${newPerson}. You are number ${place} in line.`
}

function nowServing(currentLine) {
  if (!currentLine.length) {
    return 'The line is currently empty.'
  }
  let serveNow = currentLine[0];
  currentLine.shift();
  return `Currently serving ${serveNow}.`
}

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.'
  }

  let retStr = 'The line is currently: ';

  line.forEach( function(person, i){
    ret += `${i + 1}. ${person}, `
  })
  return ret;
}
