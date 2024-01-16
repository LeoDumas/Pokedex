import React from 'react'

type Props = {
    title: string;
    pourcent: number;
    // color?: string; // Hex color -> Not available yet -> really useful ?
}

const StatsBar = (props: Props) => {

    // const activeBar = `bg-blue-500 h-2 rounded-full w-${props.pourcent}`;

    // console.log(activeBar)

    return (
        <div className=' mb-3'>
            <h3 className=''>{props.title}</h3>
            {/* <div className=' relative left-0 bg-gray-300 w-full h-2 rounded-md '>
                <div className={activeBar}/>
            </div> */}

            {/* Temporary solution */}
            <progress className=' ' value={props.pourcent/100}></progress> 

            {/* <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
                <div className={activeBar}></div>
            </div> */}
        </div>
    )
}

export default StatsBar