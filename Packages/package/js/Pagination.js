
const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const links = document.querySelectorAll(".link");
const boxContainer = document.querySelector(".box-container");
const boxes = boxContainer.querySelectorAll(".box");
const limit = 6; // Số lượng box trên mỗi trang
let currentStep = 0;

// Hiển thị 6 box đầu tiên
for (let i = 0; i < 6; i++) {
  if (boxes[i]) {
    boxes[i].style.display = "block";
  }
}

// Ẩn các box còn lại
for (let i = 6; i < boxes.length; i++) {
  if (boxes[i]) {
    boxes[i].style.display = "none";
  }
}

// Function to update the button states
const updateButtons = () => {
  startBtn.disabled = currentStep === 0;
  endBtn.disabled = currentStep === links.length - 1;
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === links.length - 1;
};

// Function to show/hide boxes based on the current step
const updateBoxes = () => {
  const startIndex = currentStep * limit;
  const endIndex = startIndex + limit;
  boxes.forEach((box, index) => {
    if (index >= startIndex && index < endIndex) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
};

links.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    links[currentStep].classList.remove("active");
    currentStep = index;
    links[currentStep].classList.add("active");
    updateButtons();
    updateBoxes();
  });
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    links[currentStep].classList.remove("active");
    currentStep--;
    links[currentStep].classList.add("active");
    updateButtons();
    updateBoxes();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < links.length - 1) {
    links[currentStep].classList.remove("active");
    currentStep++;
    links[currentStep].classList.add("active");
    updateButtons();
    updateBoxes();
  }
});

startBtn.addEventListener("click", () => {
  links[currentStep].classList.remove("active");
  currentStep = 0;
  links[currentStep].classList.add("active");
  updateButtons();
  updateBoxes();
});

endBtn.addEventListener("click", () => {
  links[currentStep].classList.remove("active");
  currentStep = links.length - 1;
  links[currentStep].classList.add("active");
  updateButtons();
  updateBoxes();
});


