let exp = 10500
const namehero = "Alleson"
const niveis = ["Ferro","Bronze", "Prata", "Ouro", "Platina", "Ascedente", "Imortal","Radiante"]
  

if (exp < 1000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[0])
} else if (exp < 2000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[1])
} else if (exp < 5000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[2])
}else if (exp < 7000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[23])
}else if (exp < 8000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[4])
}else if (exp < 9000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[5])
}else if (exp < 10000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[6])
} else if (exp > 10000) {
    console.log (`O Herói de nome ${namehero} está no nível de:` + niveis[7])
}

    


// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante