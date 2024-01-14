import PokeTypeCard from "./PokeTypeCard";

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

    function pokdeIdFormatter(value: number): string{
        const valueString = value.toString();
        // Get the number of 0 to add on the left
        const zeroToAdd = Math.max(0,4 - valueString.length);
        // Add the 0 
        const formattedValue = "N°" + "0".repeat(zeroToAdd)+ valueString;
        return formattedValue;
    }

    return (
        <div className=' bg-white border-[1px] p-5 shadow-lg m-5 w-96'>
            <img data-te-lazy className=" lazyload" src={props.image} alt={"img_" + props.name} />
            
            <div>
                <p className=' opacity-60'>{pokdeIdFormatter(props.pokedexId)}</p>
                <h2 className=' text-xl'>{props.name}</h2>
            </div>

            <div>
                <ul className=" flex justify-start mt-5">
                    {props.apiTypes.map((type, index) => (
                        <PokeTypeCard typeName={type.name} image={type.image} keyIndex={index} key={index}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonCard;
