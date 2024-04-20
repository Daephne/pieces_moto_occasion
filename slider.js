const slide = ["https://drive.google.com/thumbnail?id=1fJkQyc3HcQ1-tlbPuq4KzDZIvSGLKCbG", "https://drive.google.com/thumbnail?id=1M2fcywvc-5Pz9kRB9rL1MJ_tTQlEIMyh", "https://drive.google.com/thumbnail?id=1fJkQyc3HcQ1-tlbPuq4KzDZIvSGLKCbG"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}