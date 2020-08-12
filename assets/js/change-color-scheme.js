document.getElementById("change-scheme-button").addEventListener('click',function() {
    let redschemeEnabled = document.body.classList.toggle('red-scheme');
    localStorage.setItem('redschemeEnabled', redschemeEnabled);
});

if (JSON.parse(localStorage.getItem('redschemeEnabled'))) {
    document.body.classList.add('red-scheme');
    document.header.classList.add('red-scheme');
    document.h2.classList.add('red-scheme')
}