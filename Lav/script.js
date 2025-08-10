// Interactions: typed.js, AOS + small DOM handlers

// Typed.js animation
var typed = new Typed('#typed', {
  strings: ["BFSI Automation Engineer", "JAVA & Selenium Specialist", "Investment Banking Tester"],
  typeSpeed: 45,
  backSpeed: 25,
  loop: true
});

// Initialize AOS
AOS.init({ duration: 900, once: true });

// GSAP subtle
gsap.from(".hero-right h2", { opacity: 0, y: -30, duration: 0.9 });
gsap.from(".hero-right p", { opacity: 0, y: 10, delay: 0.4 });

// Vanilla tilt init for cards
VanillaTilt.init(document.querySelectorAll(".skill-card, .project-card"), {
  max: 8, speed: 400, glare: true, "max-glare": 0.08
});

// Profile image upload preview
const profileUpload = document.getElementById('profileUpload');
const profilePreview = document.getElementById('profilePreview');
if(profileUpload){
  profileUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const url = URL.createObjectURL(file);
    profilePreview.src = url;
  });
}

// Add skill dynamically
const addBtn = document.getElementById('addSkillBtn');
const newSkillInput = document.getElementById('newSkillInput');
const skillGrid = document.getElementById('skillGrid');

addBtn.addEventListener('click', () => {
  const text = newSkillInput.value.trim();
  if(!text) return;
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.setAttribute('data-tilt', '');
  card.innerHTML = `<i class="fas fa-star"></i><h3>${text}</h3><p>Added skill</p>`;
  skillGrid.appendChild(card);
  VanillaTilt.init(card, { max:8, speed:400, glare:true, "max-glare": 0.08 });
  newSkillInput.value = '';
});

// Resume upload replace (client-side)
const resumeUpload = document.getElementById('resumeUpload');
const downloadResume = document.getElementById('downloadResume');
if(resumeUpload){
  resumeUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const url = URL.createObjectURL(file);
    downloadResume.href = url;
    downloadResume.download = file.name;
    // small UI hint
    downloadResume.textContent = 'Download Updated Resume';
  });
}
