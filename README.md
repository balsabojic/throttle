# throttle

Throttle script is used to simulate throttlign from the command line.

Before using it make sure you have installed node and npm.

To run the script please run in terminal: <br>
`node throttle-custom.js`

After running the script you will be aksed to type which kind of connection you want to run: <br>
`Connection speed: slow (1m), normal (4m), fast(10m) or best(40m)?` <br>

Let's assume you want to simulate the 2 Mbit/s connection speed, the type slow in terminal: <br>
`Connection speed: slow (1m), normal (4m), fast(10m) or best(40m)? slow` <br>

The throttling should be started you will see the message: <br>
`Throttle started up: 2000, down: 2200, rtt: 100` <br>
`Stop throttle?`

If you want to stop throttling you can just press enter any time.

The wrpper class is defined as:
```node
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
```

If you want to add the custom bandwidth speed, you can do it by changing one of the methods:
```node
myThrottle.startThrottle(2000, 2200, 100, function() {
  rl.question('Stop throttle?', (answer) => {
    myThrottle.stopThrottle();
    rl.close();
  });
});
```

If you want to test whether throttle works, you can use this tool: https://github.com/sivel/speedtest-cli.
