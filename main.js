function music()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/718RmMw-/model.json',modelLoaded);
}

function modelLoaded()
{
    classifier.classify(gotresults);
}

function gotresults(error,results)
{
 if(error)
 {
   console.log(error);
 }
 else
 {
     console.log(results);
     document.getElementById("result").innerHTML="i can hear-"+results[0].label;
     document.getElementById("accuracy").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+"%";

     img1=document.getElementById("alien1")
     
     if(results[0].label=="dog")
     {
         img1.src='dog.jpg';
         
     }
    else if(results[0].label=="cat")
     {
         img1.src='download.jpg';
        
     }
    
     else
     {
         img1.src='download(1).jpg';
         
     }
 }
}