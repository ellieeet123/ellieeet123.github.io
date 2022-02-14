var pageTitle = document.getElementById('title').textContent;
if (!(window.location.href.endsWith('/games/'))) {
  document.title = pageTitle + ' - Pringles';
}
var height = innerHeight;
var width = innerWidth;
if (width / height < 0.8) {
  // this means the user is using a mobile device
  window.isMobile = true; // just incase lol
  showMessage(`
    <h1>👋 Hello there!</h1>     
    <p>It seems like you're using a mobile device.</p>
    <p>You might want to use the desktop version of this site. Most of the games require a keyboard/mouse to work, and also this site's layout isn't exactly meant for mobile users. You can still view it anyway if you want to, but it might not look how you'd expect.</p>
    `, 'View Anyway');
}
else {
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
    if (getCookie('msg3') == '') {
      showMessage(`
        <h1>New Stuff!!!</h1>
        <p>Some awesome new features that have just been added to the site:</p>
        <p>
          <ul>
            <li><p>Much more control over the Ruffle emulator: Easy access to controls such as pausing, fullscreen, etc. There is also an advanced mode, letting you easily interact with the Ruffle API.</p></li>
            <li><p>Custom Color Themes! Don't like how the site looks? Not a problem. Head over to the <a href="/stuff/settings">settings</a> page, and have some fun with it.</p></li>
            <li><p>General bug fixes/ui improvements.</p></li>
          </ul>
        </p>
      `, 'Awesome');
      setCookie('msg3', 'seen', 31);
    }
  }
}

runFunctions();
