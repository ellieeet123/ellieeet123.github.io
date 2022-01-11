var pageTitle = document.getElementById('title').textContent;
if (!(window.location.href.endsWith('/games/'))) {
  document.title = pageTitle + ' - Pringles';
}
if (getCookie('cookieConsent') == '') {
  showMessage(`
    <h1>👋 Hello there!</h1>
    <p>You seem to be new here! Welcome to this fancy little site of mine.</p>
    <br>
    <p>Just wanted to let you know that we use cookies. Because I'm apparantly supposed to tell you that or something. Not to track you or anything like that, just to store little pieces of info to make the site work.</p>
    <p>If you don't believe me, then you can check out <a href="https://github.com/ellieeet123/ellieeet123.github.io/">the source code</a> to see for yourself :)</p>
  `, 'Close');
  setCookie('cookieConsent', 'seen', 99999);
}
else {
  if (getCookie('newUrl_12_21_21') == '') {
    showMessage(`
      <h1>Quick thing</h1>
      <p>A couple of people have complained that the games in the Hobo series take way too long to load.</p>
      <p>If you encounter this issue, there is nothing I can do about it, but I recommend closing all tabs on your computer, and then if that still does not work then restart it.</p>
      <p>The reason it takes so long is because the game files for that series are extremely large, and it takes quite a long time for them to be downloaded and processed.</p>
    `, 'lol ok thanks');
    setCookie('newUrl_12_21_21', 'seen', 31);
  }
}

runFunctions();
