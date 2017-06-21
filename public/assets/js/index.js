window.onload = function () {
  document.querySelector('#hashButton').addEventListener('click', function () {
    var hash = document.querySelector('input[name=hash]').value
    window.location = window.location.href + hash
  }, false)
}
