import './App.css'
import {useEffect, useState} from "react";
import {IconBeer} from "./IconBeer.tsx";
import BeerGlass from "./BeerGlass.tsx";

function App() {
    const [countBeer, setCountBeer] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('beerGlass')) {
            setCountBeer(JSON.parse(localStorage.getItem('beerGlass')).length)
        }
    }, []);

    const handleAddBeer = () => {
        setCountBeer(prev => prev + 1);
    }

    return (
        <div className="bg-white rounded-lg shadow-xl p-8">

            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Счетчик пива 🍺
                Всего {countBeer}
            </h2>
            <span className={'grid grid-cols-3'}>
            {Array.from(Array(countBeer).keys()).map((_, i) => (
                <BeerGlass key={i} id={i}/>
            ))}
                            </span>
            <button className={'bg-amber-300 p-4 rounded-2xl text-black mt-10'}
                    onClick={handleAddBeer}>Добавить
                бокал
            </button>
        </div>
    )
}

export default App
