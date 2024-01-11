let pushup_count = 0;

const e_button = document.getElementById("main-btn");
const e_count_text = document.getElementById("pushup-text");

e_button.addEventListener("click", () => {
  pushup_count += 1;
  e_count_text.innerText = pushup_count;
  check_count_size();
});

function check_count_size() {
  if (pushup_count > 100 || pushup_count === 100) {
    e_count_text.style.fontSize = "20vh";
  }
}
