console.log(rageButton);
rageButton.onclick = function() {
    MoveAndClose()
}

var count = 0;

function MoveAndClose() {
    if(count == 0) {
        ads.classList.toggle("show");  
    }    
    else {
        var lbStyle = window.getComputedStyle(rageButton);
        var topValue = lbStyle.getPropertyValue("top").replace("px", "");
        rageButton.style.top = (Number(topValue) + + getRandomInt(200)-100) + "px";

        var lbStyle = window.getComputedStyle(rageButton);
        var rightValue = lbStyle.getPropertyValue("right").replace("px", "");
        rageButton.style.right = (Number(rightValue) + getRandomInt(200)-100) + "px";
        count--;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }