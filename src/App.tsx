import MyNavBar from './components/MyNavBar';
import PokemonCard from './components/PokemonCard';
import ky from 'ky';
import { useEffect, useState } from 'react';

interface Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: {
        HP: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
    apiTypes: ApiType[];
    apiGeneration: number;
    apiResistances: ApiResistance[];
    apiEvolutions: ApiEvolution[];
    apiPreEvolution: ApiPreEvolution | undefined;
    apiResistancesWithAbilities: ApiResistanceWithAbilities[];
}

interface ApiType {
    name: string;
    image: string;
}

interface ApiResistance {
    name: string;
    damageMultiplier: number;
    damageRelation: string;
}

interface ApiEvolution {
    name: string;
    pokedexId: number;
}

interface ApiPreEvolution {
    name: string;
    pokedexIdd: number;
}

interface ApiResistanceWithAbilities {
    type: string;
    damageMultiplier: number;
    damageRelation: string;
}

function App() {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

    async function getAllPokemon() {
        try {
            const apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon';
            const response: Pokemon[] = await ky.get(apiUrl).json();
    
            // Assuming the API response is an array of Pokemon objects
            setPokemonData(response);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    }
    

    useEffect(() => {
        getAllPokemon();
    }, []);

    return (
        <>
            <MyNavBar />

            {/* Render your Pokemon data here */}
            <div>
                {pokemonData.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokedexId={pokemon.pokedexId}
                        name={pokemon.name}
                        image={pokemon.image}
                        apiTypes={pokemon.apiTypes}
                    />
                ))}
            </div>
        </>
    );
}

export default App;