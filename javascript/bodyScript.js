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
      <h1>IMPORTANT</h1>
      <p>PLEASE READ:</p>
      <p>Google has once again decided to mark the site I use to host some of the HTML5 games as malicious. I've made a new site again, and made some changes to it so that it is hopefully not marked as malicious again.</p>
      <h1>But wait!</h1>
      <p>Just incase something happens to this main URL as well, I've made a second backup URL for this site. I would recommend bookmarking it just incase this one is suddenly taken down, and you aren't able to access it to find the new URL.</p>
      <p>The URL is <a href="https://pring-site.github.io">https://pring-site.github.io</a></p>
      <p>You can also find it in the page called 'More Site URLS'. But keep in mind, if this site gets taken down you won't be able to find it there.</p>
      <p>Once again. I highly recommend bookmarking the new URL, or writing it down somewhere.</p>
    `, 'Close');
    setCookie('newUrl_12_21_21', 'seen', 31);
  }
}
