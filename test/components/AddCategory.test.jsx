import { render, screen, fireEvent} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas de componenete AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => {
        
        //Se crea sujeto de pruebas
        render(<AddCategory onNewCategory={()=>{}}/>);

        //se extrae el input text del formulario
        const input = screen.getByRole('textbox');
        
        //Disparamos el evento
        fireEvent.input(input, {target:{value : 'Naruto'}});

        expect(input.value).toBe('Naruto');

     });

     test('debe llamar onNewCategpry si el input tiene un valor', () => { 
        const inputValue = 'saitama';

        render(<AddCategory onNewCategory={()=>{}}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value : inputValue}});

        fireEvent.submit(form);

        expect(input.value).toBe('');





      })
 })