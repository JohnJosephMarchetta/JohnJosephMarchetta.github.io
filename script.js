function openEntry(entry) {
  const body = entry.querySelector('.entry-body');
  entry.classList.add('open');
  body.style.maxHeight = body.scrollHeight + 'px';
}

function closeEntry(entry) {
  const body = entry.querySelector('.entry-body');
  entry.classList.remove('open');
  body.style.maxHeight = null;
}

document.querySelectorAll('.entry').forEach(entry => {
  const head = entry.querySelector('.entry-head');

  // Hover expands (desktop)
  entry.addEventListener('mouseenter', () => openEntry(entry));
  entry.addEventListener('mouseleave', () => {
    if (!entry.classList.contains('pinned')) closeEntry(entry);
  });

  // Click pins it open (works for touch, where hover doesn't apply)
  head.addEventListener('click', () => {
    const isPinned = entry.classList.contains('pinned');
    if (isPinned) {
      entry.classList.remove('pinned');
      closeEntry(entry);
    } else {
      entry.classList.add('pinned');
      openEntry(entry);
    }
  });
});

// Keep expanded entries sized correctly if fonts/layout shift on load
window.addEventListener('load', () => {
  document.querySelectorAll('.entry.open .entry-body').forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
  });
});
