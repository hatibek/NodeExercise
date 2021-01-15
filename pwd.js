function pwd(){
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  
process.stdout.write('You typed: ' + cmd);
  if (cmd === 'pwd') {
    
    console.log('\n', __dirname);
  }
  process.stdout.write('\nprompt > ');
})
}

module.exports = pwd;