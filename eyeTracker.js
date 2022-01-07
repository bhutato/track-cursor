

    let eyeBalls = document.getElementsByClassName("ball");
    document.onmousemove = function(){
      let x = event.clientX * 100 / window.innerWidth ; //get horizontal coordinate of onMouseMove
      let y = event.clientY * 100 / window.innerHeight ;//get vertical coordiante of onMouseMove
      //window.innerWidth gets the browser width
      let a = x + "%";
      let b = y + "%";

      for (let i = 0; i <2; i++){
        eyeBalls[i].style.left = a;
        eyeBalls[i].style.top = b;
        eyeBalls[i].style.transform = "translate(-"+a+",-"+b+")";
        console.log(Math.round(x),Math.round(y))

        // if (Math.round(x)==50 || Math.round(y) == 50){
        //   document.querySelector("#lip-container").classList.add("lips")
        //   document.querySelector("#lip-container").innerHTML= "👄"
        //
        // }
      }
    }
