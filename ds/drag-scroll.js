/* Mouse drag-to-scroll for horizontal rows in mobile mockups (touch already works natively). */
(function () {
  if (window.__dragScroll) return; window.__dragScroll = true;
  const findX = el => {
    for (; el && el !== document.body; el = el.parentElement) {
      if (el.scrollWidth > el.clientWidth + 1) {
        const o = getComputedStyle(el).overflowX;
        if (o === 'auto' || o === 'scroll') return el;
      }
    }
    return null;
  };
  let box = null, startX = 0, startLeft = 0, moved = false, snap = '';
  document.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    box = findX(e.target); if (!box) return;
    startX = e.clientX; startLeft = box.scrollLeft; moved = false;
    snap = box.style.scrollSnapType;
  }, true);
  document.addEventListener('pointermove', e => {
    if (!box) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) < 5) return;
    if (!moved) { moved = true; box.style.scrollSnapType = 'none'; box.style.scrollBehavior = 'auto'; document.documentElement.style.cursor = 'grabbing'; document.documentElement.style.userSelect = 'none'; }
    box.scrollLeft = startLeft - dx;
    e.preventDefault();
  }, true);
  const end = () => {
    if (!box) return;
    const b = box, s = snap; box = null;
    document.documentElement.style.cursor = ''; document.documentElement.style.userSelect = '';
    if (moved) {
      const stop = ev => { ev.stopPropagation(); ev.preventDefault(); };
      window.addEventListener('click', stop, { capture: true, once: true });
      setTimeout(() => window.removeEventListener('click', stop, true), 50);
      b.style.scrollBehavior = 'smooth'; b.style.scrollSnapType = s;
    }
  };
  document.addEventListener('pointerup', end, true);
  document.addEventListener('pointercancel', end, true);
  document.addEventListener('dragstart', e => { if (box) e.preventDefault(); }, true);
})();
