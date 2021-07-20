import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});
afterEach(() => jest.clearAllMocks());

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const linkElement = screen.getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('verifica se o input value funciona', () => {
    const inputName = screen.getByTestId('input');
    expect(inputName).toHaveValue('');
    fireEvent.change(inputName, { target: { value: 'Agumon' } });
    expect(inputName).toHaveValue('Agumon');
  });
  
  it('verifica se o botao funciona', () => {
    const buttonSearch = screen.getByTestId('buttonSearch');
    expect(buttonSearch).toBeInTheDocument();
  })

  it('verifica se o fetch funciona', async () => {
    const inputName = screen.getByTestId('input');
    fireEvent.change(inputName, { target: { value: 'Koromon' } });
    const buttonSearch = screen.getByTestId('buttonSearch');

    const digimon = [{
      name:"Koromon",
      img:"https://digimon.shadowsmith.com/img/koromon.jpg",
      level:"In Training",
    }];
    
    global.fetch = jest.fn(async () => ({
      json: async () => digimon
    }));

    fireEvent.click(buttonSearch);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Koromon');
  });
});