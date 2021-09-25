function resizeIframe(obj){
  obj.height = (obj.contentWindow.document.body.scrollHeight + 20);
}
function setTitle(){
  alert('hello')
  var titleData = document.getElementById('gameName').textContent + ' - Pringles';
  document.title = titleData;
  alert('hello')
}

