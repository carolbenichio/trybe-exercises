import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const digimon = [{
      name:"Koromon",
      img:"https://digimon.shadowsmith.com/img/koromon.jpg",
      level:"In Training",
    }];
    render(<Digimon digimon={digimon} />)
    const digimonName = screen.getByTestId('digimonName');
    expect(digimonName).toBeInTheDocument();
  });
});