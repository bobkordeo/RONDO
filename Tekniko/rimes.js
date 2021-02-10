async function fetchLocal(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest
    xhr.onload = function() {
      resolve(new Response(xhr.responseText, {status: xhr.status}))
    }
    xhr.onerror = function() {
      reject(new TypeError('Local request failed'))
    }
    xhr.open('GET', url)
    xhr.send(null)
  })
}

document.getElementById("-GO-").click(function() {
  fetchLocal('vortaro-eo.txt')
  .then(response => response.text())
  .then(data => {

    var source = document.getElementById("-SRC-").value
    var nbTarget = document.getElementById("-NBR-").value
    var regex = source.substr(source.length - (nb_target+1)) + "$"
    rimes = ""

    var lines = data.split('\n')
    for(var line = 0; line < lines.length; line++) {
      // console.log(lines[line])
      rime = lines[line].search(regex)
      if (rime) {
        rimes += ligne
      }
    }
    document.getElementById('-DISP-').innerHTML = rimes
  });
});


