interface ColorConsole {
  log(input: string);
}

export class RedConsole implements ColorConsole {
  log(input: string) {
    console.error(`This is red: ${input}`);
  }
}

export function consoleFactory(color: string): ColorConsole {
  switch (color) {
    case 'red':
      return new RedConsole();
    default:
      throw new Error('Not supported');
  }
}
