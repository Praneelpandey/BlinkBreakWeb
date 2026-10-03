/** Smooth-scroll to a section id (e.g. '#how') from any click handler. */
export function scrollToId(e, id) {
  e.preventDefault()
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
