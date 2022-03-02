function fetchVix() {
  const url = "https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VIX";
  return fetch(url);
}

function showGraph(label, element_id, data,length1) {
  //JSONから配列に変換
  const object = data;
  console.log(object);
  console.log(object[0].Date);
  const labels = [];
  for (let i = length1; i < object.length; i++) {
    labels[i+1-length1] = object[i].Date;
  }
  const data1 = [];
  for (let i = length1; i < object.length; i++) {
    data1[i+1-length1] = object[i].Close;
  }
  console.log(labels);
  console.log(data1);
  const data2 = {
    labels: labels,
    datasets: [{
      label: label,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: data1,
    }]
  };
  console.log(data2);
  const config = {
    type: 'line',
    data: data2,
    options: {}
  };
  const myChart1 = new Chart(
    document.getElementById(element_id),
    config);
  return;
};

function buttonClick() {
  if (timesSelect.value == 'fulltime') {
    fetchVix()
        .then(response => response.json())
        .then(data => {
          showGraph("VIX Chart", "myChart1", data,100);
        });
  }
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
//       showGraph("VIX Chart", "myChart1", data);
//     });
//   fetchVXN()
//     .then(response => response.json())
//     .then(data => {
//       showGraph("VXN Chart", "myChart2", data);
//     });
// });