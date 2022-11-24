import { GifCard } from "../../src/components/GifCard";
import { render, screen} from '@testing-library/react';

describe('Pruebas en componente GifCard ', () => { 
    const title = 'Naruto';
    const url = 'https://media3.giphy.com/media/mlCb3AjEE6N4Q/giphy.gif?cid=2405e2ba4gt6rxocffmawjl07dh3z4kzzie6dhkacz98wxv1&rid=giphy.gif&ct=g';

    test('testear el snapshot', () => { 
        const {container} = render (<GifCard key={'123'} title={title} url={url}/>);
        expect(container).toMatchSnapshot();
     });


     test('debe mostrar la imagen con el url y el ALT indicado', () => { 
        render(<GifCard key={'123t'} title={title} url={url}/>);

        // expect(screen.getByRole('img').src).toEqual(url);
        // expect(screen.getByRole('img').alt).toEqual(title);

        const{src,alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);



      });

      test('Debe de mostrar en titulo en el componente', () => { 

        render(<GifCard key={'123t'} title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
       })
 })