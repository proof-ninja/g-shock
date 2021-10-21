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
  })