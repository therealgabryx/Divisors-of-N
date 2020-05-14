function exec() {
  const numInt = parseInt(prompt('Inserisci un numero..', '0'));
  let divisori = []
  for (let i = 1; i <= numInt; i++) {
    if (numInt % i == 0) {
      alert(`${numInt} e' divisibile per ${i}`);
      divisori.push(i)
    }
  }
  document.write(`${numInt} e' divisibile per ${divisori}`)
}
