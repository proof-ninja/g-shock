function fetchVix() {
  const url = "https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VIX";
  return fetch(url);
}

function showGraph(label, element_id, data, length) {
  var myChart;
  //JSONから配列に変換
  const candle = data;
  console.log(candle);
  console.log(candle[0].Date);
  if (length == `0`) {
    length = candle.length;
  } else {
    length = length;
  }
  const CandleDuration = candle.slice(-length);
  console.log(CandleDuration);
  console.log(CandleDuration[0].Date);
  const labels = CandleDuration.map((candle) => candle.Date);
  console.log(candle);
  console.log(labels);
  const Close = CandleDuration.map((candle) => candle.Close);
  console.log(Close);
  const Drawingdata = {
    labels: labels,
    datasets: [{
      label: label,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: Close,
    }]
  };
  console.log(Drawingdata);
  const config = {
    type: 'line',
    data: Drawingdata,
    options: {}
  };
  myChart = new Chart(
    document.getElementById(element_id),
    config);
  };

days_per_week = 5;
Weeks_per_year = 52;
function buttonClick() {
  if (timesSelect.value == '2') {
    length = days_per_week * Weeks_per_year;
  }
  else if (timesSelect.value == '1') {
    length = 5 * days_per_week * Weeks_per_year;
  }
  else if (timesSelect.value == '0') {
    length = 0;
  }
  else if (timesSelect.value == '3') {
    document.write('<img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />');
  }
  fetchVix()
    .then(response => response.json())
    .then(data => {
      showGraph("VIX Chart", "myChart", data, length);
    });
}
window.onload = function() {
  times = document.getElementById("times");
  // ジャンルの選択肢が変更された際の動作
  category = document.getElementById("category");
  category.onchange = changeCategory;
}
// ジャンルの選択肢が変更された際の動作
function changeCategory() {
  // 変更後のカテゴリを取得
  var changedCategory = category.value;
  if (changedCategory == "0") {
    // カテゴリにVIXが選択された場合
    setvix();
  } else {(changedCategory == "1") 
    // カテゴリにBTCが選択された場合
    setbtcFG();
  } 
}
// vixの期間を設定する
function setvix() {
  // 期間の選択肢を空にする
  times.textContent = null;
  // 期間の選択肢
  var vixtimes = [
    {cd:"", label:"選択して下さい"},
    {cd:"0", label:"全期間"},
    {cd:"1", label:"5年間"},
    {cd:"2", label:"1年間"}
  ];
  vixtimes.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    times.appendChild(op);
  });
}
// btcの期間を設定する
function setbtcFG() {
  // 期間の選択肢を空にする
  times.textContent = null;
  // 期間の選択肢
  var btctimes = [
    {cd:"", label:"選択して下さい"},
    {cd:"3", label:"今"},
  ];
  btctimes.forEach(function(value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    times.appendChild(op);
  });
}
let timesSelect = document.getElementById('times');
timesSelect.options[0].selected = true;

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);
checkButton.onclick = function() {
  // すでにグラフ（インスタンス）が生成されている場合は、グラフを破棄する
  if (myChart) {
    myChart.destroy();
  }
}
console.log(timesSelect);

function fetchVXN() {
  const url = "https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VXN";
  return fetch(url);
}


// window.addEventListener('load', (event) => {
//   const spinner = document.getElementById('loading');
//   // Add .loaded to .loading
//   spinner.classList.add('loaded');
//   fetchVix()
//     .then(response => response.json())
//     .then(data => {
//       showGraph("VIX Chart", "mychart", data);
//     });
//   fetchVXN()
//     .then(response => response.json())
//     .then(data => {
//       showGraph("VXN Chart", "myChart2", data);
//     });
// });