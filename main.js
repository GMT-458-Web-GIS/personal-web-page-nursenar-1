// === 1️⃣ Scroll to Top Button with Sparkle Effect ===

// butonu oluştur
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.title = "Go to top";
topBtn.innerHTML = "⬆️";
document.body.appendChild(topBtn);

// temel stil
Object.assign(topBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "25px",
  background: "#b173d8",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  fontSize: "22px",
  cursor: "pointer",
  display: "none",
  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  transition: "all .3s",
  zIndex: "9999",
  overflow: "hidden"
});

// hover parıltısı
topBtn.addEventListener("mouseenter", () => {
  topBtn.style.background = "#9e5ad4";
  topBtn.style.transform = "scale(1.15)";
  createGlow();
});
topBtn.addEventListener("mouseleave", () => {
  topBtn.style.background = "#b173d8";
  topBtn.style.transform = "scale(1)";
});

// scroll izleme
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// tıklama: yukarı kaydır + yıldız efekti
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  createSparkles();
});

// parıltı (hover)
function createGlow() {
  const glow = document.createElement("div");
  Object.assign(glow.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
    borderRadius: "50%",
    opacity: "0.8",
    animation: "glowPulse 0.6s ease-out",
    pointerEvents: "none"
  });
  topBtn.appendChild(glow);
  setTimeout(() => glow.remove(), 600);
}

// yıldız efekti (tıklama)
function createSparkles() {
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement("span");
    sparkle.textContent = "✨";
    Object.assign(sparkle.style, {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "14px",
      pointerEvents: "none",
      animation: `sparkleMove 0.8s ease-out`,
    });
    topBtn.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }
}

// === 2️⃣ Tema (Dark / Light Mode) ===
const themeBtn = document.createElement("button");
themeBtn.id = "theme-toggle";
document.body.appendChild(themeBtn);

Object.assign(themeBtn.style, {
  position: "fixed",
  top: "15px",
  right: "20px",
  background: "#1abc9c",
  color: "white",
  border: "none",
  borderRadius: "20px",
  padding: "8px 14px",
  cursor: "pointer",
  fontWeight: "600",
  zIndex: "9999",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  transition: "all .3s"
});

// tema yükleme (kayıtlıysa)
if (localStorage.getItem("theme") === "dark") enableDarkMode();
else disableDarkMode();

// buton davranışı
themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) disableDarkMode();
  else enableDarkMode();
});

function enableDarkMode() {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️ Light Mode";
  localStorage.setItem("theme", "dark");
  document.body.style.background = "#181818";
  document.body.style.color = "#f1f1f1";
}

function disableDarkMode() {
  document.body.classList.remove("dark");
  themeBtn.textContent = "🌙 Dark Mode";
  localStorage.setItem("theme", "light");
  document.body.style.background = "";
  document.body.style.color = "";
}

// === Animasyonlar (JS ile ekliyoruz) ===
const style = document.createElement("style");
style.innerHTML = `
@keyframes glowPulse {
  0% { opacity: 0.8; transform: scale(0.8); }
  100% { opacity: 0; transform: scale(1.8); }
}

@keyframes sparkleMove {
  0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -120%) scale(1.8); }
}
`;
document.head.appendChild(style);
