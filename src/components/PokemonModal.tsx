import React from 'react';
import { Pokemon } from '../App';
import { pokeIdFormatter } from '../tools/PokeIdFormatter';
import PokeTypeCard from './PokeTypeCard';
import PokeTypeCard2 from './PokeTypeCard2';
import StatsBar from './StatsBar';

interface PokemonModalProps {
    pokemon: Pokemon; // Assuming Pokemon interface is available here
    onClose: () => void;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, onClose }) => {
    return (
        // ToDo : change bg-gray on conditional render because when click on modal, it close it self
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80" onClick={onClose}>
            <div className=" flex bg-white p-4 ">
                {/* Left part */}
                <div className='w-1/2'>
                    {/* ToDo: create picture component where we can add multiple picture dans buttons to switch between those */}
                    <img className=' w-10/12' src={pokemon.image} alt="" />
                    <p>{pokeIdFormatter(pokemon.pokedexId)}</p>
                    <p>{pokemon.name}</p>

                    <StatsBar title='Health' pourcent={pokemon.stats.HP} />
                    <StatsBar title='Attack' pourcent={pokemon.stats.attack} />
                    <StatsBar title='Defense' pourcent={pokemon.stats.defense} />
                    <StatsBar title='Special Attack' pourcent={pokemon.stats.special_attack} />
                    <StatsBar title='Special Defense' pourcent={pokemon.stats.special_defense} />
                    <StatsBar title='Speed' pourcent={pokemon.stats.speed} />

                </div>
                {/* Right part */}
                <div className=' w-1/2'>
                    <span className=' bg-blue-300 px-10 py-1 rounded-tl-3xl rounded-br-3xl'>{"Gen " + pokemon.apiGeneration}</span>
                    <h2 className=' mt-5 text-xl font-semibold'>Type(s)</h2>
                    <ul className=" flex justify-start mt-1">
                        {pokemon.apiTypes.map((type, index) => (
                            <PokeTypeCard typeName={type.name} image={type.image} keyIndex={index} key={index}/>
                        ))}
                    </ul>

                    {/* ToDo : For Weakness and resistance, check for damage_relation in apiResistances */}
                    <h2 className='mt-5 text-xl font-semibold'>Weakness</h2>
                    <ul className="flex flex-wrap justify-start mt-1">
                        {pokemon.apiResistances
                            .filter(type => type.damage_multiplier < 1)
                            .map((type, index) => (
                                <PokeTypeCard2 name={type.name} damage_multiplier={type.damage_multiplier} damage_relation={type.damage_relation} keyIndex={index} />
                            ))}
                    </ul>

                    {/* Ressistance */}
                    <h2 className='mt-5 text-xl font-semibold'>Weakness</h2>
                    <ul className="flex flex-wrap justify-start mt-1">
                        {pokemon.apiResistances
                            .filter(type => type.damage_multiplier > 1)
                            .map((type, index) => (
                                <PokeTypeCard2 name={type.name} damage_multiplier={type.damage_multiplier} damage_relation={type.damage_relation} keyIndex={index} />
                            ))}
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;