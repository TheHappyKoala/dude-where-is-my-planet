const npm = require('npm');
const emoji = require('node-emoji');

npm.load(error => {
  if (error) throw error;

  npm.commands.run(['tsc'], (error) => {
    if (error) throw error;

    console.log('\x1b[32m', emoji.emojify('TypeScript has been compiled into plain old JS :weight_lifter:'));
  });
});

   