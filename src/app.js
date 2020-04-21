class App {
  constructor() {
    this.initApp();
  }
  
  initApp() {
    document.querySelector('.app').innerHTML = '<h2>Hello World</h2>';
  }
}

const app = new App();