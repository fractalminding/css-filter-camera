export const Camera = {
    init() {
        // window.onload = this.showVideo
    },
    currentFacingMode: 'environment',
    toggleFacingMode() {
        const mode = this.currentFacingMode
        const newMode = mode == 'environment' ? 'user' : 'environment'
        this.currentFacingMode = newMode
    },
    async showVideo() {
        const facingMode = Camera.currentFacingMode
        console.log(facingMode)
        const video = document.getElementById('video')
        video.srcObject = null
        video.pause()
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: facingMode
            }, 
            audio: false,
        })

        video.srcObject = stream
        video.play()
        /* .then(function(stream) {
            video.srcObject = stream
            video.play()
        })
        .catch(function(err) {
            console.log("An error occurred: " + err)
        }) */
    }
}