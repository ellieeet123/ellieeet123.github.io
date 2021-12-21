var pageTitle = document.getElementById('title').textContent;
if (!(window.location.href.endsWith('/games/'))) {
  document.title = pageTitle + ' - Pringles';
}
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
