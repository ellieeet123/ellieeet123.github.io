/*===========================================================================================================================

MAIN.JS

Copyright (c) 2021 ellieeet123
Licenced under MIT. For more info, visit https://github.com/ellieeet123/ellieeet123.github.io/LICENCE
A collection of functions that are for Pringles, a fancy little game site.
To visit the site, check out https://ellieeet123.github.io/

===========================================================================================================================*/

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

//clears the old darkmode cookie and sets the new one (temporary script)
if (getCookie('darkmode') == 'yes') {
  setCookie('colorTheme', 'dark', 1000);
  setCookie('darkmode', null, -1);
}
else if (getCookie('darkmode') == 'no') {
  setCookie('colorTheme', 'default', 1000);
  setCookie('darkmode', null, -1);
}

//changes all of a given element type to the style specified when calling the function.
function changeStyleForElementType(element,style,value) {
  var elements = document.getElementsByTagName(element);
  if (elements.length > 0) {
    for (let x = 0; x < elements.length; x++) {
      if (!(elements[x].classList.contains('noColorChange'))) {
        elements[x].style[style] = value;
      }
    }
  }
}

//same thing but for an id
function changeStyleForElementWithId(id,style,value) {
  var element = document.getElementById(id);
  if (!(element.classList.contains('noColorChange'))) {
    element.style[style] = value;
  }
}

//same thing but with specific specified element
function changeStyleForElement(element,style,value) {
  if (!(element.classList.contains('noColorChange'))) {
    element.style[style] = value;
  }
}

//get the brightness of a color (github copilot made this idk how it works lol)
function getColorBrightness(hex) {
  hex = hex.replace(/^\s*#|\s*$/g, '');
  if(hex.length == 3){
    hex = hex.replace(/(.)/g, '$1$1');
  }
  var r = parseInt(hex.substr(0, 2), 16),
      g = parseInt(hex.substr(2, 2), 16),
      b = parseInt(hex.substr(4, 2), 16);
  return ((r*299)+(g*587)+(b*114))/1000;
}

//makes the button invert colors when you hover over it
function buttonHover(element,defaultbg) {
  element.onmouseenter = function() {
    changeStyleForElement(element,'backgroundColor','#ffffff');
    changeStyleForElement(element,'color',defaultbg);
  }
  element.onmouseleave = function() {
    changeStyleForElement(element,'backgroundColor',defaultbg);
    changeStyleForElement(element,'color','#ffffff');
  }
}

//JSON with color theme data so that only the name of the color theme has to be stored in a cookie
var colorThemes = {
  'default': {
    'backgroundtype': 'image',
    'background': '/images/bg/default.png',
    'textbg': '#eeeeff',
    'text': '#000000',
    'link': '#0000ff',
    'sidebarlink': '#ff0000',
    'button': '#22a5df'
  },
  'dark': {
    'backgroundtype': 'image',
    'background': '/images/bg/default.png',
    'textbg': '#222233',
    'text': '#ffffff',
    'link': '#00ffff',
    'sidebarlink': '#33ee98',
    'button': '#22a5df'
  }
};

//updates page content to the color theme!
function colorTheme() {
  var theme = getCookie('colorTheme');
  var sidebarObj = document.getElementById("sidebar").contentWindow.document.body.getElementsByClassName("sidebar");
  var sidebarLinks = document.getElementById("sidebar").contentWindow.document.body.getElementsByTagName("a");
  var buttons = document.getElementById("header").contentWindow.document.body.getElementsByClassName("squaresNew");
  if (theme == '') {
    theme = 'default';
  }
  var themeData = colorThemes[theme];
  if (themeData.backgroundtype == 'image') {
    changeStyleForElementType('body','backgroundImage','url('+themeData.background+')');
  }
  else if (themeData.backgroundtype == 'color') {
    changeStyleForElementType('body','backgroundColor',themeData.background);
  }
  changeStyleForElementWithId('main','backgroundColor',themeData.textbg);
  changeStyleForElement(sidebarObj[0],'backgroundColor',themeData.textbg);
  for (let i = 0; i < sidebarLinks.length; i++) {
    changeStyleForElement(sidebarLinks[i],'color',themeData.sidebarlink);
  }
  changeStyleForElementType('h1','color',themeData.text);
  changeStyleForElementType('h2','color',themeData.text);
  changeStyleForElementType('h3','color',themeData.text);
  changeStyleForElementType('h4','color',themeData.text);
  changeStyleForElementType('h5','color',themeData.text);
  changeStyleForElementType('h6','color',themeData.text);
  changeStyleForElementType('p','color',themeData.text);
  changeStyleForElementType('a','color',themeData.link);
  for (let i = 0; i < buttons.length; i++) {
    changeStyleForElement(buttons[i],'backgroundColor',themeData.button);
    buttonHover(buttons[i],themeData.button);
  }
  var pagetitle = document.getElementById('title').textContent;
  if (pagetitle == 'Home') {
    var savedGamesIframe = document.getElementById("savedgames").contentWindow.document;
    var savedGamesLinks = savedGamesIframe.getElementsByClassName("gamelink");
    var removeLinks = savedGamesIframe.getElementsByClassName("removebutton");
    for (let i = 0; i < savedGamesLinks.length; i++) {
      changeStyleForElement(savedGamesLinks[i],'color',themeData.sidebarlink);
    }
    for (let i = 0; i < removeLinks.length; i++) {
      changeStyleForElement(removeLinks[i],'color',themeData.link);
    }
    changeStyleForElement(savedGamesIframe.getElementById('savedgamestitle'),'color',themeData.text);
    changeStyleForElement(document.getElementById('splashtext'),'color',themeData.link);
  }
  if (document.getElementById('bookmark') != null) {
    var bookmark = document.getElementById('bookmark');
    var close = document.getElementById('close');
    changeStyleForElement(bookmark,'backgroundColor',themeData.button);
    changeStyleForElement(close,'backgroundColor',themeData.button);
    bookmark.addEventListener('mouseenter',function(){this.style.background = '#ffffff';this.style.color = themeData.button;});
    bookmark.addEventListener('mouseleave',function(){this.style.background = themeData.button;this.style.color = '#ffffff';});
    close.addEventListener('mouseenter',function(){this.style.background = '#ffffff';this.style.color = themeData.button;});
    close.addEventListener('mouseleave',function(){this.style.background = themeData.button;this.style.color = '#ffffff';});
  }
}

//the inner workings of the sidebar, taking all the data from the link that is clicked on and saving it to cookies. Later, this data is used to build the game page.
function sidebarMain(obj) {  
  setCookie('data_title', obj.dataset.title, 1);
  setCookie('data_text', obj.dataset.text, 1);
  setCookie('data_isFlash', obj.dataset.isflash, 1);
  setCookie('data_frameSrc', obj.dataset.framesrc, 1);
  if (obj.dataset.isflash != '1') {
    setCookie('data_frameWidth', obj.dataset.framewidth, 1);
    setCookie('data_frameHeight', obj.dataset.frameheight, 1);
  }
  setCookie('data_isBigFile', obj.dataset.isbigfile, 1);
}

//makes the random game page link work by grabbing a random link from the sidebar and setting the random link to that.
function randomPageLink() {
  const links = [];
  const objects = document.getElementById('games').getElementsByTagName('a');
  for (let x = 0; x < objects.length; x++) {
    links.push(objects[x]);
  }
  var number = Math.floor(Math.random()*links.length);
  var object = links[number];
  var link = document.getElementById('randomGame');
  link.dataset.title = object.dataset.title;
  link.dataset.text = object.dataset.text;
  link.dataset.isflash = object.dataset.isflash;
  link.dataset.framesrc = object.dataset.framesrc;
  if (object.dataset.isflash != '1') {
    link.dataset.framewidth = object.dataset.framewidth;
    link.dataset.frameheight = object.dataset.frameheight;
  }
  link.dataset.isbigfile = object.dataset.isbigfile;
}

//takes the cookies from the previous function and uses them to build the "games" page. 
function buildGamePage() {
  let title = getCookie('data_title');
  let text = getCookie('data_text');
  let isFlash = getCookie('data_isFlash');
  let frameSrc = getCookie('data_frameSrc');
  if (isFlash != '1') {
    var frameWidth = getCookie('data_frameWidth');
    var frameHeight = getCookie('data_frameHeight');
  }
  let isBigFile = getCookie('data_isBigFile');
  document.getElementById('title').innerHTML = title;
  if (text != '') {
    document.getElementById('text').innerHTML = text;
  }
  else {
    document.getElementById('text').remove()
  }
  if (isBigFile == 1) {
    document.getElementById('warn').innerHTML = 'Loading Game... [this might take a hot second.]<br>If you see a popup saying the page isn\'t responding, click \'wait\' and be patient.';
  }
  else {
    document.getElementById('warn').innerHTML = 'Loading Game...';
  }
  if (isFlash == 1) {
    $.getJSON('https://ellieeet123.github.io/config.json', function(data) {
      document.getElementById('frame').src = data.swfFileLocation + frameSrc;
    });
  }
  else {
    document.getElementById('frame').src = frameSrc;
  }
  if (isFlash == 1) {
    document.getElementById('frame').width = 1; //placeholder value until it is auto-sized with the swf data
    document.getElementById('frame').height = 1;
  }
  else {
    document.getElementById('frame').width = frameWidth;
    document.getElementById('frame').height = frameHeight;
  }
}

//if the game is flash, set the download swf link to the swf file location
function setDownloadLink() {
  var downloadLink = document.getElementById('downloadswf');
  if (getCookie('data_isFlash') == 1) {
    downloadLink.innerHTML = 'Download SWF File';
    downloadLink.href = document.getElementById('frame').src;
  }
}
//sets the inside of the saved games frame to what it is supposed to be, aka the games that the user has saved
function savedGamesList() {
  var loadedlist = getCookie('savedGames');
  var savedGames = loadedlist.split(',');
  console.log('cookies loaded');
  var aList = document.getElementById('sidebar').contentWindow.document.getElementsByTagName('a');
  console.log('sidebar links loaded');
  var ui = document.getElementById('savedgames').contentWindow.document;
  var gameLinkData = [];
  for (let x = 0; x < aList.length; x++) {
    if (aList[x].hasAttribute('data-title') && savedGames.includes(aList[x].dataset.title)) {
      gameLinkData.push(aList[x]);
    }
  }
  console.log(gameLinkData);
  if (gameLinkData.length == 0) {
    let useless = 0;
  }
  else {
    for (let x = 0; x < gameLinkData.length; x++) {
      ui.getElementsByClassName('nosaved')[0].innerHTML = ''; //no saved games message
      var div = ui.createElement('div');
      var a = ui.createElement('a');
      a.className = 'gamelink';
      a.innerHTML = gameLinkData[x].dataset.title;
      a.setAttribute('href','/games/');
      a.setAttribute('data-title',gameLinkData[x].dataset.title);
      a.setAttribute('data-text',gameLinkData[x].dataset.text);
      a.setAttribute('data-isflash',gameLinkData[x].dataset.isflash);
      a.setAttribute('data-framesrc',gameLinkData[x].dataset.framesrc);
      if (a.hasAttribute('data-isflash') && a.dataset.isflash != '1') {
        a.setAttribute('data-framewidth',gameLinkData[x].dataset.framewidth);
        a.setAttribute('data-frameheight',gameLinkData[x].dataset.frameheight);
      }
      a.setAttribute('data-isbigfile',gameLinkData[x].dataset.isbigfile);
      a.setAttribute('onclick', "function setCookie(e,t,o){const i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);o='expires='+i.toUTCString();document.cookie=e+'='+t+';'+o+';path=/'}setCookie('data_title', this.dataset.title, 1);setCookie('data_text', this.dataset.text, 1);setCookie('data_isFlash', this.dataset.isflash, 1);setCookie('data_frameSrc', this.dataset.framesrc, 1);setCookie('data_frameWidth', this.dataset.framewidth, 1);setCookie('data_frameHeight', this.dataset.frameheight, 1);setCookie('data_isBigFile', this.dataset.isbigfile, 1);");
      a.setAttribute('target', '_parent');
      div.appendChild(a);
      var divRemove = ui.createElement('div');
      var aRemove = ui.createElement('a');
      aRemove.innerHTML = 'Remove';
      divRemove.appendChild(aRemove);
      divRemove.className = 'removebutton';
      divRemove.setAttribute('onclick',"function setCookie(e,t,o){const i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);o='expires='+i.toUTCString();document.cookie=e+'='+t+';'+o+';path=/'} function getCookie(t){var n=t+'=',r=document.cookie.split(';');for(let e=0;e<r.length;e++){let t=r[e];for(;' '==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(n))return t.substring(n.length,t.length)}return''} var loadedlist = getCookie('savedGames');var savedGames = loadedlist.split(','); var gameToRemoveName = this.parentElement.parentElement.getElementsByClassName('gamelink')[0].innerHTML;savedGames.splice((savedGames.indexOf(gameToRemoveName)),1);setCookie('savedGames', savedGames.toString(), 99999);this.parentElement.remove();")
      div.appendChild(divRemove);
      var br = ui.createElement('br');
      div.appendChild(br);
      ui.getElementById('savedgameslist').appendChild(div);
    }
  }
  ui.getElementById('load').innerHTML = '';
}

//used as part of the system to detect once both the sidebar and saved games iframes are fully loaded
var isSavedGamesLoaded;
var isSidebarLoaded;
function sidebarLoaded() {
  console.log('sidebar loaded');
  isSidebarLoaded = true;
  if (isSavedGamesLoaded === true) {
    var sidebar = document.getElementById('sidebar');
    savedGamesList();
    resizeIframe(sidebar);
  }
}
function savedGamesLoaded() {
  console.log('saved games loaded');
  isSavedGamesLoaded = true;
  if (isSidebarLoaded === true) {
    var sidebar = document.getElementById('sidebar');
    savedGamesList();
    resizeIframe(sidebar);
  }
}

//script for the bookmark ui
function bookmarkUI() {
  $(document).ready(function(){
    var savedGamesString = getCookie('savedGames');
    if (savedGamesString == '') {
      var savedGames = [];
    }
    else {
      var savedGames = savedGamesString.split(',');
    }
    if (savedGames.includes(getCookie('data_title'))) {
      $("#bookmark").html("<span class='material-icons md-18' style='margin:auto;top:2px;'>bookmark</span>Unbookmark");
    }
    $('#bookmark').click(function(){
      if ($("#bookmark").html() == '<span class="material-icons md-18" style="margin:auto;top:2px;">bookmark_border</span>Bookmark') {
        savedGames.push(getCookie('data_title'));
        setCookie('savedGames', savedGames.toString(), 99999);
        $("#bookmark").html("<span class='material-icons md-18' style='margin:auto;top:2px;'>bookmark</span>Unbookmark");
      }
      else {
        savedGames.splice((savedGames.indexOf(getCookie('data_title'))),1);
        setCookie('savedGames', savedGames.toString(), 99999);
        $("#bookmark").html("<span class='material-icons md-18' style='margin:auto;top:2px;'>bookmark_border</span>Bookmark");
      }
    });
    $('#close').click(function(){
      $("#close").animate({right: '-160px'});
      $("#bookmark").animate({right: '-160px'});
    });
  });
}

//resizes the main game frame to fit the screen
function resizeGameFrame() {
  var w = document.getElementById('main_text').offsetWidth;
  var h = window.innerHeight - 120;
  var ratio = w / h;
  var swfWidth = document.getElementById('frame').metadata.width;
  var swfHeight = document.getElementById('frame').metadata.height;
  var swfRatio = swfWidth / swfHeight;
  if (swfRatio > ratio) {
      var newWidth = w;
      var newHeight = w / swfRatio;
  }
  else {
      var newWidth = h * swfRatio;
      var newHeight = h;
  }
  frame.style.width = newWidth + "px";
  frame.style.height = newHeight + "px";
}

//waits until the SWF file has finished loading
function waitForSwfLoad() {
  if (getCookie('data_isFlash') == 1){
    var done = false;
    var interval = setInterval(function() {
      if (document.getElementById('frame')._readyState == 2) {
        done = true;
        console.log("Finished!");
        var width = document.getElementById('frame').metadata.width;
        document.getElementById('frame').width = width;
        resizeGameFrame();
        document.getElementById('warn').remove();
        setDownloadLink();
        clearInterval(interval);
      }
      else {
        console.log("Still loading...");
      }
    }, 100);
  }
  else {
    document.getElementById('frame').onload = document.getElementById('warn').remove();
  }
}

window.onload = function() {
  console.log(0);
  var sidebarloaded = false;
  var headerloaded = false;
  var savedgamesloaded = false;
  var title = document.getElementById('title').textContent;
  console.log(1);
  document.getElementById('sidebar').onload = sidebarloaded = true;
  document.getElementById('header').onload = headerloaded = true;
  document.getElementById('savedgames').onload = savedgamesloaded = true;
  console.log(2);
  if (title == 'Home') {
    window.setInterval(function() {
      console.log(3);
      if (sidebarloaded && headerloaded && savedgamesloaded) {
        console.log(4);
        colorTheme();
        window.clearInterval(this);
      }
    },100);
  }
  else {
    window.setInterval(function() {
      console.log(5);
      if (sidebarloaded && headerloaded) {
        console.log(6);
        colorTheme();
        window.clearInterval(this);
      }
    },100);
  }
}
