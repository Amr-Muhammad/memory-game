let imgSrc = [
    'images/memory Game/1.gif',
    'images/memory Game/2.gif',
    'images/memory Game/3.gif',
    'images/memory Game/4.gif',
    'images/memory Game/5.gif',
    'images/memory Game/6.gif',
    'images/memory Game/1.gif',
    'images/memory Game/2.gif',
    'images/memory Game/3.gif',
    'images/memory Game/4.gif',
    'images/memory Game/5.gif',
    'images/memory Game/6.gif',
]

let docImg = document.getElementsByTagName('img')
let i = 0
let firstPick = null;
let secondPick = null;
let firstIndex = 0
let secondIndex = 0
let matchedElements = []
let shuffledImages = Array.from(imgSrc).sort(() => Math.random() > 0.5 ? 1 : -1)
let userScore = 0

function changeSrc(target, index) {
    target.src = shuffledImages[index]
    if (firstPick == null) {
        firstPick = target.src
        firstIndex = index
        matchedElements.push(target)
    }
    else {
        secondPick = target.src
        secondIndex = index
        matchedElements.push(target)
        document.getElementsByClassName('memorygameContainer')[0].style.pointerEvents = 'none'
        if (firstPick == secondPick && firstIndex != secondIndex) {
            firstPick = null
            secondPick = null
            firstIndex = 0
            secondIndex = 0
            matchedElements = []
            userScore++
            document.getElementsByClassName('memorygameContainer')[0].style.pointerEvents = 'auto'
            if (userScore == 6) {
                document.getElementsByTagName('body')[0].style.backgroundImage = "url('../images/gif/congrats.gif')";
                console.log(document.getElementsByTagName('body')[0].style.backgroundImage);
                alert('Congratulations!')
            }
        } else {
            setTimeout(function () {
                firstPick = null
                secondPick = null
                firstIndex = 0
                secondIndex = 0
                for (let i = 0; i < matchedElements.length; i++) {
                    matchedElements[i].src = 'images/memory Game/Moon.gif'
                }
                matchedElements = []
                document.getElementsByClassName('memorygameContainer')[0].style.pointerEvents = 'auto'
            }, 500)
        }
    }

}