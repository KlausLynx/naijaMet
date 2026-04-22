export default function Section4Card({data}) {
    return (
        <div className="m-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {data.map((item, index) => {
                console.log('This is waht au are lookin for', index, item.label, item.chartData)
                return (
                    <div
                    key={index}
                    className="flex justify-between text-[#F0EDE6] border-t-4 border-t-green-400 rounded-t-lg gap-3 p-3"
                    >
                        {/* LEFT TEXT */}
                        <div className="flex flex-col justify-between gap-1">
                            <p className="text-xs font-medium tracking-wide uppercase text-[#E89B3A]">
                            {item.step}
                            </p>
            
                            <p className="text-2xl font-semibold leading-tight">
                                {item.title}  
                            </p>
                
                            <div className="flex items-center gap-2">
                                <p className="text-sm text-[#F0EDE6] leading-loose font-medium">{item.text}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div> 
    )
}