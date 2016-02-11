/**
 * Created by Ruslan Popenko on 10.02.2016.
 */

function createDiv(whereDivID,idCreated,callback){

    var motherDiv = document.getElementById(whereDivID);
    var width = motherDiv.offsetWidth;
    var height =motherDiv.offsetHeight;

    console.log(height, width);
    var d = document.createElement('div');
    d.id = idCreated;
    d.style.width=(width / 5) + "px";
    d.style.height= height + "px";
    d.style.background='gray';
    d.style.position = 'relative';
    d.style.bottom ="0px";
    d.style.left = "0px";
    d.style.marginTop = "auto";
    d.style.marginBottom = "auto";

    motherDiv.appendChild(d.cloneNode(true));

    move(idCreated);

    function move (idName) {
        var elem = document.getElementById(idName);

        var start = 0;
        var step =width/100;

        var procent50 =Math.round(width/5/2);
        var timer = function(){


            elem.style.left = start + 'px';
            start +=step;
            if (start > width/2-procent50 && start < width/2-procent50+step )

            setTimeout(timer, 5000);
            else if(start >= width+100){
                return ;
            }
            else
            setTimeout(timer, 25);
        };
        timer();
    }
}







