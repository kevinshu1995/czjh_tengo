console.log('不要來偷看');

function loadingFinish() {
    var loadingEl = document.getElementById('loading--hook')
    loadingEl.style.display = 'none'
}
window.onload = loadingFinish;