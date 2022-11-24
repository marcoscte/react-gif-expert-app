import { render, screen, fireEvent} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas de componenete AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => {
        
        //Se crea sujeto de pruebas
        render(<AddCategory onNewCategory={()=>{}}/>);

        //se extrae el input text del formulario
        const input = screen.getByRole('textbox');
        
        //Disparamos el evento onChange enviando el parametro target
        fireEvent.input(input, {target:{value : 'Naruto'}});

        expect(input.value).toBe('Naruto');

     })
 })