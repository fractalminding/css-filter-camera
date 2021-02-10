export const Camera = {
    init() {
        window.addEventListener('load', this.showVideo, false)
    },
    showVideo() {
        const video = document.getElementById('video')
        console.log(navigator.mediaDevices.getUserMedia({video: true, audio: true}))
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(function(stream) {
            video.srcObject = stream
            video.play()
        })
        .catch(function(err) {
            console.log("An error occurred: " + err)
        })
    }
}