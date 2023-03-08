interface ColorConsole {
  log: (msg: string) => void;
}

class RedConsole implements ColorConsole {
  log(msg: string) {
    console.log('Red', msg);
  }
}

class GreenConsole implements ColorConsole {
  log(msg: string) {
    console.log('Green', msg);
  }
}

class BlueConsole implements ColorConsole {
  log(msg: string) {
    console.log('Blue', msg);
  }
}

interface ColorFactory {
  createConsole(): ColorConsole;
}

class RedConsoleFactory implements ColorFactory {
  createConsole(): ColorConsole {
    return new RedConsole();
  }
}

class GreenConsoleFactory implements ColorFactory {
  createConsole(): ColorConsole {
    return new GreenConsole();
  }
}

class BlueConsoleFactory implements ColorFactory {
  createConsole(): ColorConsole {
    return new BlueConsole();
  }
}

class Application {
  colorFactory: ColorFactory;

  init(color: 'red' | 'green' | 'blue') {
    switch (color) {
      case 'red':
        this.colorFactory = new RedConsoleFactory();
        break;
      case 'green':
        this.colorFactory = new GreenConsoleFactory();
        break;
      case 'blue':
        this.colorFactory = new BlueConsoleFactory();
        break;
      default:
        throw 'Wrong color';
    }
  }

  start() {
    if (!this.colorFactory) throw 'Please first initialize.';
    const console = this.colorFactory.createConsole();
    console.log('Hello');
  }
}

const app = new Application();
app.init('blue');
app.start();
