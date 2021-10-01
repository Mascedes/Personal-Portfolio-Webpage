let kotak = document.getElementsByClassName("kotak");
let gambarSkill = document.getElementsByClassName("img-skill");
let expandImg = document.getElementById("expandedImg");
let imgText = document.getElementById("imgtext");
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let skill = JSON.parse(this.responseText);
    mulai(skill);
  }
};
xhr.open("GET", "json/skill.json", true);
xhr.send();

function mulai(skill) {
  gambarSkill.forEach((skl) => {
    skl.addEventListener("click", function () {
      expandImg.src = this.src;
      if (skill[this.alt] !== undefined) {
        const isi = `
      <h2>${skill[this.alt].title}</h2>
    <p>${skill[this.alt].penjelasan}</p>
    <a href="${skill[this.alt].link}" target="_blank"><button class="tombol1">Info Lengkap</button></a>
    `;
        imgText.innerHTML = isi;
      } else {
        imgText.innerHTML = "";
      }
      expandImg.parentElement.style.animation = "muncul 1s";
    });
    setInterval(function () {
      gambarSkill[Math.floor(Math.random() * gambarSkill.length)].click();
    }, 50000);
  });
  gambarSkill[0].click();

  setInterval(function () {
    expandImg.parentElement.style.removeProperty("animation");
  }, 1200);
}
