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

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PenhVmEw3/model.json', moldelLoaded);


function moldelLoaded() {
    console.log("Moldel Loaded!");
}


function check() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
     console.error(error);
    } else {
        console.log(results);
        document.getElementById("results_object_name").innerHTML=results[0].label;
        document.getElementById("rusults_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}