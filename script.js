const array = alert("Boshlanishida Arrayning uzunligi: 4")
const yesno = confirm("sizinng arrayingizdan ma'lumotlarni olib tashlamoqchimiz")


const arra = ["olma", "Banan", "gilos", "Shaftoli"]


console.log(arra);

if (yesno) {
    alert("Arrayning uzunligi: 3");
    arra.pop("Orange"); 
    console.log("Yangi array: ", arra);
} else {
    alert("Arrayning uzunligi: 4");
    console.log("Array o'zgarmadi:", arra); 
}