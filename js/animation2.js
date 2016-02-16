var countObj = 0;
function createDiv(whereDivID,obj,dopId,type1){
    var bannerId_ = dopId;
    var motherDiv = document.getElementById(whereDivID);
    var width = motherDiv.offsetWidth;
    var height =motherDiv.offsetHeight;
/////////////////////////////////////////////////
        var banerObj = obj.data[countObj];
        var linkerId = document.getElementById(obj.id);
        if (!banerObj) {
            setTimeout(function(){
                motherDiv.remove();
                return;
            },500);

        }
        linkerId.href = banerObj.mainlink;
        console.log(height, width);
        var fixesTime =(banerObj.fixesTime)*1000;
        var d = document.createElement('a');
        var imgInA=document.createElement('img');
        d.target = "_blank";
        d.href = banerObj.mainlink;
        d.id = "hello"+bannerId_;
        d.style.display="inline-block";
        d.style.background='gray';
        d.style.lineHeight="0";
        d.style.position = 'absolute';
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



    var start;


      var move =  function(contlolParametr,bannerId_) {
            var elem = document.getElementById("hello"+bannerId_);
            var heig = elem.offsetHeight;
            var step = 0;
            var procent50;

          if(type1==1){
              start = -contlolParametr/3.5;
              step = contlolParametr/100;
          }
          else if(type1==2){
              start = contlolParametr;
              step = -contlolParametr/100;
          }


            var timer = function(){
                if(contlolParametr == width){
                    elem.style.left = start + 'px';
                    procent50 = (elem.offsetWidth)/2;

                }
                else if(contlolParametr == height){
                    elem.style.top = start + 'px';
                    procent50 = (elem.offsetHeight)/2;
                    console.log(procent50);
                }

                start += step;
                if (start > contlolParametr/2-procent50 && start <= contlolParametr/2-procent50+Math.sqrt((Math.pow(step, 2)))){

                    countObj+=1;
                    bannerId_+=1;
                    setTimeout(function(){
                        timer();
                        createDiv(dataJ.id,dataJ,bannerId_,type1);
                    }, fixesTime);
                }
                else if (start >= contlolParametr && type1==1){
                    motherDiv.removeChild(elem);

                    return ;
                }
                else if(start <=0-procent50*2  && type1==2){
                    motherDiv.removeChild(elem);
                    return ;
                }
                else
                    setTimeout(timer, 10);
            };
            timer();
        }
    move(contlolParametr,bannerId_);
}
