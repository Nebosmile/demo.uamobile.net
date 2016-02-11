/**
 * Created by Ruslan Popenko on 10.02.2016.
 */

function createDiv(whereDivID,idCreated, callback){

    var motherDiv = document.getElementById(whereDivID);

    // var height = document.body.clientHeight;
    // var width = document.body.clientWidth;

    
    var height = motherDiv.getBoundingClientRect().height;
    var width = motherDiv.getBoundingClientRect().width;
    console.log(height, width);
    var d = document.createElement('div');
    d.id = idCreated;
    d.style.width=(width / 5) + "px";
    d.style.height= height + "px";
    d.style.background='gray';
    d.style.position = 'relative';
    d.style.bottom ="0px";
    d.style.left = "0px";

    motherDiv.appendChild(d.cloneNode(true));

    move(idCreated);

   callback();

};



function move (idName) {
    var elem = document.getElementById(idName);

    var start = Date.now();

    //var rightSide = elem.getBoundingClientRect().right;
var rightSide = window.screen.width;


    var timer = setInterval(function() {

        var timePassed = Date.now() - start;

        elem.style.left = timePassed/12 + 'px';



        if (parseFloat(elem.style.left) > rightSide) {

            clearInterval(timer);
        }
    }, 20);


}




