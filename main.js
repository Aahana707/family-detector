Webcam.attach('#camera');
camera=document.getElementById("camera");

Webcam.set({
    width: 350,
    hieght: 300,
    image_format: 'png',
    png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
    }