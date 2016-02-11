if (typeof uamobile == 'undefined') {
    var uamobile = Object();

    uamobile.LoadScript = function (url, callback) {
        // Adding the script tag to the head as suggested before
        uamobile.head = document.getElementsByTagName('head')[0];
        uamobile.script = document.createElement('script');
        uamobile.script.type = 'text/javascript';
        uamobile.script.src = url;
        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        uamobile.script.onreadystatechange = callback;
        uamobile.script.onload = callback;
        // Fire the loading
        uamobile.head.appendChild(uamobile.script);
    };
}

function placeBanner(obj) {
    var running = obj.timer;
    var place = document.getElementsByTagName('body')[0];
    var linker = document.createElement('a');
    var banner = document.createElement('div');
    var id = obj.id;
    banner.id = id;
    place.appendChild(banner);
    banner.appendChild(linker);

    linker.href = "http://vk.com/mhkon";// Must change according to data
    linker.target = "_blank";
    linker.setAttribute("style", "position:absolute; display:block; height:100%; width:100%; cursor:pointer; z-index:40000;");
    linker.onclick = linkRemove;

    wrapper = document.createElement("div");
    banner.appendChild(wrapper);
    //appendData(data);

    var close = document.createElement("span");
    close.id = "uamobile_close_379";
    close.innerHTML = 'Закрыть Х';
    close.onclick = closeEvent;
    banner.appendChild(close);

    var timeDiv = document.createElement("div");
    timeDiv.id = "uamobile_timer_379";
    timeDiv.innerHTML = 'До закрытия ';

    timeSpan = document.createElement("span");
    timeSpan.innerHTML = running;
    timeDiv.appendChild(timeSpan);
    timeDiv.appendChild(document.createTextNode(" сек"));
    banner.appendChild(timeDiv);

    function closeEvent() {
        banner.remove();
        running = -1;
    }

    function linkRemove() {
        linker.remove();
    }

    function timeRunner(){
        if(--running >= 0){
            timeSpan.innerHTML = running;
            setTimeout(timeRunner, 1000);
        }else{
            banner.remove();
        }
    }



    if (id == 1) { // Top
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:100%; height:30%; background-color:#000;");
        close.setAttribute("style", "position:relative; bottom:-80%; float: right; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:relative; bottom:-80%; color:red; font-size:17px; float:left");
        setTimeout(timeRunner, 1000);
    } else if (id == 2) { // Bottom
        banner.setAttribute("style", "position:fixed; bottom:0px; right:0px; width:100%; height:30%; background-color:#000;");
        close.setAttribute("style", "position:relative; top:0; float: right; rigth: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:relative; top:0; color:red; font-size:17px; float:left");
        setTimeout(timeRunner, 1000);
    } else if (id == 3) { // Left
        banner.setAttribute("style", "position:fixed; top:0px; left:0px; width:30%; height:100%; background-color:#000;");
        close.setAttribute("style", "position:absolute; top: 0px; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; top: 0px; left: 0px; color:red; font-size:17px; float:left");
        setTimeout(timeRunner, 1000);
    } else if (id == 4) {// Right
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:30%; height:100%; background-color:#000;");
        close.setAttribute("style", "position:absolute; top:0px; left:0; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; top:0px; right:0px; color:red; font-size:17px; float:left");
        setTimeout(timeRunner, 1000);
    } else if (id == 6) {// fullscreen-dont close
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:100%; height:100%; background:rgba(137, 96, 55, 0.5); z-index:20000");
        close.setAttribute("style", "position:relative; bottom:0; float: right; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:relative; bottom:0; color:red; font-size:17px; float:left");
        banner.removeChild(timeDiv);
    } else if (id == 7) {// fullscreen-close-timer
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:100%; height:100%; background:rgba(137, 96, 55, 0.5); z-index:20000");
        close.setAttribute("style", "position:relative; bottom:0; float: right; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:relative; bottom:0; color:red; font-size:17px; float:left");
        banner.removeChild(close);
        setTimeout(timeRunner, 1000);
    } else {console.log("Set right parametr");}


    banner.style.fontSize = "27px";
    banner.style.whiteSpace = "word-warp";
    banner.style.zIndex = "10000";
    banner.style.color = "white";
}

function init() {
    var obj = dataJ;
    placeBanner(obj);
    var id = JSON.parse(dataJ.id);


    createDiv(id,obj);
}


var adressObj1 = '../js/arrBanners.js';

uamobile.LoadScript(adressObj1,init);
