

function fullTime(){
    let audio = document.querySelector(audio)
    time = 0
    audio.addEventListener('loadeddata',()=>{
        let time = audio.duration
    return time
    })
    return time
}