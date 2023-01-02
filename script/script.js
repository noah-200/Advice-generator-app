let num = document.getElementById("num");
let textCont = document.getElementById("txt");
let btn = document.getElementById("btn");

window.onload = fetchApi(num, textCont);

btn.addEventListener('click', () => {
  fetchApi(num, textCont);
});

function fetchApi(IDCont, textCont) {
  fetch("https://type.fit/api/quotes").then((result) => {
    let advicesData = result.json();
    return advicesData;
  }).then((data) => {
    let obj = data[Math.floor(Math.random() * data.length)]
    let chosen = obj.text;
    let i = data.indexOf(obj) + 1;
    IDCont.innerHTML = i;
    textCont.innerHTML = chosen;
  });
};

// fetchApi()