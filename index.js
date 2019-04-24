function takeANumber(line, name){
  var num = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(line){
  while (line.length > 0){
    return `Currently serving ${line[0]}.`
    line.shift()
  }
  return "There is nobody waiting to be served!"
}

function currentLine(line){

}
