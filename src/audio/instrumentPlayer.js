// Pemutar suara alat musik: hanya satu suara pada satu waktu.
// Event `kelana:instrument` memberi tahu BackgroundMusic agar menjeda musik latar.

export const INSTRUMENT_EVENT = 'kelana:instrument'

let current = null

function notify(playing) {
  window.dispatchEvent(new CustomEvent(INSTRUMENT_EVENT, { detail: { playing } }))
}

function finish() {
  if (!current) return
  const { audio, onStop } = current
  current = null
  audio.pause()
  onStop()
  notify(false)
}

// `owner` menandai siapa yang memutar, agar hanya pemiliknya yang bisa menghentikan.
export function playInstrument(src, owner, onStop) {
  finish()
  const audio = new Audio(src)
  current = { audio, owner, onStop }
  audio.addEventListener('ended', () => current?.audio === audio && finish())
  notify(true)
  return audio.play().catch((error) => {
    if (current?.audio === audio) finish()
    throw error
  })
}

export function stopInstrument(owner) {
  if (current?.owner === owner) finish()
}
