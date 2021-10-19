Webcam.set({
    width: 350,
    height: 299,
    image_format: "png",
    png_quality: 90
});
wbcam= document.getElementById("webcam_view");
Webcam.attach("#webcam_view");

function snapshoter() {
    Webcam.snap(
        function (data_uri) {
            document.getElementById("captured_object").innerHTML= "<img id='imgg' src='" + data_uri + "'/>"
        }
    );
}
console.log("ml5 version: " , ml5.version); 
 model_attach= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/a7w_QFCAI/model.json" , modelLoaded);

 function modelLoaded() {
     console.log("model has been loaded");

 }

function check() {
    img = document.getElementById("imgg");
    model_attach.classify(img , resultgiver);
}
function resultgiver(error , results) {
if (error) {
    console.log(error);
} else {
    console.log(results);
    document.getElementById("resulted_object_accuracy").innerHTML= results[0].confidence.toFixed(3);
    document.getElementById("resulted_object_name").innerHTML= results[0].label;

}

}