import MyNavBar from './components/MyNavBar';
import PokemonCard from './components/PokemonCard';
import PokemonModal from './components/PokemonModal';
import ky from 'ky';
import { useEffect, useState } from 'react';

export interface Pokemon {
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
        special_attack: number;
        special_defense: number;
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
    damage_multiplier: number;
    damage_relation: string;
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
    damage_multiplier: number;
    damage_relation: string;
}

function App() {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null); // Get the selected pokemon for the modal


    // Used for the search bar
    const [searchQuery, setSearchQuery] = useState('');

    // Load data from local storage on component mount
    useEffect(() => {
        const cachedData = localStorage.getItem('pokemonData');

        if (cachedData) {
            setPokemonData(JSON.parse(cachedData));
            setIsLoading(false);
        } else {
            getAllPokemon();
        }
    }, []);

    const openModal = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
    };
    
    const closeModal = () => {
        setSelectedPokemon(null);
    };

    async function getAllPokemon() {
        try {
            const apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon';
            const response: Pokemon[] = await ky.get(apiUrl).json();
            
            // Save data to local storage
            localStorage.setItem('pokemonData', JSON.stringify(response));
    
            // Check if the data is successfully saved
            const isDataSaved = localStorage.getItem('pokemonData') !== null;
    
            if (isDataSaved) {
                setPokemonData(response);
                setIsLoading(false);
            } else {
                console.error('Error saving data to local storage.');
            }
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    }


    const filteredPokemon = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <>
        <MyNavBar onSearch={(query) => setSearchQuery(query)} />
    
        {isLoading && (
            <p className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            Loading Data ...
            </p>
        )}
        <div className=' flex flex-wrap pt-16 justify-center'>
            {filteredPokemon.map((pokemon) => (
            <PokemonCard
                key={pokemon.id}
                pokedexId={pokemon.pokedexId}
                name={pokemon.name}
                image={pokemon.image}
                apiTypes={pokemon.apiTypes}
                onClick={() => openModal(pokemon)}
            />
            ))}
        </div>
        {selectedPokemon && (
            <PokemonModal pokemon={selectedPokemon} onClose={closeModal} />
        )}
        </>
    );
}

export default App;