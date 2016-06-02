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

## What I usually use it for

Extracting file paths

    $: l | grep pacman
    -rw-r--r--    1 noop wheel  6.1K Jun  1 17:34 pacman-copy-targets.json
    -rw-r--r--    1 noop wheel  1007 Jun  1 17:38 pacman-move.js
    -rw-r--r--    1 noop wheel  4.9K Jun  1 17:38 pacman-move.sh

    $: l | grep pacman | grepex (\\S+)$
    pacman-copy-targets.json
    pacman-move.js
    pacman-move.sh

When not enclosing the pattern in single-quotes, the escape chars needs to
be escaped themselves. The below lines produce equal results. Watch out if
using double-quotes as they are interpreted and interpolated by bash.

    l | grep pacman | grepex (\\S+)$
    l | grep pacman | grepex '(\S+)$'

## License

CC0-1.0
