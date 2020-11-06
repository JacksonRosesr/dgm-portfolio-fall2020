export function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}
export function backdrop(){
    function randomI(max) { 
       return (Math.floor(Math.random() * Math.floor(max)));
    }
    document.getElementById("mainContent").style.backgroundImage = `url(../BackDrops/backdrop:${randomI(7)}.jpg)`;
    document.getElementById("mainContent").style.backgroundSize = "cover";
}