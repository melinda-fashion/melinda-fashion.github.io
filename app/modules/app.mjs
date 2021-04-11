
const app = {
  init(){
    let img = document.getElementById('logo'),
    lf = document.getElementById('lfoot').firstChild,
    rf = document.getElementById('rfoot').firstChild;

    document.body.removeAttribute('style')
    img.classList.add('fadeIn');
    setTimeout(function(){
      setTimeout(function(){
        rf.classList.add('fadeIn');
      },500)
      lf.classList.add('fadeIn');
    },1000)
  }
}

window.onload = app.init();
