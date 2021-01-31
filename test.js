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
              defaultValue: 'https://extensions.turbowarp.org/test'
            },
	    HEIGHT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://extensions.turbowarp.org/test'
            }
          }
        }
      ]
    };
  }

  _fetch (url) {
    return fetch(url)
      .then(r => {
        this.lastResponse = r;
        return r;
      });
  }

  get (args) {
    return this._fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
}

Scratch.extensions.register(new Fetch());
