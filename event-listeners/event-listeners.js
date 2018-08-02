// YOUR TASK: Add more pictures!
var pictures = ['./imgs/1.jpg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

src="./event-listeners.js">
    function changeImg(obj){	
    	obj.innerHTML = "./imgs/1.jpg"
    }

    var imgs = document.getElementByTagName("img")

    for(var i = 0; i < img.length; i++) {
        imgs[i].addEventListener("click",function (event) {
        alart("hi");
        });
    }


}