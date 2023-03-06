const result = document.getElementById('img');
let task_json = `
    [{
        "taskName": "Cooking",
        "image": "/image/img1.png",
        "description": "Cooking whit my family",
        "importance": "0"
    } ,
    {
        "taskName": "Walk ",
        "image": "/image/img2.png",
        "description": "Walk with my Dog",
        "importance": "0"
    },
    {
        "taskName": "Fitness",
        "image": "/image/img3.png",
        "description": "Monady,Wednesday,Friday from 17:00 till 18:00",
        "importance": "0"
    },
    {
        "taskName": "Sopping",
        "image": "/image/img4.png",
        "description": "Buy grocerys  ",
        "importance": "0"
    },
    {
        "taskName": "Meet my friends",
        "image": "/image/img5.png",
        "description": "Meet Anna, Karl, Lisa",
        "importance": "0"
    },{
        "taskName": "Spa Day",
        "image": "/image/img6.png",
        "description": "Spa day with Karl",
        "importance": "0"
    },{
        "taskName": "Car wash",
        "image": "/image/img7.png",
        "description": "Bring the car to CarWash",
        "importance": "0"
    },{
        "taskName": "Chlotes to wash",
        "image": "/image/img8.png",
        "description": "Wash the Chlotes",
        "importance": "0"
    },{
        "taskName": "Clean",
        "image": "/image/img9.png",
        "description": "Clean the flat",
        "importance": "0"
    }
]`
const task2 = JSON.parse(task_json);
for (let i = 0; i < task2.length; i++) {
    result.innerHTML +=
        `<div class="card shadow-lg p-2 mb-5 bg-body-tertiary rounded" style="width: 25rem;">
        <p><button type="button" class="btn btn-primary hover">Task</button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill float-end mt-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list float-end mt-2" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg></p>
<img src="${task2[i].image}" height="200" width="200" class="card-img-top p-1  border" alt="${task2[i].taskName}">
<div class="card-body">
  <h5 class="card-title">${task2[i].taskName}</h5>
  <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> Priority level: <button type="button"  class="btn btn-success numBtn"><p class="card-text numerBtn">${task2[i].importance}</p></button>
<hr>
<button type="button"  class=" mx-5 btn btn-danger karte">Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill " viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
  <p class="mt-3 btn btn-warning showMore">Show more info <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg></p>
  <p>Date:10.02.2023</p>
</div>
</div>`
}
const btn = document.getElementsByClassName('numBtn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        task2[i].importance++
            document.getElementsByClassName('numerBtn')[i].innerHTML = task2[i].importance;
    })
}
let buttons = document.querySelectorAll(".showMore");
for (let i = 0; i< buttons.length; i++ ){
    buttons[i].addEventListener("click", function(){
        result.innerHTML += `<div class="card" style="width: 30rem;">
        <img src="${task2[i].image}" height="200" width="200" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${task2[i].taskName}</h5>
          <p class="card-text">${task2[i].description}</p>
          <a href="#" class="btn btn-primary">Done</a><br>
        </div>
        </div>`
    })
}
let btns = document.getElementsByClassName("showMore");
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        document.getElementById("showmore").innerHTML = `${task2[i].description}`;
    })
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        if (task2[i].importance === 3) {
            this.style.backgroundColor = "green";
        }else if (task2[i].importance === 4){
            this.style.backgroundColor = "yellow";
        }else if (task2[i].importance === 6){
            this.style.backgroundColor = "red";
        }
    })
}
function removeImage() {
    this.remove()
}
const tuz = document.getElementsByClassName("karte")
for (let i = 0; i < tuz.length; i++) {
    tuz[i].addEventListener('click', removeImage)
}

setInterval(setClock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondhand, secondsRatio)
    setRotation(minutehand, minutesRatio)
    setRotation(hourhand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio *360)
}

setClock()