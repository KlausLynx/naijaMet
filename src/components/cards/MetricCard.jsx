
export default function MetricsCard({mockData}) {
    return (

        <div className="m-6 "
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '16px',
                alignItems: "stretch"
            }}
        >

            { mockData.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-[#F0EDE6] border-t-4 border-t-green-400 rounded-t-lg gap-3"
                    style={{
                        padding: '8px',
                        minHeight: '150px'
                    }}>
                    <p className="text-[#929292]">{item.label}</p>
                    <p>{item.value}</p>
                    <div className="flex gap-2">
                        <span className="bg-green-400 rounded-full size-3 inline-block animate-pulse self-center"></span>
                        <p>{item.rank}</p>
                    </div>
                </div>
            ))}
        </div>
        
    )
}