const clock = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}
setInterval(clock, 1000);

// function showTime(value) {
//   document.getElementById('time-vn').innerHTML = value;
// }
// function showDay(value) {
//   document.getElementById('day-vn').innerHTML = value;
// }


  //---country VN---//
const dayVN = () => {
  const day = new Date().getDate();
  document.getElementById('day-vn').innerHTML = day;
}
dayVN();

const timeVN = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  
  document.getElementById('hours-vn').innerHTML = hours;
  document.getElementById('minutes-vn').innerHTML = minutes;
  document.getElementById('seconds-vn').innerHTML = seconds;
}
setInterval(timeVN, 1000);

//---country Japan---//
const dayJapan = () => {
  const day = new Date().getDate();
  document.getElementById('day-japan').innerHTML = day;
}
dayJapan();

const timeJapan = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  
  document.getElementById('hours-japan').innerHTML = hours + 2;
  document.getElementById('minutes-japan').innerHTML = minutes;
  document.getElementById('seconds-japan').innerHTML = seconds + 5;
}
setInterval(timeJapan, 1000);

//---country USA---//
const dayUSA = () => {
  const day = new Date().getDate();
  document.getElementById('day-USA').innerHTML = day;
}
dayUSA();

const timeUSA = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  
  document.getElementById('hours-USA').innerHTML = hours - 11;
  document.getElementById('minutes-USA').innerHTML = minutes;
  document.getElementById('seconds-USA').innerHTML = seconds + 4;
}
setInterval(timeUSA, 1000);

//---country South Korea---//
const daySouthKorea = () => {
  const day = new Date().getDate();
  document.getElementById('day-SouthKorea').innerHTML = day;
}
daySouthKorea();

const timeSouthKorea = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  
  document.getElementById('hours-SouthKorea').innerHTML = hours + 2;
  document.getElementById('minutes-SouthKorea').innerHTML = minutes;
  document.getElementById('seconds-SouthKorea').innerHTML = seconds + 5;
}
setInterval(timeSouthKorea, 1000);

//---country UK---//
const dayUK = () => {
  const day = new Date().getDate();
  document.getElementById('day-UK').innerHTML = day;
}
dayUK();

const timeUK = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  
  document.getElementById('hours-UK').innerHTML = hours - 7;
  document.getElementById('minutes-UK').innerHTML = minutes;
  document.getElementById('seconds-UK').innerHTML = seconds + 5;
}
setInterval(timeUK, 1000);



const changeButton = document.getElementsByClassName('icon-change');
const worldTimeBtn = document.getElementById('world-time-btn');
const VietnamTimeBtn = document.getElementById('time-vn');
const clockVietNam = document.getElementById('clock');
const worldTime = document.getElementById('world-time');
for (let i = 0; i < changeButton.length; i++) {
  changeButton[i].addEventListener('click', function () {
    if (this.id == 'time-vn') {
      worldTimeBtn.setAttribute('style', 'display:block');
      clockVietNam.setAttribute('style', 'display:block');
      worldTime.setAttribute('style', 'display:none');
      VietnamTimeBtn.setAttribute('style', 'display:none');
    } else {
      worldTimeBtn.setAttribute('style', 'display:none');
      clockVietNam.setAttribute('style', 'display:none');
      worldTime.setAttribute('style', 'display:block');
      VietnamTimeBtn.setAttribute('style', 'display:block');
    }

  });
}
