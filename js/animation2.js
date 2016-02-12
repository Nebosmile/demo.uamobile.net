var countObj = 0;
function createDiv(whereDivID,obj){

    var motherDiv = document.getElementById(whereDivID);
    var width = motherDiv.offsetWidth;
    var height =motherDiv.offsetHeight;
/////////////////////////////////////////////////
        var countOfObj=0;
        var banerObj = obj.data[countObj];
        var linkerId = document.getElementById(obj.type);
        if (banerObj == undefined) {
            motherDiv.remove();
            return;
        }
        linkerId.href = banerObj.mainlink;
        console.log(height, width);
        var fixesTime =(banerObj.fixesTime)*1000;
        var d = document.createElement('a');
        var imgInA=document.createElement('img');
        d.target = "_blank";
        d.href = banerObj.mainlink;
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
    } else if  (whereDivID==3 || whereDivID==4){
        d.style.width="100%";
        imgInA.style.width="100%";
        contlolParametr = height;
    } else if (whereDivID==6 || whereDivID==7) {
        d.style.marginTop="100px";
        d.style.width="50%";
        imgInA.style.width="100%";
        d.style.height="50%";
        imgInA.style.height="100%";
        contlolParametr = width;
    }

    var dBanner = document.getElementById("hello");
    var dBannerheight=dBanner.offsetHeight;
    move(contlolParametr);

        function move (contlolParametr) {
            var elem = document.getElementById("hello");
            var step = contlolParametr/100;
            var procent50;
            var start = -Math.round(contlolParametr/3.5);

            var timer = function(){
                if(contlolParametr == width){
                    elem.style.left = start + 'px';
                    procent50 = (dBanner.offsetWidth)/2;
                }
                else if(contlolParametr == height){
                    elem.style.top = start + 'px';
                    procent50 = (dBanner.offsetHeight)/2;
                }

                start += step;
                if (start > contlolParametr/2-procent50 && start <= contlolParametr/2-procent50+step ){
                    setTimeout(timer, fixesTime);
                }
                else if (start >= contlolParametr+100){
                    countOfObj = 1;
                    motherDiv.removeChild(d);
                    countObj+=1;
                    createDiv(dataJ.type,dataJ);
                    return ;
                }
                else
                    setTimeout(timer, 35);
            };
            timer();
        }
}
