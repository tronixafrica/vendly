import { useEffect, useState } from "react"

const Metric = (props) => {
    const {visitorsValues, metricTypeOne, reviewsValues, metricTypeTwo} = props
    const [gridWidth, setGridWidth] = useState('10rem')

    useEffect(() => {
        if(window.screen.width >= 500) {
            setGridWidth('14rem')
        }
    })

    console.log(visitorsValues)
    return ( 
        <div className="grid gap-x-2 text-tetiary uppercase" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${gridWidth}, 1fr))`}}>
            {/* visitors metrics */}
            <div className="bg-[#F0F6FF] flex-shrink max-w-[200px] sm:max-w-[480px] sm:h-[190px] h-[150px] flex flex-col justify-center items-center rounded-xl">
                <h1 className="text-[32px] sm:text-[3rem] font-Poppins font-[600]">{visitorsValues}</h1>
                <h1 className="font-[700] font-Raleway ">{metricTypeOne}</h1>
            </div>

            {/* Reviews metrics */}
            <div className="bg-[#F0F6FF] flex-shrink max-w-[200px] sm:max-w-[480px] sm:h-[190px] h-[150px] flex flex-col justify-center items-center rounded-xl">
                <h1 className="text-[32px] sm:text-[3rem] font-Poppins font-[600]">{reviewsValues}</h1>
                <h1 className="font-[700] font-Raleway ">{metricTypeTwo}</h1>
            </div>
        </div>
    );
}
 
export default Metric;