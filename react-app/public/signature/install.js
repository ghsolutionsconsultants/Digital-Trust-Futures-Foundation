document.getElementById('copy').addEventListener('click', function () {
  var node = document.getElementById('sig');
  var range = document.createRange();
  range.selectNodeContents(node);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  try {
    document.execCommand('copy');
    var ok = document.getElementById('done');
    ok.hidden = false;
    setTimeout(function () { ok.hidden = true; }, 4000);
  } catch (e) {
    alert('Copy failed — select the signature above and press Cmd/Ctrl + C.');
  }
  sel.removeAllRanges();
});
