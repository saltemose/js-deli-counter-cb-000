function takeANumber(line, name){
  var num = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(line){
  while (line.length > 0){
    return `Currently serving ${line[0]}.`
    line.slice()
  }
  return "There is nobody waiting to be served!"
}

function currentLine(line){
  var lineSentence = ["The line is currently:"]
  var lineArray = []
  var i = 0
  for (i=0; i < line.length; i++){
    lineArray.push(` ${[i+1]}. ${line[i]}`)
  };
  lineArray.join(", ")
  lineSentence.push(lineArray)
  return lineSentence.join(" ")
}
