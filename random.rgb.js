// class version
function randomColor() {
  let c = Math.floor(16777216 * Math.random());
  c = c.toString(16); // 轉換為 16 進位的字串
  return '#' + '000000'.slice(c.length) + c;
}

// my version
const randomRGB = () =>
  Math.floor(16777216 * Math.random())
    .toString(16)
    .padStart(7, '#000000');
