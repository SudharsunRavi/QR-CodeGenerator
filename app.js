let imgBox=document.getElementById("qr");
let qrImg=document.getElementById("qrImg");
let qrText=document.getElementById("qrText");

function generate(){
    if(qrText.value.length!=0){
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        qr.classList.add("show-img")
    }
    else{
        alert("Please enter the URL!");
    }
    
}