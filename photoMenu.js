import { Camera } from './camera.js'
export const PhotoMenu = {
    init() {
        const takePhoto = document.getElementById('take-photo')
        takePhoto.onclick = this.takePhoto.click
        const changeCamera = document.getElementById('change-camera')
        changeCamera.onclick = this.changeCamera.click
    },
    takePhoto: {
        click() {
            
        }
    },
    changeCamera: {
        click() {
            Camera.toggleFacingMode()
            Camera.showVideo()
        }
    }
}