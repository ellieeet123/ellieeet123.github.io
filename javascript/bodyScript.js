var pageTitle = document.getElementById('title').textContent;
if (!(window.location.href.endsWith('/games/'))) {
  document.title = pageTitle + ' - Pringles';
}
if (getCookie('updateLog_12_6_21') == '') {
  showMessage(`
    <h1>Hello there</h1>
    <br>
    <p>There are a few new cool things on the site!</p>
    <p>The biggest one is this new fancy popup thingy, its pretty cool</p>
    <p>Also if you didn't know most of the html5 games were broken but now they are fixed.</p>
    <br>
    <p>Also if you didn't know, as of about a week ago there are like 10 more color themes so if you want to check those out click <a href="/stuff/settings">here</a></p>
    <br>
    <p>Ok that's it, have a good day!</p>
  `, 'Close');
  setCookie('updateLog_12_6_21', 'seen', 31);
}
