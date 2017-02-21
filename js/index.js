function hechen(imgurl){
    var mainCtx = getCanvasContext('main');
    var maxWidth = mainCtx.width;
    var maxHeight = mainCtx.height;
    mainCtx.clearRect(0,0,600,600);
    var starImg = new Image();
    starImg.src=imgurl;
    starImg.onload=function(){
        mainCtx.drawImage(starImg,0,0,580,300);
        if($('#desc').val()){
            //设置用户文本填充颜色
            mainCtx.fillStyle = "black";
            mainCtx.font="85px fontNameRegular";
            //从坐标点(0,0)开始绘制文字
            mainCtx.fillText($('#desc').val().charAt(0),35,210);
            mainCtx.fillText($('#desc').val().charAt(1),178,210);
            mainCtx.fillText($('#desc').val().charAt(2),322,210);
            mainCtx.fillText($('#desc').val().charAt(3),465,210);
        }
    };
}
function getCanvasContext(id){
    return document.getElementById(id).getContext("2d");
}
function saveImageInfo() {
    var mycanvas = document.getElementById("main");
    var image = mycanvas.toDataURL("image/jpg");
    var w=window.open('about:blank','image from canvas');
    w.document.write("<img src='"+image+"' alt='from canvas'/>");
}

function saveAsLocalImage(){
    var myCanvas = document.getElementById("main");
    var image = myCanvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
    window.location.href=image;
}