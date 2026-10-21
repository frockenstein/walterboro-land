(function(){
 var links=[].slice.call(document.querySelectorAll('.gallery a')),lb=document.getElementById('lb'),img=document.getElementById('lb-img'),cap=document.getElementById('lb-cap'),i=0;
 function show(n){i=(n+links.length)%links.length;img.src=links[i].href;img.alt=cap.textContent=links[i].dataset.cap||'';lb.hidden=false;document.body.style.overflow='hidden'}
 function close(){lb.hidden=true;document.body.style.overflow=''}
 links.forEach(function(a,n){a.addEventListener('click',function(e){e.preventDefault();show(n)})});
 lb.querySelector('.lb-close').onclick=close;lb.querySelector('.lb-prev').onclick=function(){show(i-1)};lb.querySelector('.lb-next').onclick=function(){show(i+1)};
 lb.addEventListener('click',function(e){if(e.target===lb)close()});
 document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
 var x0=null;lb.addEventListener('touchstart',function(e){x0=e.touches[0].clientX});lb.addEventListener('touchend',function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)show(i+(d<0?1:-1));x0=null});
})();
