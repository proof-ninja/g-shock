function fetchVix() {
  const url = "https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VIX";
  return fetch(url);
}

function showGraph(label, element_id, data,length) {
  //JSONから配列に変換
  const candle = data;
  console.log(candle);
  console.log(candle[0].Date);
  if(length == `0`){
    length = candle.length ;
  } else {
    length = length ;
  }
  const object = candle.slice(-length); 
  console.log(object);
  console.log(object[0].Date);
  const labels = object.map( (candle) => candle.Date);
  console.log(candle);
  console.log(labels);
  const Close = object.map( (candle) => candle.Close);
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
  const mychart = new Chart(
    document.getElementById(element_id),
    config);
  return;
};

days_per_week = 5;
Weeks_per_year = 52;
function buttonClick() {
  if (timesSelect.value == 'oneyear') {
    length = days_per_week*Weeks_per_year ;
  }
  else if (timesSelect.value == 'fiveyears') {
    length = 5*days_per_week*Weeks_per_year ;
  }
  else if (timesSelect.value == 'fulltime') {
    length = 0 ;
  }
  fetchVix()
  .then(response => response.json())
  .then(data => {
    showGraph("VIX Chart", "mychart", data,length);
      });
}

let timesSelect = document.getElementById('times');
timesSelect.options[0].selected = true;

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);
console.log(timesSelect.value);

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