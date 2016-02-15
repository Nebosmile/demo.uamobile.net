/*8if (typeof uamobile == 'undefined') {
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
*/
////////////////////////////////////////// add banners to arr with loadScript
function LoadBanners(url, callback,callback1){
    dataJ.head = document.getElementsByTagName('head')[0];
    dataJ.script = document.createElement('script');
    dataJ.script.type = 'text/javascript';
    dataJ.script.src = url;
    dataJ.script.id =20;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    dataJ.script.onreadystatechange = callback;
    dataJ.script.onload = callback;
    dataJ.head.appendChild(dataJ.script);
    dataJ.script.onerror = callback1
}

var dataJ = {
    "id": "1",/////1-top,2-bottom,3-left,4-right, 5- iframe, 6-fullscrin-dont close,7-fullscrin-close-timer//// ������ �������;���� � ����������� ����� ��� ��������
    "type": "2",
    "name": "Place for banner",
    "description": "description",
    "timer": "45",
    "data": [],
    "counter": "500000",
    "id_company": "2",
    "id_agency": "1",
    "cost": "0",
    "counterday": "20000",
    "brouser": {"7": "2"},
    "mobile": {"1": "2"},
    "weekday": {"0": "2", "6": "2"},
    "hour": {"1": "2", "2": "2", "3": "2", "4": "2", "5": "2", "6": "2", "7": "2"}
};
var bannerobject;
var ObjInArr =dataJ.data;
var idBannerObj =0;
var ObjUrl ='../js/obj'+idBannerObj+'.js';

//////////////////////////////////////////////////////

function placeBanner(obj) {
    var running = obj.timer;
    var banerObj = obj.data[countObj];
    var place = document.getElementsByTagName('body')[0];
    var linker = document.createElement('a');
    linker.id ="ualink";
    var banner = document.createElement('div');
    var id = obj.type;
    banner.id = id;
    place.appendChild(banner);
    //banner.appendChild(linker);

    linker.href = banerObj.mainlink;// Must change according to data
    linker.target = "_blank";
    linker.setAttribute("style", "position:absolute; display:block; height:100%; width:100%; cursor:pointer; z-index:40000;");
    // linker.onclick = linkRemove;
    linker.onclick = closeEvent;

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
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:100%; height:30%; background-color:rgba(142, 105, 84, 0.4);");
        close.setAttribute("style", "position:absolute; top:0; float: right; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; top:0; color:red; font-size:17px; float:left");

    } else if (id == 2) { // Bottom
        banner.setAttribute("style", "position:fixed; bottom:0px; right:0px; width:100%; height:30%; background-color:rgba(142, 105, 84, 0.4);");
        close.setAttribute("style", "position:absolute; top:0px; right:0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; top:0px; color:red; font-size:17px; float:left");

    } else if (id == 3) { // Left
        banner.setAttribute("style", "position:fixed; top:0px; left:0px; width:30%; height:100%; background-color:rgba(142, 105, 84, 0.4);");
        close.setAttribute("style", "position:absolute; top: 0px; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; top: 0px; left: 0px; color:red; font-size:17px; float:left");

    } else if (id == 4) {// Right
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:30%; height:100%; background-color:rgba(142, 105, 84, 0.4);");
        close.setAttribute("style", "position:absolute; top:0px; left:0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; top:0px; right:0px; color:red; font-size:17px; float:left");

    } else if (id == 6) {// fullscreen-dont close
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:100%; height:100%; background:rgba(137, 96, 55, 0.5); z-index:20000");
        close.setAttribute("style", "position:absolute; bottom:0px; float: right; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; bottom:0px; color:red; font-size:17px; float:left");
        setTimeout(timeRunner, 1000);
        banner.appendChild(timeDiv);
        banner.removeChild(close);
    } else if (id == 7) {// fullscreen-close-timer
        banner.setAttribute("style", "position:fixed; top:0px; right:0px; width:100%; height:100%; background:rgba(137, 96, 55, 0.5); z-index:20000");
        close.setAttribute("style", "position:absolute; bottom:0px; float: right; right: 0px; color:red; font-size:17px; cursor:pointer;");
        timeDiv.setAttribute("style", "position:absolute; bottom:0px; color:red; font-size:17px; float:left");
        setTimeout(timeRunner, 1000);
        banner.appendChild(timeDiv);

    } else {console.log("Set right parametr");}

    banner.style.borderRadius ="5px";
    banner.style.fontSize = "27px";
    banner.style.whiteSpace = "word-warp";
    banner.style.zIndex = "10000";
    banner.style.color = "white";
    banner.style.overflow ="hidden";
}

function init() {
    var obj = dataJ;
    placeBanner(obj);
    var id = JSON.parse(dataJ.type);
    createDiv(id,obj);
}
function PushObjinArr(){
    var Headic = document.getElementsByTagName('head')[0];
    var Scriptic = document.getElementById(20);
    Headic.removeChild(Scriptic);
    console.log(ObjUrl);
    console.log(ObjInArr);
    ObjInArr.push(bannerobject);
    idBannerObj+=1;
    ObjUrl ='../js/obj'+idBannerObj+'.js';

    LoadBanners(ObjUrl,PushObjinArr,init);
}


var adressObj1 = '../js/arrBanners.js';

LoadBanners(ObjUrl,PushObjinArr,init);
//uamobile.LoadScript(adressObj1,init);