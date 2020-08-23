
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const simple_node = process.env.SIMPLE_NODE;
    console.log(simple_node);
    await sleep(5000);
  }
}

main();
