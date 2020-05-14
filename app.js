function exec() {
  const num = parseInt(prompt('Inserisci un numero..', '0'));

  if (!isNaN(num)) {
    document.getElementById('num').innerHTML = `[ ${num} ]`;
    var nums = [];

    if (num > 1) {
      for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
          nums.push(i);
        }
      }
    } else if (num == 1) {
      nums.push(1);
    } else {
      nums = null;
    }

    if (nums != null) {
      document.getElementById(
        'solution'
      ).innerHTML = `${num} è divisibile per `;
      for (let i = 0; i < nums.length; i++) {
        if (i == nums.length - 1) {
          if (nums.length == 1) {
            document.getElementById('solution').innerHTML += `${nums[i]} `;
          } else {
            document.getElementById('solution').innerHTML += `e ${nums[i]} `;
          }
        } else if (i == nums.length - 2) {
          document.getElementById('solution').innerHTML += `${nums[i]} `;
        } else {
          document.getElementById('solution').innerHTML += `${nums[i]}, `;
        }
      }
    } else {
      document.getElementById('solution').innerHTML = 'non ha divisori';
    }
  } else {
    document.getElementById('num').innerHTML = '?';
    document.getElementById('solution').innerHTML = 'invalid input';
  }
}
