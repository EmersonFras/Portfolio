const container = document.getElementById("numbers");

for (let i = 1; i <= 100; i++) {
    const para = document.createElement("p");
    para.textContent = i;
    container.appendChild(para);
}
