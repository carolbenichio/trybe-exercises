function criaEstados() {
  let listaEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernanbuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const estadosSelect = document.getElementById('estado')

  for (let i = 0; i < listaEstados.length; i += 1) {
    let estadoOpcao = document.createElement('option');
    estadosSelect.appendChild(estadoOpcao).innerText = listaEstados[i];
    estadosSelect.appendChild(estadoOpcao).value = listaEstados[i];
  }
} 

let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  endereco: {
    maxLength: 200,
    required: true
  },
  cidade: {
    maxLength: 28,
    required: true,
  },
  estado: {
    type: 'select',
    required: true,
  },
  casa: {
    type: 'radio',
    required: true,
  },
  apto: {
    type: 'radio',
    required: true,
  },
  resumo: {
    maxLength: 1000,
    required: true,
  },
  cargo: {
    maxLength: 40,
    required: true,
  },
  descCargo: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

function defaultValidation(input, name){
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if(validation.required && trimmed.length === 0){
    return false;
  }

  if(validation.maxLength && trimmed.length > validation.maxLength){
    return false;
  }
  
  return true;
}

function defaultValidation(input, name){
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if(validation.required && trimmed.length === 0){
    return false;
  }

  if(validation.maxLength && trimmed.length > validation.maxLength){
    return false;
  }
  

  return true;
}


function enviaDados(event) {
  event.preventDefault();
}

window.onload = function() {
  criaEstados();



}