status = "";
tv_image = "";

function preload()
{
    tv_image = loadImage("tv.avif");
}

function setup()
{

    canvas = createCanvas(640,350);
    canvas.position(315,200);

    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(tv_image,gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
    }

}

function draw()
{
    image(tv_image,0,0,640,350);
}