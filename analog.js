 let hr = document.getElementById('hour');
 let min = document.getElementById('min');
 let sec = document.getElementById('sec');

 function displayTime(){
      let date= new Date();

      //getting hour,min,sec from data
      let hh= date.getHours();
      let mm=date.getMinutes();
      let ss= date.getSeconds();

      let hRotation= 30*hh+mm/2;
      let mRotation= 6*mm;
      let sRotation = 6*ss;


      hr.style.transform=`rotate(${hRotation}deg)`;
      min.style.transform=`rotate(${mRotation}deg)`;
      sec.style.transform=`rotate(${sRotation}deg)`;

 }

 setInterval(displayTime,1000);  







window.onload = () => {
    const toggleBtn = document.getElementById("toggleTheme");

    // Default theme
    document.body.classList.add("dark");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");

        toggleBtn.textContent = document.body.classList.contains("light")
            ? "Switch to Dark"
            : "Switch to Light";
    });
};

