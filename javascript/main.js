function resizeIframe(obj){
  obj.height = (obj.contentWindow.document.body.scrollHeight + 20);
}
function setTitle(src) {
  document.title = (src.innerHTML + ' - Pringles');
}
