document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  fadeEls.forEach(el => observer.observe(el));

  // نموذج التواصل
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  const btn = document.getElementById('sendBtn');

  if (form) {
    btn.addEventListener('click', e => {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'جارٍ الإرسال...';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'أرسل الطلب';
        form.reset();
        note.textContent = '✅ تم استلام طلبك! سنتواصل معك خلال 24 ساعة عمل.';
      }, 1200);
    });
  }
});
