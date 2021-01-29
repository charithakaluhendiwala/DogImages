document.getElementById("dogPictureBtn").addEventListener("click",function e(){
    GetDogPicture();
});

function GetDogPicture() {
    var request =new XMLHttpRequest();
    request.open('GET','https://dog.ceo/api/breeds/image/random',true);
    request.onload = function() {
        //Begin accessing JSON data here
        var data = JSON.parse(this.response);

        console.log(data);
        var imgElement =document.getElementById("dogContainer");
        imgElement.setAttribute("src", data.message);
    }

    request.send();
}