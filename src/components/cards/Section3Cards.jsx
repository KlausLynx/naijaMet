export default function Section3Cards({data}) {
    return (
        <div className="max-w-7xl mx-auto m-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col text-[#F0EDE6] border-t-4 rounded-t-lg gap-3 p-3"
                        style={{ borderTopColor: item.color }}
                    >
                        <h3 className="text-xsfont-bold mb-2" style={{ color: item.color }}>
                            {item.value}
                        </h3>
                        <p className="text-gray-400">
                            {item.label}
                        </p>
                        <small className="text-gray-500">
                            {item.source}
                        </small>
                    </div>
                )
            })}
        </div>
    )
}