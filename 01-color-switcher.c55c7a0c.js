const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){id=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.setAttribute("disabled",!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(id),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c55c7a0c.js.map
