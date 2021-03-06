/**
 * Options that can be parsed to stringParse
 */
module.exports = {
  type: {
    split: {
      description: 'Characters or regular expression to split string on',
      types: {
        string: {
          type: 'string',
        },
        regex: {
          type: 'RegExp'
        }
      }
    },
    storeSplit: {
      description: 'Whether or not to store the split character. If true, '
          + 'the split character will be it\'s own element in the returned '
          + 'array.',
      type: 'boolean'
    },
    stripChars: {
      description: 'Characters or regular expression expressions to strip '
          + 'from outside of blocks',
      types: {
        string: {
          type: 'string',
        },
        regex: {
          type: 'RegExp'
        }
      },
      multiple: true,
      object: true
    },
    blocks: {
      description: 'An object containing blocks (like quoted blocks) to not '
          + 'split in',
      type: {
        start: {
          description: 'Characters that start the block',
          type: 'string'
        },
        escapedStart: {
          description: 'Characters that are used to represent an escaped '
              + 'version of the start block characters outside of a block',
          type: 'string'
        },
        stop: {
          description: 'Characters that end the block',
          type: 'string'
        },
        escapedStop: {
          description: 'Characters that are used to represent an escaped '
              + 'version of the end block characters within a block',
          type: 'string'
        },
        keepStartStop: {
          description: 'Whether or not to the start and stop characters. The '
              + 'start and stop characters will be separate elements in the '
              + 'returned parts array',
          type: 'boolean'
        },
        replaceEscapes: {
          description: 'Whether or not to replace the escaped block '
              + 'characters with the actual block characters (eg \\" to ") '
              + 'in the returned string',
          type: 'boolean'
        },
        split: {
          description: 'Characters or regular expression to split the block '
              + 'on',
          types: { '$ref': '/type/split/types' }
        },
        storeSplit: { '$ref': '/type/storeSplit' },
        ignoreEmpty: {
          description: 'Whether to ignore empty splits',
          type: 'boolean'
        },
        blocks: { '$ref': '/type/blocks' },
        handle: {
          description: 'Function to call once a block has been completed. '
              + 'The function will be passed the block as the only parameter. '
              + 'If the `split` option is specified, the parameter will be an '
              + 'array containing the parts of the block. If the `replace` '
              + 'option is `true`, the block start and stop characters '
              + 'will be stripped from the block before it is passed to the '
              + 'function. The function should return the parsed value back.',
          type: 'function'
        },
        reparse: {
          description: 'Whether or not to reparse the returned value from the '
              + 'handle function.',
          type: 'boolean'
        }
      },
      multiple: true,
      object: true
    },
    handle: {
      description: 'The function to pass all non-block and non-handled block '
          + 'strings to. The function will be given the string as the first '
          + 'parameter',
      type: 'function'
    },
    handleAll: {
      description: 'Whether or not to call the handle function for blocks as '
          + 'well as non-blocks',
      type: 'boolean'
    },
    debug: {
      description: 'If true, the string and any special characters (block '
          + 'characters, split characters etc) will be printed to `stdout`'
          + 'while parsing the string',
      types: {
        verbose: {
          type: 'boolean'
        },
        debug: {
          type: 'number',
          values: [1]
        }
      }
    }
  }
};

