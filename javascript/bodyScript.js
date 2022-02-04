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
  if (getCookie('msg2') == '') {
    showMessage(`
      <h1>Hi everyone</h1>
      <p>Sorry for not adding content to this site in like over a month. I've been busy with school, and other projects. </p>
      <p>But I'm gonna try to add more content soon. For now, click the 'Submission Log' link in the sidebar to see a list of everything that's been submitted in the last month or so, and you can check back on that to see if it's been added</p>
    `, 'Cool');
    setCookie('msg2', 'seen', 31);
  }
}

runFunctions();
