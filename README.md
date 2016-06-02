# grepex

## Install

    npm i -g grepex

## CLI

    Usage
      $ grepex '<pattern>'

      Matching line by line, outputs one line per matched substring

    Options
      -g, --global
      -i, --ignore-case

      -h, --help

    Example
      $: ls -Al | node cli.js '^[drwx-]{10}.+\s(.+)$'

## License

CC0-1.0
