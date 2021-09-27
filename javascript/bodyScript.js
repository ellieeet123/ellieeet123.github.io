window.onload = setTitle()
const fileImg = await fetch('/old_pring_bg.png').then(r => r.blob());
alert(fileImg.size)
