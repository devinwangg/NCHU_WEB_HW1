function videopanel(id) {
    str = '<iframe width="100%" height="350" src="https://www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    return str;
}
function videochange(id) {
    document.getElementById("player").innerHTML = videopanel(id);
}
