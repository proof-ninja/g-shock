//GASのAPIのURL（各自変更してください。）
const endpoint =
  "https://script.google.com/macros/s/AKfycbxzldA3tsLwXsAKuZE7K7cypitVRP3j1-_quoNtw_7pkqkEy1dHRd7o3x8WiT0b3FLguQ/exec";
//APIを使って非同期データを取得する
fetch(endpoint)
  .then(response => response.json())
  /*成功した処理*/
  .then(data => {
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
      document.getElementById('myChart'),
      config
      );
  })


