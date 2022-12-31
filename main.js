let practicar = parseInt(prompt("si practica\n pulse 1- si (yo) practico\n pulse 2- no practico nada "))
let bebermucho = parseInt(prompt("si usted bebe\n pulse 1- me tomo todo\n pulse 2- yo no tomo nada"))

    if (practicar == 1 && bebermucho== 2) {
      alert("usted es el rey de reyes")
    } 
    else if (practicar== 2 && bebermucho == 2) {
      alert("usted se olvida de todo")
    }
    else if (practicar==1 && bebermucho==1) {
      alert("usted es un borracho estudioso")
    }
    else if (practicar==2 && bebermucho==1) {
      alert ("usted me da asco (borracho infeliz)");
    }
    else {
      alert("algun valor fue mal ingresado\n escribi 1 o 2 bobo!!!")
    }



