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

//make a popup window
function popup(url) {
  popupWindow = window.open(url, 'popUpWindow', 'height=700,width=1000,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
}

//automatically sets the title of the page based on the content of the h3 tag at the top of the page.
function setTitle(){
  var titleData = document.getElementById('title').textContent + ' - Pringles';
  document.title = titleData;
}

//sets a cookie [script from w3schools.com]
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//loads a cookie [script from w3schools.com]
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
  setCookie('colorTheme', 'Dark', 1000);
  setCookie('darkmode', null, -1);
}
else if (getCookie('darkmode') == 'no') {
  setCookie('colorTheme', 'Default', 1000);
  setCookie('darkmode', null, -1);
}
if (getCookie('colorTheme') == 'default') {
  setCookie('colorTheme', 'Default', 1000);
}
if (getCookie('colorTheme') == 'dark') {
  setCookie('colorTheme', 'Dark', 1000);
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
  element.addEventListener(
    'mouseenter',
    function() {
      this.style.background = '#ffffff';
      this.style.color = defaultbg;
    }
  );
  element.addEventListener(
    'mouseleave',
    function() {
      this.style.background = defaultbg;
      this.style.color = '#ffffff';
    }
  );
}

//JSON with color theme data so that only the name of the color theme has to be stored in a cookie
var colorThemes = {
  'Default': {
    'backgroundtype': 'image',
    'background': '/images/bg/default.png',
    'textbg': '#eeeeff',
    'text': '#000000',
    'link': '#0000ff',
    'sidebarlink': '#ff0000',
    'button': '#22a5df'
  },
  'Dark': {
    'backgroundtype': 'image',
    'background': '/images/bg/default.png',
    'textbg': '#222233',
    'text': '#ffffff',
    'link': '#00ffff',
    'sidebarlink': '#33ee98',
    'button': '#22a5df'
  },
  'Red': {
    'backgroundtype': 'image',
    'background': '/images/bg/red.png',
    'textbg': '#ffffff',
    'text': '#ff0000',
    'link': '#ff6666',
    'sidebarlink': '#ff6f00',
    'button': '#0936db'
  },
  'Orange': { 
    'backgroundtype': 'image',
    'background': '/images/bg/orange.png',
    'textbg': '#404040',
    'text': '#ff8800',
    'link': '#ffff00',
    'sidebarlink': '#00ffff',
    'button': '#00ffff'
  },
  'Yellow': {
    'backgroundtype': 'image',
    'background': '/images/bg/yellow.jpg',
    'textbg': '#101629',
    'text': '#ffff00',
    'link': '#00ff00',
    'sidebarlink': '#e6ff42',
    'button': '#00c23a'
  },
  'Green': {
    'backgroundtype': 'image',
    'background': '/images/bg/green.png',
    'textbg': '#2e332d',
    'text': '#00ff00',
    'link': '#187506',
    'sidebarlink': '#49f54f',
    'button': '#0f6abf'
  },
  'Aqua': {
    'backgroundtype': 'image',
    'background': '/images/bg/aqua.png',
    'textbg': '#d1fff4',
    'text': '#000414',
    'link': '#00a1c9',
    'sidebarlink': '#00db0b',
    'button': '#00db0b'
  },
  'Blue': {
    'backgroundtype': 'image',
    'background': '/images/bg/blue.png',
    'textbg': '#00162b',
    'text': '#8fc8ff',
    'link': '#6363ff',
    'sidebarlink': '#3be2ff',
    'button': '#00c92c'
  },
  'Purple': {
    'backgroundtype': 'image',
    'background': '/images/bg/purple.png',
    'textbg': '#1d1226',
    'text': '#eeeeff',
    'link': '#b14aff',
    'sidebarlink': '#9a68f7',
    'button': '#d90033'
  },
  'Midnight': {
    'backgroundtype': 'image',
    'background': '/images/bg/midnight.jpg',
    'textbg': '#080124',
    'text': '#d9f0ff',
    'link': '#57cfff',
    'sidebarlink': '#8f26ff',
    'button': '#002f80'
  },
  'Arcade Room': {
    'backgroundtype': 'image',
    'background': '/images/bg/arcade-room.png',
    'textbg': '#0d032a',
    'text': '#fafafa',
    'link': '#a800e5',
    'sidebarlink': '#41ffe9',
    'button': '#ff3e3e'
  },
  'Dark Hex': {
    'backgroundtype': 'image',
    'background': '/images/bg/dark-hex.png',
    'textbg': '#001e63',
    'text': '#fdfffc',
    'link': '#ff8000',
    'sidebarlink': '#f1d302',
    'button': '#c1292e'
  },
  'RGB': {
    'backgroundtype': 'image',
    'background': '/images/bg/rgb.jpeg',
    'textbg': '#0e0e0e',
    'text': '#eaeaea',
    'link': '#d90913',
    'sidebarlink': '#28dd08',
    'button': '#167eed'
  },
  'Deep Dark': {
    'backgroundtype': 'color',
    'background': '#000000',
    'textbg': '#000000',
    'text': '#a2a2a2',
    'link': '#c0c0c0',
    'sidebarlink': '#c0c0c0',
    'button': '#404040'
  },
  'Bright White': {
    'backgroundtype': 'color',
    'background': '#ffffff',
    'textbg': '#ffffff',
    'text': '#606060',
    'link': '#808080',
    'sidebarlink': '#808080',
    'button': '#404040'
  }
};

//updates page content to the color theme!
function colorTheme() {
  var theme = getCookie('colorTheme');
  var sidebarObj = document.getElementById("sidebar").contentWindow.document.body.getElementsByClassName("sidebar");
  var sidebarLinks = document.getElementById("sidebar").contentWindow.document.body.getElementsByTagName("a");
  var buttons = document.getElementById("header").contentWindow.document.body.getElementsByClassName("squaresNew");
  if (theme == '') {
    theme = 'Default';
    setCookie('colorTheme','Default',1000);
  }
  else if (theme == 'Custom') {
    var customColors = getCookie('customColorTheme');
    colorThemes.Custom = {};
    var custom = JSON.parse(customColors);
    colorThemes.Custom.backgroundtype = custom.backgroundtype;
    colorThemes.Custom.background = custom.background;
    colorThemes.Custom.textbg = custom.textbg;
    colorThemes.Custom.text = custom.text;
    colorThemes.Custom.link = custom.link;
    colorThemes.Custom.sidebarlink = custom.sidebarlink;
    colorThemes.Custom.button = custom.button;
  }
  var themeData = colorThemes[theme];
  if (themeData.backgroundtype == 'image') {
    changeStyleForElementType('body','backgroundImage','url('+themeData.background+')');
    changeStyleForElementType('body','backgroundColor','');
  }
  else if (themeData.backgroundtype == 'color') {
    changeStyleForElementType('body','backgroundColor',themeData.background);
    changeStyleForElementType('body','backgroundImage','');
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
  for (let i = 0; i < document.getElementsByClassName('colorThemeChangeButtons').length;i++) {
    document.getElementsByClassName('colorThemeChangeButtons')[i].style.color = '#ffffff';
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
    changeStyleForElement(document.getElementById('splash'),'color',themeData.link);
  }
  if (document.getElementById('bookmark') != null) {
    var bookmark = document.getElementById('bookmark');
    var close = document.getElementById('close');
    changeStyleForElement(bookmark,'backgroundColor',themeData.button);
    changeStyleForElement(close,'backgroundColor',themeData.button);
    buttonHover(bookmark,themeData.button);
    buttonHover(close,themeData.button);
  }
}

//automatically puts the theme options in the settings page based on content of colorThemes variable
function makeSettingsPage() {
  if (getCookie('colorTheme') == '') {
    setCookie('colorTheme', 'Default', 1000);
  }
  var keys = Object.keys(colorThemes);
  var currentButton;
  var themeData = colorThemes[getCookie('colorTheme')];
  document.getElementById('button_div').innerHTML = '';
  for (var i = 0; i < keys.length; i = i+1) {
    currentButton = document.createElement('a');
    currentButton.className = 'squaresNew';
    currentButton.style.cursor = 'pointer';
    currentButton.style.marginTop = '5px';
    currentButton.style.paddingBottom = '10px';
    currentButton.classList.add('colorThemeChangeButtons');
    if (getCookie('colorTheme') == keys[i]) {
      currentButton.innerText = keys[i] + ' [SELECTED]';
    }
    else {
      currentButton.innerText = keys[i];
    }
    currentButton.onclick = function() {
      setCookie('colorTheme', this.innerHTML, '1000');
      colorTheme();
      makeSettingsPage();
    };
    changeStyleForElement(currentButton,'backgroundColor',themeData.button);
    changeStyleForElement(currentButton,'color','#ffffff');
    buttonHover(currentButton,themeData.button);
    document.getElementById('button_div').appendChild(currentButton);
    console.log('loop');
    for (var j = 0;j < 3;j++) {
      document.getElementById('button_div').appendChild(
        document.createElement('br')
      );
    }
    currentButton = null;
  }
  var save = document.getElementById('savecolortheme');
  document.getElementById('savecolortheme').style = document.getElementsByClassName('colorThemeChangeButtons')[0].style;
}

//basically just a fancy version of window.alert
function showMessage (content, closeMessage) {
  var gray        = document.createElement('div');
  var message     = document.createElement('div');
  var close       = document.createElement('a');
  var body        = document.body;
  var html        = document.documentElement;
  var height      = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var width       = document.body.clientWidth;
  var colorTheme  = getCookie('colorTheme');
  if (colorTheme == '') {
    colorTheme = 'Default';
  }
  var color       = colorThemes[colorTheme].textbg;
  var textColor   = colorThemes[colorTheme].text;
  var linkColor   = colorThemes[colorTheme].link;
  var buttonColor = colorThemes[colorTheme].button;
  close.id = 'close';
  close.className = 'noColorChange';
  gray.style = `
    background: rgba(60,60,60,0.6);
    position: fixed;
    top: 0px;
    left: 0px;
  `;
  gray.style.width =  (width+100).toString()+'px';
  gray.style.height = height.toString()+'px';
  message.style = `
    width: `+ Math.round(width/3) +`px;
    height: `+ height-20 +`px;
    background: `+ color +`;
    position: fixed;
    right: 10px;
    top: 10px;
  `;
  message.style.width =  (Math.round(width/3)).toString()+'px';
  message.style.height = (height-20).toString()+'px';
  message.style.padding = '10px';
  message.style.borderRadius = '4px';
  gray.id = 'gray';
  message.id = 'message';
  message.innerHTML = content;
  document.body.appendChild(gray);
  document.body.appendChild(message);
  var h1 = document.getElementById('message').getElementsByTagName('h1');
  var p = document.getElementById('message').getElementsByTagName('p');
  var a = document.getElementById('message').getElementsByTagName('a');
  for (let i = 0; i < h1.length; i++) {
    changeStyleForElement(h1[i],'color',textColor);
    changeStyleForElement(h1[i],'fontFamily', 'trebuchetms');
    changeStyleForElement(h1[i],'fontSize','1.7rem');
    changeStyleForElement(h1[i], 'textAlign', 'center');
  }
  for (let i = 0; i < p.length; i++) {
    changeStyleForElement(p[i],'color',textColor);
    changeStyleForElement(p[i],'fontFamily', 'trebuchetms');
    changeStyleForElement(p[i],'fontSize','1.0rem');
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i].id != 'close') {
      changeStyleForElement(a[i],'color',linkColor);
    }
    changeStyleForElement(a[i],'fontFamily', 'trebuchetms');
    changeStyleForElement(a[i],'fontSize','1.0rem');
  }
  close.style = `
    border-radius: 3px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 32px;
    margin-right: 8px;
    text-decoration: none;
    text-align: center;
    float: left;
    font-family: trebuchetms;
    font-size: 1.1rem;
  `;
  close.style.color = '#fff';
  close.style.background = buttonColor;
  close.style.width = ((width/3)-20).toString()+'px';
  close.style.position = 'fixed';
  close.style.bottom = '30px';
  close.innerHTML = closeMessage;
  close.onclick = function() {
    message.remove();
    gray.remove();
  }
  close.onmouseenter = function() {
    this.style.background = '#fff';
    this.style.color = buttonColor
  };
  close.onmouseleave = function() {
    this.style.background = buttonColor;
    this.style.color = '#fff'
  };
  close.style.cursor = 'pointer';
  message.appendChild(close);
};

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
var gamePageBuilt = false;
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
  var waitForRuffleLoad = setInterval(function() {
    console.log(0);
    if (window.RufflePlayer != undefined) {
      console.log(1);
      clearInterval(waitForRuffleLoad);
      if (isFlash == '1') {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById('gamecontainer');
        player.style.height = '1px';
        player.style.width = '1px';
        player.id = 'frame';
        container.appendChild(player);
        $.getJSON('https://ellieeet123.github.io/config.json', function(data) {
          player.load(data.swfFileLocation + frameSrc);
        });
      }
      document.getElementById('title').innerHTML = title;
      document.title = title + ' - Pringles';
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
      if (isFlash != '1') {
        var iframe = document.createElement('iframe');
        iframe.width = frameWidth;
        iframe.height = frameHeight;
        iframe.id = 'frame';
        iframe.frameBorder = 0;
        if (isFlash == 0) {
          iframe.src = frameSrc;
        }
        else if (isFlash == 2) {
          $.getJSON('https://ellieeet123.github.io/config.json', function(data) {
            var proxyBaseURL = data.proxyBaseURL;
            iframe.src = proxyBaseURL + frameSrc;
          });
        }
        document.getElementById('gamecontainer').appendChild(iframe);
      }
      gamePageBuilt = true;
    }
  },100);
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
  if (gameLinkData.length == 0){ }
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
    document.getElementById('bookmark').style.background = colorThemes[getCookie('colorTheme')].button;
    document.getElementById('close').style.background = colorThemes[getCookie('colorTheme')].button;
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
  var frame = document.getElementById('frame');
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
    }, 100);
  }
  else {
    document.getElementById('frame').onload = document.getElementById('warn').remove();
  }
}

//sets the splash text on the home page to a random thing from a list of splashes
function splashText() {
  var splashes = [
    '"A Great Entertainment Site With <span class="gameCount"></span> Games"',
    'Lowering your grades since 2019',
    'There is really nothing stopping me from making this as long as I want to except for the fact that I do not want to.',
    'Pineapple on pizza is delicious. If you disagree then you can leave.',
    'Fun fact, eating three pizzas per day is healthier for you than being dead!',
    'There are currently 32 different random texts that can appear here unless I added more and forgot to update this (which is actually quite likely)',
    'Important political announcement: m̸̼̻̐̆ą̸̙̂́g̷͔͐d̴̨͛ò̸̠̈́n̷̙͂d̶̩̈a̶̙̭̓̃l̵̹̐͌ ̴̝͉̊s̴͙̱̋ ̶̆ͅb̶̘͇̌̈e̷̛͔è̵̥́s̶̛͔̭̀ē̴̬ċ̸̛̹h̷̪̘͊͐u̷̱͐r̶̟͋͜ǵ̸̠̑ȩ̸́̔n̷̫͌ͅ',
    'Whenever a nuclear bomb goes off there is always somewhere within a certain radius of it where all the steaks in a supermarket are perfectly cooked',
    'There are some parts of your floor that you have likely never touched',
    'The word thesaurus, which is a book that contains synonyms for other words, has no synonyms.',
    'insert vsauce music for absolutely no reason at all',
    'The plural of footage is feetage',
    'Whoever first found a hot pepper and ate it probably thought they were going to die for a couple of minutes',
    'If you are in space it\'s possible to have double sided pizza',
    'Is it just me or do all microwave doors open from the same side',
    'Why are cookies called cookies and bacon called bacon when we cook bacon and bake cookies?',
    'What\'s nine plus ten?',
    'The egg came first, because the chicken evolved from reptiles which had eggs.',
    'Why is the alphabet in the order that it is in?',
    'If you get to be 113 years old then you have technically been a teenager twice.',
    'In the cars movies, getting car insurance is the same as life insurance',
    'Why is it that the word short longer than the word long?',
    'It\'s possible that today is the halfway point in your life and you just don\'t know it yet.',
    'Lightbulbs were such a good idea they became the symbol for a good idea',
    'How do you know exactly when a cucumber turns into a pickle?',
    'Many people ask why this site is named Pringles. <br><br><br>no, i\'m not going to tell you',
    'Why do all fruit loops taste the same?',
    'Fun Fact: if you own the Mona Lisa there is nothing legally stopping you from eating it.',
    '"You miss 100% of the shots you don\'t take - Wayne Gretzky" - Michael Scott',
    '"It\'s ok to eat fish because they don\' have any feelings" - Kurt Cobain',
    '"I sing and play the guitar, and I\'m a walking, talking bacterial infection" - Kurt Cobain',
    '"Back in \'Nam Doritoes came in a can" - Illuminnex',
    'No sh!t sherlock',
    'e̶̡̧̢̨̞̝̦͍̗̭̜̻̦͖͙̱̖͙̰̦̗͈͓̭̱͍̥̫̘͙̗̯͇͔̬͈͚̱͑̎̈́̃̓̔͗̾̂̋̽̾̕͜ͅͅ',
    'Jesus pronounced backwards sounds like sausage'
  ];
  var numGames = document.getElementById('sidebar').contentWindow.document.getElementById('games').getElementsByTagName('a').length;
  document.getElementById('splash').innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
  if (document.getElementsByClassName('gameCount').length != 0) {
    document.getElementsByClassName('gameCount')[0].innerHTML = numGames;
  }
  document.getElementById('infoSectionGameCount').innerHTML = numGames;
}

function sidebarOnloadBecauseOfAWeirdBugInWindowsChromeThisIsAVeryLongFunctionName() {
  var runLoadFunctionsInner = window.setInterval(function(){
    if (document.getElementById('bottomElement')) {
      window.clearInterval(runLoadFunctionsInner);
      resizeIframe(document.getElementById('sidebar'));
      if (document.getElementById('title').textContent == 'Home') {
        splashText()
      }
      colorTheme();
    }
  },100);
}

//runs the savedgameslist, colortheme, and resizeiframe functions at the appropreate times
function runFunctions() {
  var sidebarObj;
  var runLoadFunctions = window.setInterval(function(){
    sidebarObj = null;
    sidebarObj = window.document.getElementById('sidebar');
    if (sidebarObj.contentWindow.document.getElementById('bottomElement')) {
      sidebarOnloadBecauseOfAWeirdBugInWindowsChromeThisIsAVeryLongFunctionName();
      window.clearInterval(runLoadFunctions);
    }
  },500);
}

runFunctions();
