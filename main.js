window.addEventListener('load', startup, false)
function startup() {
    video = document.getElementById('video')
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(function(stream) {
        video.srcObject = stream
        video.play()
    })
    .catch(function(err) {
        console.log("An error occurred: " + err)
    })
}