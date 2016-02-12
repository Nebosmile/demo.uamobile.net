/**
 * .
 */
var countObj = 0;
function createDiv(whereDivID,idCreated){

    var motherDiv = document.getElementById(whereDivID);
    var width = motherDiv.offsetWidth;
    var height =motherDiv.offsetHeight;
/////////////////////////////////////////////////
        var countOfObj=0;
        var banerObj = idCreated.data[countObj];
        console.log(height, width);
        var fixesTime =(banerObj.fixesTime)*1000;
        var d = document.createElement('a');
        var imgInA=document.createElement('img');
        d.setAttribute("href", "http://uamobile.net/actionloadnews/id/379/time/1452893730929/id/2/session/avj8odpp39lf3bd8gtv1t4pqt4");
        d.id = "hello";
        d.style.display="inline-block";
        d.style.background='gray';
        d.style.lineHeight="0";
        d.style.position = 'relative';
        var ImLink = banerObj.imglink;
        imgInA.setAttribute("src",ImLink);
        imgInA.style.display="inline-block";
        motherDiv.appendChild(d);
        d.appendChild(imgInA);

        var contlolParametr;

    if(whereDivID==1 || whereDivID==2) {
        d.style.height="100%";
        imgInA.style.height="100%";
         contlolParametr = width;
    }

    else if  (whereDivID==3 || whereDivID==4){
            d.style.width="100%";
            imgInA.style.width="100%";

            contlolParametr = height;
        }
    var dBanner = document.getElementById("hello");
    move(contlolParametr);

        function move (contlolParametr) {
            var elem = document.getElementById("hello");
            var step =contlolParametr/100;
            var procent50;
            var start = -Math.round(contlolParametr/5);

            var timer = function(){
                if(contlolParametr == width){
                    elem.style.left = start + 'px';
                    procent50 = (dBanner.offsetWidth)/2;
                }
                else if(contlolParametr == height){
                    elem.style.top = start + 'px';
                    procent50 = (dBanner.offsetHeight)/2;

                }
                start +=step;
                if (start > contlolParametr/2-procent50 && start <= contlolParametr/2-procent50+step ){
                    setTimeout(timer, fixesTime);
                }
                else if(start >= contlolParametr+100){
                    countOfObj =1;
                    motherDiv.removeChild(d);
                    countObj+=1;
                    createDiv(dataJ.id,dataJ);
                    return ;
                }
                else
                    setTimeout(timer, 35);
            };
            timer();
        }




}

