import MetricsChart from "../charts/MetricsChart";
export default function MetricsCard({mockData}) {
    return (
        <div className="m-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {mockData.map((item, index) => {
                console.log('This is waht au are lookin for', index, item.label, item.chartData)
                return (
                    <div
                    key={index}
                    className="flex justify-between text-[#F0EDE6] border-t-4 border-t-green-400 rounded-t-lg gap-3 p-3"
                    >
                        {/* LEFT TEXT */}
                        <div className="flex flex-col justify-between gap-1">
                            <p className="text-xs font-medium tracking-wide uppercase text-[#929292]">
                            {item.label}
                            </p>
            
                            <p className="text-2xl font-semibold leading-tight">
                                {item.formatter ? item.formatter(item.value) : item.value}  
                            </p>
                
                            <div className="flex items-center gap-2">
                                <span className="bg-green-400 rounded-full size-2 inline-block animate-pulse shrink-0" />
                                <p className="text-xs text-green-400 font-medium">{item.rank}</p>
                            </div>
                        </div>

                        {/* CHART */}
                        <MetricsChart data={item.chartData} label={item.label} formatter={item.formatter} />
                        {/* className="self-end" */}
                    </div>
                )
            })}
        </div>
    )
}