#!/usr/bin/env node

'use strict';

const meow = require('meow');
const split = require('split');

const RegexpStream = require('regexp-stream');

const cli = meow(`

  Usage
    $ grepex '<pattern>'

    Only outputs matched capture groups, e.g. patterns in parentheses.
    Testing pattern against each line, outputting one line per matched substring.

  Options
    -g, --global
    -i, --ignore-case

    -h, --help

  Example
    $: ls -Al | grepex '^[drwx-]{10}.+\s(.+)$'

`, {
  alias: {
    g: 'global',
    i: 'ignoreCase',
    h: 'help'
  }
});

if (cli.input.length !== 1) {
  cli.showHelp(0);
}

const regexpFlags = Object.keys(cli.flags).filter(f => f.length === 1).join('');
const regex = new RegexpStream(cli.input[0], regexpFlags);

process.stdin
  .pipe(split())
  .pipe(regex)
  .pipe(process.stdout);
