var countObj = 0;
function createDiv(whereDivID,obj,dopId,type1){
    var bannerId_ = dopId;
    var motherDiv = document.getElementById(whereDivID);
    var width = motherDiv.offsetWidth;
    var height = motherDiv.offsetHeight;
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
        // console.log(height, width);
        var fixesTime =(banerObj.fixesTime)*1000;
        var d = document.createElement('a');
        var soul = document.createElement('div');
        var heading = document.createElement('h2');
        var someText = document.createElement('p');
        var someLinks = document.createElement('p');
        var imgInA = document.createElement('img');

        d.target = "_blank";
        d.href = banerObj.mainlink;
        d.id = "hello"+bannerId_;
        d.style.display="inline-block";
        // d.style.background='gray';
        d.style.lineHeight="0";
        d.style.position = 'absolute';
        d.style.color = "white";
        d.style.textDecoration = "none";

        soul.style.height = "80%";
        // soul.style.width = "100%";

        var ImLink = banerObj.imglink;
        imgInA.src = ImLink;
        
        
        heading.style.fontSize = "24px";
        heading.innerHTML = banerObj.name;
        heading.style.marginTop = "15px";
        heading.style.marginRight = "38%";
        heading.style.marginLeft = "38%";
        heading.style.lineHeight="1";

        
        someText.style.fontSize = "14px";
        someText.innerHTML = banerObj.description;
        someText.style.marginTop = "3%";
        someText.style.lineHeight="1";

        
        someLinks.style.fontSize = "14px";
        someLinks.innerHTML = banerObj.mainlink;
        someLinks.style.marginTop = "5%";
        someLinks.style.marginRight = "38%";
        someLinks.style.marginLeft = "38%";
        someLinks.style.lineHeight="1";

        motherDiv.appendChild(d);
        d.appendChild(soul);
        soul.appendChild(imgInA);
        soul.appendChild(heading);
        soul.appendChild(someText);
        soul.appendChild(someLinks);
        soul.style.border = "1px solid transparent";

        

        var contlolParametr;

    if(whereDivID==1 || whereDivID==2) {
        d.style.height="100%";
        d.style.width = "60%";
        soul.style.height = "95%";
            if (type1 == 1) {
                soul.style.textAlign = "right";
                imgInA.style.float = "right";
                someText.style.marginRight = "35%";
            } else if (type1 == 2) {
                soul.style.textAlign = "left";
                imgInA.style.float = "left";
                someText.style.marginLeft = "35%";
            }
        imgInA.style.height="100%";
        imgInA.style.width="30%";

        contlolParametr = width;
    } else if  (whereDivID==3 || whereDivID==4){
        d.style.width="100%";
        soul.style.width = "96%";
        imgInA.style.width="80%";
        imgInA.style.marginLeft="10%";
        imgInA.style.marginRight="10%";
        imgInA.style.height ="30%";
        someText.style.marginLeft = "5%";

        contlolParametr = height;
    } else if (whereDivID==6 || whereDivID==7) {
        d.style.marginTop="100px";
        d.style.width="50%";
        imgInA.style.width="100%";
        d.style.height="50%";
        imgInA.style.height="100%";
        heading.style.marginLeft = "42%";
        someText.style.marginLeft = "5%";

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
                if (start <= contlolParametr/2-procent50 && start > contlolParametr/2-procent50+step &&type1==2 ){
                    countObj+=1;
                    bannerId_+=1;
                    setTimeout(function(){
                        timer();
                        createDiv(dataJ.id,dataJ,bannerId_,type1);
                    }, fixesTime);

                }
                else if (start >= contlolParametr/2-procent50 && start < contlolParametr/2-procent50+step &&type1==1){
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