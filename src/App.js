import Controller from './controllers/Controller.js';

class App {
  async run() {
    await new Controller().run();
  }
}

export default App;
