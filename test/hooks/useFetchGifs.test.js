import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import { renderHook, waitFor } from "@testing-library/react";

describe('Pruebas en useFetchGifs',()=>{
    test('deberia de regresar un estado inicial', () => { 

        const {result} = renderHook(() => useFetchGifs('Naruto'));

        const {images, isLoading} = result.current;

        expect (images.length).toBe(0);
        expect (isLoading).toBeTruthy;

     });

     test('deberia de regresar un arreglo de imavenes e isLoading en false', async() => { 

        const {result} = renderHook(() => useFetchGifs('Naruto'));


        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect (images.length).toBeGreaterThan(0);
        expect (isLoading).toBeFalsy;

     })
})