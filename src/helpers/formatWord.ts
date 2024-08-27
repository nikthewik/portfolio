function formatWord(word: string): string {
  const newWord = word.split(" ").join("").toLowerCase();
  return newWord;
}

export { formatWord };