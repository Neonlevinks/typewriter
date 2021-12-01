const sentence = "hello there from lighthouse labs";
let writeTime = 50;
let sentenceCount = 0;

for (const character of sentence) {
  
  setTimeout(() => {
    process.stdout.write(character);
    if (sentenceCount === sentence.length -1) {
      process.stdout.write("\n");
    }
    sentenceCount ++;
  }, writeTime);
  writeTime += 50;
}