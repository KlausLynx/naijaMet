
export default function MetricsCard({mockData}) {
    return (

        <div className="flex justify-center align-middle gap-10 my-4 ">
            { mockData.map((item, index) => (
                <div key={index} className="flex wrap text-[#F0EDE6] border-t-4 border-t-teal-600 rounded-t-lg"
                    style={{
                        height: '100px'
                    }}>
                    <p>{item.label}</p>
                    <p>{item.rank}</p>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
        
    )
}