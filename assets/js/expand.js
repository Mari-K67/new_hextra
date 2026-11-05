// details shortcode: the "Expand this | Collapse this" controls of the expandable shortcode
// and opening of the parent blocks when the URL contains an anchor.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.expandable').forEach(function (cont) {
    const setAll = function (open) {
      cont.querySelectorAll('details.param-details').forEach(function (d) { d.open = open })
    }
    cont.querySelector('.expandable-expand').addEventListener('click', function () { setAll(true) })
    cont.querySelector('.expandable-collapse').addEventListener('click', function () { setAll(false) })
  })

  const openToHash = function () {
    if (!window.location.hash) return
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
    if (!target) return
    for (let d = target.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) {
      d.open = true
    }
    setTimeout(function () { target.scrollIntoView({ block: 'center', inline: 'nearest' }) }, 100)
  }
  openToHash()
  window.addEventListener('hashchange', openToHash)
})
