//old darkmode script, just incase

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
        let savedGamesIframe = document.getElementById("savedgames").contentWindow.document;
        let savedGamesLinks = savedGamesIframe.getElementsByClassName("gamelink");
        let removeLinks = savedGamesIframe.getElementsByClassName("removebutton");
        let pList = document.getElementsByTagName("p");
        let aList = document.getElementsByTagName("a");
        sidebarObj[0].style.background = '#222233';
        savedGamesIframe.getElementById("savedgamestitle").style.color = '#ffffff';
        savedGamesIframe.getElementById("nosaved").style.color = '#eeeeee';
        for (let i = 0; i < sidebarLinks.length; i++) {
          sidebarLinks[i].style.color = '#33ee98';
        }
        for (let i = 0; i < savedGamesLinks.length; i++) {
          savedGamesLinks[i].style.color = '#33ee98';
        }
        for (let i = 0; i < removeLinks.length; i++) {
          removeLinks[i].style.color = '#00ffff';
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
        let savedGamesIframe = document.getElementById("savedgames").contentWindow.document;
        let savedGamesLinks = savedGamesIframe.getElementsByClassName("gamelink");
        let removeLinks = savedGamesIframe.getElementsByClassName("removebutton");
        let pList = document.getElementsByTagName("p");
        let aList = document.getElementsByTagName("a");
        sidebarObj[0].style.background = '#eeeeff';
        savedGamesIframe.getElementById("savedgamestitle").style.color = '#000000';
        savedGamesIframe.getElementById("nosaved").style.color = '#000000';
        for (let i = 0; i < sidebarLinks.length; i++) {
          sidebarLinks[i].style.color = '#ff0000';
        }
        for (let i = 0; i < savedGamesLinks.length; i++) {
          savedGamesLinks[i].style.color = '#ff0000';
        }
        for (let i = 0; i < removeLinks.length; i++) {
          removeLinks[i].style.color = '#0000ff';
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
            if (aList[count].className != 'bookmarkui noColorChange') {
              aList[count].style.color = '#00ffff';
            }
          }
        }
        for (count = 0; count < pList.length; count++) {
          if (pList[count].className != 'bookmarkui noColorChange') {
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
            if (aList[count].className != 'bookmarkui noColorChange') {
              aList[count].style.color = '#0000ff';
            }
          }
        }
        for (count = 0; count < pList.length; count++) {
          if (pList[count].className != 'bookmarkui noColorChange') {
            pList[count].style.color = '#000000';
          }
        }
        for (count = 0; count < h4List.length; count++) {
          h4List[count].style.color = '#000000';
        }
      }
    }
  }