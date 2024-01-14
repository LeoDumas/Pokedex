import React from 'react';
import { Pokemon } from '../App';
import { pokeIdFormatter } from '../tools/PokeIdFormatter';
import PokeTypeCard from './PokeTypeCard';

interface PokemonModalProps {
    pokemon: Pokemon; // Assuming Pokemon interface is available here
    onClose: () => void;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80" onClick={onClose}>
            <div className=" flex bg-white p-4 max-w-md">
                {/* Left part */}
                <div>
                    <img src={pokemon.image} alt="" />
                    <p>{pokeIdFormatter(pokemon.pokedexId)}</p>
                    <p>{pokemon.name}</p>
                    <p>{pokemon.stats.HP}</p>
                    <p>{pokemon.stats.attack}</p>
                    <p>{pokemon.stats.defense}</p>
                    <p>{pokemon.stats.specialAttack}</p>
                    <p>{pokemon.stats.specialDefense}</p>
                    <p>{pokemon.stats.speed}</p>
                </div>
                {/* Right part */}
                <div>
                    <span>{pokemon.apiGeneration}</span>
                    <ul className=" flex justify-start mt-5">
                        {pokemon.apiTypes.map((type, index) => (
                            <PokeTypeCard typeName={type.name} image={type.image} keyIndex={index} key={index}/>
                        ))}
                    </ul>

                    
                    
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;