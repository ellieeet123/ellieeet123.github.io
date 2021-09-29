//resizes an iframe based on how tall the content inside of it is. Used for the sidebar.
function resizeIframe(obj){
  obj.height = (obj.contentWindow.document.body.scrollHeight + 20);
}

//automatically sets the title of the page based on the content of the h3 tag at the top of the page.
function setTitle(){
  var titleData = document.getElementById('title').textContent + ' - Pringles';
  document.title = titleData;
}

//sets a cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//loads a cookie
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Updates the page to match the color theme set in the "darkmode" cookie. 
function updateDark() {
  let dark = getCookie("darkmode");
  if (dark == 'yes') {
    document.getElementById("main").style.background = '#222233';
    document.getElementById("title").style.color = '#ffffff';
    document.getElementById("h1").style.color = '#ffffff';
    document.getElementById("h2").style.color = '#ffffff';
    document.getElementById("h5").style.color = '#ffffff';
    let sidebarObj = document.getElementById("sidebar").contentWindow.document.body.getElementsByClassName("sidebar");
    let sidebarLinks = document.getElementById("sidebar").contentWindow.document.body.getElementsByTagName("a");
    let pList = document.getElementsByTagName("p");
    let aList = document.getElementsByTagName("a");
    sidebarObj[0].style.background = '#222233';
    for (let i = 0; i < sidebarLinks.length; i++) {
      sidebarLinks[i].style.color = '#33ee98';
    }
    for (let i = 0; i < pList.length; i++) {
      if (pList[i].className != 'noColorChange') {
        pList[i].style.color = '#eeeeee';
      }
    }
    for (let i = 0; i < aList.length; i++) {
      aList[i].style.color = '#00ffff';
    }
  } 
  else {
    document.getElementById("main").style.background = '#eeeeff';
    document.getElementById("title").style.color = '#000000';
    document.getElementById("h1").style.color = '#000000';
    document.getElementById("h2").style.color = '#000000';
    document.getElementById("h5").style.color = '#000000';
    let sidebarObj = document.getElementById("sidebar").contentWindow.document.body.getElementsByClassName("sidebar");
    let sidebarLinks = document.getElementById("sidebar").contentWindow.document.body.getElementsByTagName("a");
    let pList = document.getElementsByTagName("p");
    let aList = document.getElementsByTagName("a");
    sidebarObj[0].style.background = '#eeeeff';
    for (let i = 0; i < sidebarLinks.length; i++) {
      sidebarLinks[i].style.color = '#ff0000';
    }
    for (let i = 0; i < pList.length; i++) {
      if (pList[i].className != 'noColorChange') {
        pList[i].style.color = '#eeeeee';
      }
    }
    for (let i = 0; i < aList.length; i++) {
      aList[i].style.color = '#00ffff';
    }
  }
}
