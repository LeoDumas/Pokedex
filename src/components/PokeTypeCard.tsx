
type Props = {
    typeName: string;
    image: string;
    keyIndex: number;
}

const PokeTypeCard = (props: Props) => {
    return (
        <li key={props.keyIndex} className=" flex items-center mr-3">
            <p className=" text-lg">{props.typeName}</p>
            <img data-te-lazy className=" w-8 h-8 lazyload" src={props.image} alt={"img_"+props.typeName} />
        </li>
    )
}

export default PokeTypeCard