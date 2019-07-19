var campoFiltro = document.querySelector("#filtrar-nome");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pessoas = document.querySelectorAll(".nomes-lista");

    if (this.value.length > 0) {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            var tdNome = pessoa.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                pessoa.classList.add("invisivel");
            } else {
                pessoa.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            pessoa.classList.remove("invisivel");
        }
    }
});

var campoFiltro = document.querySelector("#filtrar-parceria");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pessoas = document.querySelectorAll(".nomes-lista");

    if (this.value.length > 0) {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            var tdNome = pessoa.querySelector(".info-parceria");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                pessoa.classList.add("invisivel");
            } else {
                pessoa.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            pessoa.classList.remove("invisivel");
        }
    }
});

var campoFiltro = document.querySelector("#filtrar-local");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pessoas = document.querySelectorAll(".nomes-lista");

    if (this.value.length > 0) {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            var tdNome = pessoa.querySelector(".info-local");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                pessoa.classList.add("invisivel");
            } else {
                pessoa.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            pessoa.classList.remove("invisivel");
        }
    }
});

var campoFiltro = document.querySelector("#filtrar-data");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pessoas = document.querySelectorAll(".nomes-lista");

    if (this.value.length > 0) {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            var tdNome = pessoa.querySelector(".info-data");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                pessoa.classList.add("invisivel");
            } else {
                pessoa.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            pessoa.classList.remove("invisivel");
        }
    }
});