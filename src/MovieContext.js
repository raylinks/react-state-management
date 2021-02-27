import  React , {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
 
    const[movies, setMovies] = useState([
        {
            id: 1,
            name: "Adewole",
            price: "200.00",
            quantity: 6  
        },
        {
            id: 2,
            name: "Bukky",
            price: "800.00",
            quantity: 9  
        },
        {
            id: 1,
            name: "Aminat",
            price: "100.00",
            quantity: 8  
        },
        {
            id: 1,
            name: "Adewole",
            price: "500.00",
            quantity: 1  
        }
    ]);
    return (
        <MovieContext.Provider  value={'Hello'}>
           {props.children}
        </MovieContext.Provider>

    );
}