const myTime = () => {
  const hour = document.querySelector("#hour");
  const minute = document.querySelector("#minute");
  const second = document.querySelector("#second");
  const ampm = document.querySelector("#ampm");
  let d = new Date();

  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  if (h > 12) {
    h -= 12;
      ampm.textContent = "PM";
      ampm.style.backgroundColor = "green";
  } else {
      ampm.style.backgroundColor = "blue";
    ampm.textContent = "AM";
  }
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
 
  hour.textContent = h;
  minute.textContent = m;
    second.textContent = s;
   setTimeout(() => {
      myTime();
    }, 1000);
};
myTime()



