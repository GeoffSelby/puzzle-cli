#!/usr/bin/env node

const program = require('commander');
const Puzzle = require('./src/core');

program
  .version('0.0.1')
  .description('Get started using Jigsaw with a single command.');

program
  .command('new [directory]')
  .description('Scaffold a new Jigsaw project.')
  .option('-p, --preset [name]', 'Preset to scaffold', 'plain')
  .action((directory, options) => {
    Puzzle.new(directory, options);
  });

program.parse(process.argv);
