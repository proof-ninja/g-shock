<label for="fruit">選択してください</label>
<select id="fruit">
<option value="orange">Orange</option>
<option value="lemon">Lemon</option>
<option value="strawberry">Strawberry</option>
</select>

function fetchVix() {
  const url = "https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VIX";
  return fetch(url);
}

function showGraph(label, element_id, data) {
  //JSONから配列に変換
  const object = data;
  console.log(object);
  console.log(object[0].Date);
  const labels = [];
  for (let i = 0; i < object.length; i++) {
    labels[i] = object[i].Date;
  }
  const data1 = [];
  for (let i = 0; i < object.length; i++) {
    data1[i] = object[i].Close;
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

function fetchVXN() {
  const url = "https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VXN";
  return fetch(url);
}

window.addEventListener('load', (event) => {
  const spinner = document.getElementById('loading');
  // Add .loaded to .loading
  spinner.classList.add('loaded');
  fetchVix()
    .then(response => response.json())
    .then(data => {
      showGraph("VIX Chart", "myChart1", data);
    });
  fetchVXN()
    .then(response => response.json())
    .then(data => {
      showGraph("VXN Chart", "myChart2", data);
    });
});