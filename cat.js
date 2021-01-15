const fs = require('fs');

function cat(__filename) {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd);

    if (cmd === 'cat' + __filename) {
      console.log('IS THIS RUNNING');
      fs.readFile(__filename, 'utf8', (err, file) => {
        if (err) {
          throw err;
        } else {
          console.log(file);
          process.stdout.write('\n prompt > ');
        }
      });
    }
  });
}

module.exports = cat;
