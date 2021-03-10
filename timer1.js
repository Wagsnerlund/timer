const args = process.argv.slice(2).sort(function (a, b) {
  return a - b;
});
const timer = () => {
  if (args && args.length > 0) {

    for (let i = 0; i < args.length; i++) {
      if (i < args.length) {
        const interval = args[i];
        setTimeout(beep, interval * 1000)
      }
    }
  }
}
function beep() {
  process.stdout.write('.');
};
timer();

// const spinner = () => {
//   if (i < spin.length) {
//     process.stdout.write(spin[i]);
//     i++;
//     setTimeout(spinner, interval);
//   } else {
//     process.stdout.write('\n');
//   }
// };

// setTimeout(() => {
//   process.stdout.write('.');
// }, 1000)

// process.stdout.write('\u0007');

