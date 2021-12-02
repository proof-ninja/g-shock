function fetchVix() {
  const url = "https://script.google.com/macros/s/AKfycbxzldA3tsLwXsAKuZE7K7cypitVRP3j1-_quoNtw_7pkqkEy1dHRd7o3x8WiT0b3FLguQ/exec";
  return fetch(url).then(response => response.json());
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
        label: 'VIX Chart',
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
    const myChart = new Chart(
    document.getElementById(element_id),
    config);
};
window.addEventListener('load', (event) => {
  fetchVix().then(data => {
    showGraph("VIX Chart", data);
  });
});
