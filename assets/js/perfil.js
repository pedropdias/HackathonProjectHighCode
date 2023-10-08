const nome = document.getElementById("name1");
const cpf = document.getElementById("cpf");
const rg = document.getElementById("rg");
const dataNascimento = document.getElementById("dataNascimento");
const nomeMae = document.getElementById("nameMae");
const nomePai = document.getElementById("namePai");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const uf = document.getElementById("uf");
const municipio = document.getElementById("municipio");
const observacoes = document.getElementById("observacoes");

function criarPessoa() {
    
    
    const pessoa = {
      nome: nome.value,
      cpf: cpf.value,
      rg: rg.value,
      dataNascimento: dataNascimento.value,
      nomeMae: nomeMae.value,
      nomePai: nomePai.value,
      telefone: telefone.value,
      email: email.value,
      cep: cep.value,
      endereco: endereco.value,
      uf: uf.value,
      municipio: municipio.value,
      observacoes: observacoes.value
    };
    console.log(pessoa);
    return pessoa;
  }

const chave = "data"

const botaoEnviar = document.getElementById("enviar");
botaoEnviar.addEventListener("click", function() {
    const novaPessoa = criarPessoa();
    const pessoaJSON = JSON.stringify(novaPessoa);
    localStorage.setItem(chave, pessoaJSON);
    console.log(novaPessoa);
    localStorage.getItem(chave, novaPessoa);
    console.log(localStorage.getItem(chave, novaPessoa));
    window.location.href="/HealthExpress/HealthExpress/perfil.html#";
  });

const pessoaGuardada = JSON.parse(localStorage.getItem(chave));

nome.value = pessoaGuardada.nome;
nome.readOnly = true;
cpf.value = pessoaGuardada.cpf;
cpf.readOnly = true;
rg.value = pessoaGuardada.rg;
rg.readOnly = true;
dataNascimento.value = pessoaGuardada.dataNascimento;
dataNascimento.readOnly = true;
nomeMae.value = pessoaGuardada.nomeMae;
nomeMae.readOnly = true;
nomePai.value = pessoaGuardada.nomePai;
nomePai.readOnly = true;
telefone.value = pessoaGuardada.telefone;
telefone.readOnly = true;
email.value = pessoaGuardada.email;
email.readOnly = true;
cep.value = pessoaGuardada.cep;
cep.readOnly = true;
endereco.value = pessoaGuardada.endereco;
endereco.readOnly = true;
uf.value = pessoaGuardada.uf;
uf.disabled = true;
municipio.value = pessoaGuardada.municipio;
municipio.readOnly = true;
observacoes.value = pessoaGuardada.observacoes;
observacoes.readOnly = true;