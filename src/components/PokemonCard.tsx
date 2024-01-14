import PokeTypeCard from "./PokeTypeCard";
import { pokeIdFormatter } from "../tools/PokeIdFormatter";

type Props = {
    pokedexId: number;
    name: string;
    image: string;
    apiTypes: ApiType[];
    onClick: () => void;
};

interface ApiType {
    name: string;
    image: string;
}

const PokemonCard = (props: Props) => {

    return (
        <div className=' bg-white border-[1px] p-5 shadow-lg m-5 w-96' onClick={props.onClick}>
            <img data-te-lazy className=" lazyload" src={props.image} alt={"img_" + props.name} />
            
            <div>
                <p className=' opacity-60'>{pokeIdFormatter(props.pokedexId)}</p>
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
