module.exports = class SimpleBot {

  constructor(config) {
    this.config = config;
  }

  listen(data) {

    console.log(`I listen You! ${this.config.name}`);

  }

};
