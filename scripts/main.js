var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/horde.jpg') {
      myImage.setAttribute('src', 'images/alliance.jpg');
    } else {
      myImage.setAttribute('src', 'images/horde.jpg');
    }
}


var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎您, ' + storedName;
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var myName = prompt('请输入您的名字');
  localStorage.setItem('name', myName);
  myHeading.textContent = '欢迎您, ' + myName;
}