class Fetch {
  constructor () {
    this.lastResponse = null;
  }

  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',
      blocks: [
        {
          opcode: 'XYSize',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Size [WIDTH][HEIGHT]',
          arguments: {
            WIDTH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
			HEIGHT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        }
      ]
    };
  }

    XYSize (args, util) {
        util.target.setSize(WIDTH, HEIGHT);
    }
}

Scratch.extensions.register(new Fetch());
