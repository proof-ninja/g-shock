function fetchVix1() {
  const url ="https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VIX";
  return fetch(url);
}

function showGraph1(label, element_id, data) {
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
    const myChart1 = new Chart(
    document.getElementById(element_id),
    config);
    return;
};

window.addEventListener('load', (event) => {
  fetchVix1()
      .then(response => response.json())
      .then(data => {
          showGraph1("VIX Chart", "myChart1", data);
      });
});

function fetchVix2() {
  const url ="https://script.google.com/macros/s/AKfycbzUZAdeaXrxmJ-ziBIEFXHx8Nom0Sri3FjTCqqrRkbrkMJnAZdj0qgMSzWzHD8BH0mLVA/exec?ticker=VXN";
  return fetch(url);
}

function showGraph2(label, element_id, data) {
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
        label: 'VXN Chart',
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
    const myChart2 = new Chart(
    document.getElementById(element_id),
    config);
    return;
};

window.addEventListener('load', (event) => {
  fetchVix2()
      .then(response => response.json())
      .then(data => {
          showGraph2("VXN Chart", "myChart2", data);
      });
});
