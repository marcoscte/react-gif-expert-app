import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid component',() => {

    const category='one punch';

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images : [],
            isLoading : true
        });

        render(<GifGrid category={category} />);

        expect(screen.getByText(category));

        
     })

     test('debe mostrar items cuando cargue la categoria', () => { 

        const gifs = [
            {
                id:'abc',
                title : 'saitama',
                url: 'saitama.jpg'
            },

            {
                id:'abcd',
                title : 'saitama',
                url: 'saitama.jpg'
            }
            

        ]

        useFetchGifs.mockReturnValue({
            images : gifs,
            isLoading : false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
       

        

      })
})