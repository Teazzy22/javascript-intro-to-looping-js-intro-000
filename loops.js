function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
  }
    return "done";
}

function doWhileLoop(integer) {
  let integer = 0;
  integer++;
  return integer;
  do {
    console.log('I run once regardless.');
  } while (integer < 10);

  console.log('I run once regardless.');
}
