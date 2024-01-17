
type Props = {
    name: string;
    damage_multiplier: number;
    damage_relation: string;
    keyIndex: number;
}

const PokeTypeCard2 = (props: Props) => {
    return(
        <li key={props.keyIndex} className=" mx-2 my-3 flex items-center mr-3 bg-slate-200 shadow-md border-2 rounded-tl-2xl rounded-br-2xl w-48 py-1">
            <p className=" text-lg mx-auto">{props.name}</p>
        </li>
    )
}

export default PokeTypeCard2