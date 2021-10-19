//resizes an iframe based on how tall the content inside of it is. Used for the sidebar.
function resizeIframe(obj){
  obj.height = (obj.contentWindow.document.body.scrollHeight + 20);
}

//makes the random game page link work by grabbing a random link from the sidebar and setting the random link to that.
function randomPageLink() {
  const links = [];
  const objects = document.getElementById('games').getElementsByTagName('a');
  for (let x = 0; x < objects.length; x++) {
    links.push(objects[x]);
  }
  var number = Math.floor(Math.random()*links.length);
  document.getElementById('randomGame').href = links[number];
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
  let pringPageTitle = document.getElementById('title').textContent;
  if (pringPageTitle == 'Home') {
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
          pList[i].style.color = '#000000';
        }
      }
      for (let i = 0; i < aList.length; i++) {
        aList[i].style.color = '#0000ff';
      }
    }
  }
  else { 
    if (dark == 'yes') {
      document.getElementById("main").style.background = '#222233';
      document.getElementById("title").style.color = '#eeeeee';
      let sidebarObj = document.getElementById("sidebar").contentWindow.document.body.getElementsByClassName("sidebar");
      let sidebarLinks = document.getElementById("sidebar").contentWindow.document.body.getElementsByTagName("a");
      let pList = document.getElementsByTagName("p");
      let aList = document.getElementsByTagName("a");
      let h4List = document.getElementsByTagName("h4");
      sidebarObj[0].style.background = '#222233';
      let count;
      for (count = 0; count < sidebarLinks.length; count++) {
        sidebarLinks[count].style.color = '#33ee98';
      }
      if (aList.length > 0) {
        for (count = 0; count < aList.length; count++) {
          if (aList[count].className != 'yay noColorChange') {
            aList[count].style.color = '#00ffff';
          }
        }
      }
      for (count = 0; count < pList.length; count++) {
        if (pList[count].className != 'yay noColorChange') {
          pList[count].style.color = '#eeeeee';
        }
      }
      for (count = 0; count < h4List.length; count++) {
        h4List[count].style.color = '#ffffff';
      }
    } else {
      document.getElementById("main").style.background = '#eeeeff';
      document.getElementById("title").style.color = '#000000';
      let sidebarObj = document.getElementById("sidebar").contentWindow.document.body.getElementsByClassName("sidebar");
      let sidebarLinks = document.getElementById("sidebar").contentWindow.document.body.getElementsByTagName("a");
      let pList = document.getElementsByTagName("p");
      let aList = document.getElementsByTagName("a");
      let h4List = document.getElementsByTagName("h4");
      sidebarObj[0].style.background = '#eeeeff';
      let count;
      for (count = 0; count < sidebarLinks.length; count++) {
        sidebarLinks[count].style.color = '#ff0000';
      }
      if (aList.length > 0) {
        for (count = 0; count < aList.length; count++) {
          if (aList[count].className != 'yay noColorChange') {
            aList[count].style.color = '#0000ff';
          }
        }
      }
      for (count = 0; count < pList.length; count++) {
        if (pList[count].className != 'yay noColorChange') {
          pList[count].style.color = '#000000';
        }
      }
      for (count = 0; count < h4List.length; count++) {
        h4List[count].style.color = '#000000';
      }
    }
  }
}

//the inner workings of the sidebar, taking all the data from the link that is clicked on and saving it to cookies. Later, this data is used to build the game page.
function sidebarMain(obj) {  
  setCookie('data_title', obj.dataset.title, 1);
  setCookie('data_text', obj.dataset.text, 1);
  setCookie('data_isFlash', obj.dataset.isflash, 1);
  setCookie('data_frameSrc', obj.dataset.framesrc, 1);
  setCookie('data_frameWidth', obj.dataset.framewidth, 1);
  setCookie('data_frameHeight', obj.dataset.frameheight, 1);
  setCookie('data_isBigFile', obj.dataset.isbigfile, 1);
}

//takes the cookies from the previous function and uses them to build the "games" page. 
function buildGamePage() {
  let title = getCookie('data_title');
  let text = getCookie('data_text');
  let isFlash = getCookie('data_isFlash');
  let frameSrc = getCookie('data_frameSrc');
  let frameWidth = getCookie('data_frameWidth');
  let frameHeight = getCookie('data_frameHeight');
  let isBigFile = getCookie('data_isBigFile');
  document.getElementById('title').innerHTML = title;
  if (text != '') {
    document.getElementById('text').innerHTML = text;
  }
  else {
    document.getElementById('text').remove()
  }
  if (isBigFile == 1) {
    document.getElementById('warn').innerHTML = 'Note - this game\'s large file size might cause long loading times. Just wait, and click wait on a popup if necesary. It can take up to 60-100 seconds sometimes.';
  }
  else {
    document.getElementById('warn').remove();
  }
  if (isFlash == 1) {
    document.getElementById('frame').src = '/games/' + frameSrc;
  }
  else {
    document.getElementById('frame').src = frameSrc;
  }
  document.getElementById('frame').width = frameWidth;
  document.getElementById('frame').height = frameHeight;
}

//sets the inside of the saved games frame to what it is supposed to be, aka the games that the user has saved
function savedGamesList() {
  alert(0);
  var loadedlist = getCookie('savedGames');
  var savedGames = loadedlist.split(',');
  var aList = document.getElementById('sidebar').contentWindow.document.getElementsByTagName('a');
  var ui = document.getElementById('savedgames').contentWindow.document.body;
  alert(1);
  var gameLinkData = [];
  for (let x = 0; x < aList.length; x++) {
    if (aList[x].hasAttribute('data-title') && savedGames.includes(aList[x].dataset.title)) {
      gameLinkData.push(aList[x]);
    }
  }
  if (gameLinkData.length == 0) {
  	let useless = 0;
  }
  else {
    for (let x = 0; x < gameLinkData.length; x++) {
      ui.getElementById('nosaved').innerHTML = ''
      var div = ui.createElement('div');
      var a = ui.createElement('a');
      a.className = 'gamelink';
      a.innerHTML = gameLinkData[x].dataset.title;
      a.setAttribute('href','/games/');
      div.appendChild(a);
      var divRemove = ui.createElement('div');
      var aRemove = ui.createElement('a');
      aRemove.innerHTML = 'Remove';
      divRemove.appendChild(aRemove);
      divRemove.className = 'removebutton';
      div.appendChild(divRemove);
      var br = ui.createElement('br');
      div.appendChild(br);
      ui.getElementById('savedgameslist').appendChild(div);
    }
  }
  ui.getElementById('load').innerHTML = '';
}
