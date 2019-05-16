const chalk = require('chalk');
const spawn = require('child_process').spawnSync;

module.exports = {
  new(directory, options) {
    console.log(chalk.green('Thanks for using Puzzle!'));
    console.log(chalk.green(`Creating new directory: ${directory}`));

    spawn(`mkdir ${directory}`, [], {
      shell: true,
      stdio: 'inherit',
    });

    console.log(chalk.yellow('Installing Jigsaw. This may take some time.'));

    spawn(`cd ${directory} && composer require tightenco/jigsaw`, [], {
      shell: true,
      stdio: 'inherit',
    });

    console.log(chalk.yellow('Initializing project...'));

    spawn(`cd ${directory} && ./vendor/bin/jigsaw init geoffselby/puzzle-${options.preset}-preset`, [], {
      shell: true,
      stdio: 'inherit',
    });
  },
};
