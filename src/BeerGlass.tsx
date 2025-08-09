import React, {useEffect, useState} from 'react';

interface Props {
    id: number
}

const BeerGlass = ({id}: Props) => {
    const [isFilling, setIsFilling] = useState(true);

    const handleClick = () => {
        setIsFilling(false);
        const items = JSON.parse(localStorage.getItem('beerGlass'));
        if (items && !items.includes(id)) {
            return localStorage.setItem('beerGlass', JSON.stringify([...items, id]))
        }

        if (!items) {
            return localStorage.setItem('beerGlass', JSON.stringify([id]))
        }
    };

    useEffect(() => {
        if (localStorage.getItem('beerGlass')) {
            const item = JSON.parse(localStorage.getItem('beerGlass')).find(item => item === id);
            if (item) {
                setIsFilling(false)
            }
        }
    }, [localStorage.getItem('beerGlass')]);

    return (
        <div
            className="w-48 h-48 cursor-pointer relative hover:scale-105 transition-transform duration-300"
            onClick={handleClick}
        >
            <svg viewBox="0 0 1024 1024" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Маска для стакана */}
                    <mask id="beerMask">
                        <rect x="0" y="0" width="1024" height="1024" fill="white"/>
                        <path d="M222.749811 198.548612h487.622407v799.556811H222.749811z" fill="white"/>
                    </mask>

                    {/* Градиент для пива */}
                    <linearGradient id="beerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#F5ECDA', stopOpacity: 1}}/>
                        <stop offset="10%" style={{stopColor: '#FFFFFF', stopOpacity: 1}}/>
                        <stop offset="15%" style={{stopColor: '#EBA824', stopOpacity: 1}}/>
                        <stop offset="100%" style={{stopColor: '#EBA824', stopOpacity: 1}}/>
                    </linearGradient>
                </defs>

                {/* Контур стакана */}
                <path
                    d="M222.749811 198.548612h487.622407v799.556811H222.749811z"
                    fill="none"
                    stroke="#D4A574"
                    strokeWidth="4"
                    className="drop-shadow-lg"
                />

                {/* Дно стакана */}
                <path
                    d="M222.749811 903.064563h487.622407v66.4651H222.749811z"
                    fill="#EACC53"
                />

                {/* Пиво с анимацией */}
                <rect
                    x="222.749811"
                    y={isFilling ? "198.548612" : "998.105423"}
                    width="487.622407"
                    height="799.556811"
                    fill="url(#beerGradient)"
                    mask="url(#beerMask)"
                    className={`transition-all duration-[2000ms] ease-in-out ${isFilling ? '' : ''}`}
                    style={{
                        transition: 'y 2s ease-in-out'
                    }}
                />

                {/* Пузырьки */}
                <g className={`transition-opacity duration-500 ${isFilling ? 'opacity-100' : 'opacity-0'}`}>
                    <circle
                        cx="350" cy="700" r="5"
                        fill="#FFFFFF"
                        className={`opacity-60 ${isFilling ? 'animate-float-up' : ''}`}
                    />
                    <circle
                        cx="450" cy="750" r="3"
                        fill="#FFFFFF"
                        className={`opacity-60 ${isFilling ? 'animate-float-up animation-delay-500' : ''}`}
                    />
                    <circle
                        cx="550" cy="720" r="4"
                        fill="#FFFFFF"
                        className={`opacity-60 ${isFilling ? 'animate-float-up animation-delay-1000' : ''}`}
                    />
                    <circle
                        cx="400" cy="800" r="6"
                        fill="#FFFFFF"
                        className={`opacity-60 ${isFilling ? 'animate-float-up animation-delay-1500' : ''}`}
                    />
                    <circle
                        cx="600" cy="780" r="3"
                        fill="#FFFFFF"
                        className={`opacity-60 ${isFilling ? 'animate-float-up animation-delay-2000' : ''}`}
                    />
                </g>

                {/* Декоративные линии на стакане */}
                <path
                    d="M312.639978 432.799283h41.134982V923.596775h-41.134982zM447.192999 432.799283h41.134983V923.596775h-41.134983zM578.570936 432.799283h41.134983V923.596775H578.570936z"
                    fill="#EACC53"
                    className="opacity-30"
                />

                {/* Ручка */}
                <path
                    d="M828.767588 345.731413h-118.324813v38.030456H782.481913c26.10625 0 47.485151 21.378902 47.485151 47.485151v335.6417c0 26.10625-21.378902 47.485151-47.485151 47.485152h-72.039138v38.030455h118.324813c26.10625 0 47.485151-21.378902 47.485151-47.485151V393.216564c0-26.10625-21.378902-47.485151-47.485151-47.485151z"
                    fill="#6E4921"
                />

                {/* Пена */}
                <g
                    className={`transition-all duration-500 transform ${
                        isFilling ? 'opacity-100 translate-y-0 delay-[1800ms]' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <path
                        d="M185.848274 101.532144s-58.562668 98.145387 41.981672 129.825673c26.10625 5.574037 79.94157-2.398953 111.621856-15.028733 15.028733-3.175084 52.212499-14.252601 64.912837 25.330118 10.301385 16.651554 52.212499 64.912837 85.515606 7.902432 10.301385-24.553986 18.979949-54.611452 62.513884-49.884104 26.10625 3.951216 103.366637 32.033074 158.048646 13.053125 0.211672 47.979053 0 50.801351 0 50.801351s71.96858-10.019155 49.390202-103.437194c-7.126301-24.553986-38.030455-69.640185-89.466823-68.864053-20.60277-7.126301-37.183766-22.155033-49.884103-30.904155-14.252601-9.525253-96.593123-56.234273-162.282092-7.902433-20.60277-6.773513-37.183766-19.403294-80.717702-25.330117-36.054847-3.104527-124.957211-5.291807-191.633983 74.43809z"
                        fill="#F5ECDA"
                        transform="translate(0, 100)"
                    />
                </g>
            </svg>
        </div>
    );
};

export default BeerGlass;