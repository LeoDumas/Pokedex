import React from 'react';

type Props = {
    pokedexId: number;
    name: string;
    image: string;
    apiTypes: ApiType[];
};

interface ApiType {
    name: string;
    image: string;
}

const PokemonCard = (props: Props) => {
    return (
        <div className=' bg-slate-100 shadow-lg m-5'>
            <p>{"N°" + props.pokedexId}</p>
            <img src={props.image} alt={"img_" + props.name} />
            <h2>{props.name}</h2>

            <div>
                <p>Types:</p>
                <ul>
                    {props.apiTypes.map((type, index) => (
                        <li key={index}>
                            <img src={type.image} alt={type.name} />
                            {type.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonCard;
