export const Filters = {
    init() {
        const buttons = document.getElementsByClassName('mode')
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i]
            const filterStyle = Filters.list[i]
            button.addEventListener('click', function() {
                const videoBlock = document.getElementById('video')
                videoBlock.style.filter = filterStyle
            })
            button.style.backgroundImage = `url(assets/images/cube${i + 1}.png)`
        }
    },
    list: [
        '',
        'brightness(1.4) contrast(1.04) hue-rotate(-273deg) saturate(2.98)',
        'saturate(5.05) brightness(1.62) hue-rotate(277deg)',
        'saturate(2.87) brightness(1.78) hue-rotate(237deg) invert(0.91)',
        'grayscale(1)',
        'contrast(3) hue-rotate(105deg) brightness(3)'
    ]
}