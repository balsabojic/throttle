const throttle = require('@sitespeed.io/throttle');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class MyThrottle {
  constructor() {}

  startThrottle (up, down, rtt, cb) {
    throttle.start({up: up, down: down, rtt: rtt}).then(() => {
      console.log(`Throttle started up: ${up}, down: ${down}, rtt: ${rtt}`);
      cb();
    });
  }

  stopThrottle () {
    throttle.stop({}).then(() => {
      console.log('Throttle is stopped.')
    });
  }

}

var myThrottle = new MyThrottle();

rl.question('Connection speed: slow (2m), normal (4m), fast(10m) or best(40m)? ', (answer) => {
  switch (answer) {
    case '':
      rl.close();
      break;
    case 'slow':
      myThrottle.startThrottle(2000, 2200, 100, function() {
        rl.question('Stop throttle?', (answer) => {
          myThrottle.stopThrottle();
          rl.close();
        });
      });
      break;
    case 'normal':
      myThrottle.startThrottle(4000, 4300, 50, function() {
        rl.question('Stop throttle?', (answer) => {
          myThrottle.stopThrottle();
          rl.close();
        });
      });
      break;
    case 'fast':
      myThrottle.startThrottle(10000, 10600, 20, function() {
        rl.question('Stop throttle?', (answer) => {
          myThrottle.stopThrottle();
          rl.close();
        });
      });
      break;
      case 'best':
        myThrottle.startThrottle(10000, 40600, 10, function() {
          rl.question('Stop throttle?', (answer) => {
            myThrottle.stopThrottle();
            rl.close();
          });
        });
        break;
    }
});
