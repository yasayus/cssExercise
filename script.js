let spacing = document.getElementById("spacing");
let blur = document.getElementById("blur");
let base = document.getElementById("base");
let image = document.getElementById("image");

spacing.addEventListener("change", () => {
	image.style.width = spacing.value * 5 + "px";
});

blur.addEventListener("change", () => {
	image.style.filter = `blur(${blur.value}px)`;
});

base.addEventListener("change", () => {
	image.style.border = `30px solid ${blur.value}px`;
});
