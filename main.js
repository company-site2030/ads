// main.js - simple interactions
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  const sendBtn = document.getElementById('sendBtn');

  sendBtn.addEventListener('click', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email){
      note.textContent = 'الاسم والبريد الإلكتروني مطلوبان لإرسال الطلب.';
      return;
    }
    // Simulate sending (since we can't call external APIs)
    sendBtn.disabled = true;
    sendBtn.textContent = 'جارٍ الإرسال...';
    setTimeout(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = 'أرسل الطلب';
      form.reset();
      note.textContent = 'تم استلام طلبك! سنتواصل معك خلال 24 ساعة عمل. شكراً لثقتك بميمو.';
    }, 1200);
  });

  // simple reveal on scroll
  const reveal = (el) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  };
  const animated = document.querySelectorAll('section, .service, .work-item, .logo-card');
  animated.forEach(a => { a.style.opacity=0; a.style.transform='translateY(14px)'; a.style.transition='all 700ms ease'; });
  window.addEventListener('scroll', ()=> animated.forEach(reveal));
  window.dispatchEvent(new Event('scroll'));
});
