let myChart = document.getElementById("myChart").getContext('2d');
let btn = document.querySelector('.btn');
let firstRandomValue = document.getElementById('first_rand');
let secRandomValue = document.getElementById('sec_rand');
let thirdRandomValue = document.getElementById('third_rand');
let fourthRandomValue = document.getElementById('fourth_rand');
let numOfTrails = document.getElementById('trails');
let average = document.querySelector('.avg');
let variance = document.querySelector('.variance');
let  arr = [];

let countFirst = 0;
let countSecond = 0;
let countThird = 0;
let countForth = 0;
let countFifth = 0;

let frequencyFirst;
let frequencySec;
let frequencyThird;
let frequencyFourth;
let frequencyFifth;


let config = {
    type: 'scatter',
    data: {
        datasets: [{
            label: "#Lap9",
            showLine: true,
            data: [],
            pointRadius: 1,
            borderColor: '#f44336'
        }]
    },
    options: {
        animation: {
            duration: 0 // general animation time
        },
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    drawTicks: false
                },
            }],
            yAxes: [{

                gridLines: {
                    drawTicks: false
                }
            }]
        }
    }
};


window.onload = function () {
    window.myLine = new Chart(myChart, config);

};



function randomNumber() {
    for(let i = 0 ; i < 20 ; i++){
        let num = Math.floor((Math.random() * 10) + 1);
        arr.push(num);
    }
}

randomNumber();

btn.addEventListener('click', () =>{
    let num1 = firstRandomValue.value;
    let num2 = secRandomValue.value;
    let num3 = thirdRandomValue.value;
    let num4 = fourthRandomValue.value;
    let num5 = Math.floor((Math.random() * 10) + 1);
    let numTrails = numOfTrails.value;
    for (let i = 0 ; i < arr.length; i++){
        if(arr[i] === Number(num1)){
            countFirst +=1;
        }
        if(arr[i] === Number(num2)){
            countSecond +=1;
        }
        if(arr[i] === Number(num3)){
            countThird += 1 ;
        }
        if(arr[i] === Number(num4)){
            countForth += 1;
        }
        if(arr[i] === num5){
            countFifth += 1;
        }
    }

    frequencyFirst = countFirst / numTrails;
    frequencySec = countSecond / numTrails;
    frequencyThird = countThird  / numTrails;
    frequencyFourth = countForth / numTrails;
    frequencyFifth = countFifth / numTrails;
    let pi = (frequencyFirst+frequencySec+frequencyThird+frequencyFourth+frequencyFifth);
    let x = countFirst+countSecond+countThird+countForth+countFifth;
    let ex = pi*x;
    let avg = document.createElement('p');
    avg.textContent = `${ex}`;
    average.appendChild(avg);

    let varianceText = document.createElement('p');
    varianceText.textContent = `${ex*2}`;
    variance.appendChild(varianceText);
    addData(myLine,frequencyFirst,countFirst);
    addData(myLine,frequencySec,countSecond);
    addData(myLine,frequencyThird,countThird);
    addData(myLine,frequencyFourth,countForth);


})



function addData(chart,x1,y1) {
    pushData(chart, x1, y1);
    chart.update();
}

function pushData(chart, x1, y1) {
    chart.data.datasets[0].data.push({x: x1, y: y1});
}
