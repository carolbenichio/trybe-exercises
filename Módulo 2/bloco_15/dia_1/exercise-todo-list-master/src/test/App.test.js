import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

// Exercicio 1
describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Testando o funcionamento do botão', () => {
  
  test('Testa se o botão existe e tem o valor "Adcionar"', () => {
    const { getByText } = render(<App />)
    const buttonAdd = getByText('Adicionar')
    expect(buttonAdd).toBeInTheDocument();
  })

  test(('Testa se tem valor "Adicionar"'), () => {
    const { getByText } = render(<App />)
    const buttonAdd = getByText('Adicionar')
    expect(buttonAdd.type).toBe('button');
  })

  test(('Verifica se ao ser clicado a tarefa digitada pelo o usuário precisa ser salva'), () => {
    const { getByLabelText, queryByText, getByText } = render(<App />);
    const listItem = getByLabelText('Tarefa:');
    const buttonAdd = getByText('Adicionar')

    fireEvent.change(listItem, { target: { value: 'Beber água!' } });
    expect(queryByText('Beber água!')).not.toBeInTheDocument();
    fireEvent.click(buttonAdd);
    expect(queryByText('Beber água!')).toBeInTheDocument();
  })
})

// Exercício 2



describe('Testa a aplicação, e o input', () => {
  test('Testa a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    listTodo.forEach((task) => { // joga todas as tarefas, uma por uma, verificando se escreveu + apertou botao
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      expect(getByText(task)).toBeInTheDocument(); // verifica se cada tarefa ta no documento
    })
  })
});

describe('Testa o Componente item', () => {
  test('Ao receber uma string na props ela precisa aparecer na tela.', () => {
    const { getByText } = render(<Item content="Limpar a casa" />);
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  });
});