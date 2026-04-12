import { AreaChart, ResponsiveContainer,  CartesianGrid, Area, XAxis, YAxis, Tooltip,  } from "recharts";


export default function MetricsChart ({data, formatter }) {
    const FIRST_YEAR = data[0].year;
    const LAST_YEAR = data[data.length - 1].year
    return (
        <div  style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                <defs>
                    <linearGradient id="areafill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%"  stopColor="#F59E0B" stopOpacity="0.83"/>
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3"/>
                    </linearGradient>
                </defs>
                    <CartesianGrid vertical={false} stroke="#cfcfcf57" strokeDasharray="2 4" strokeOpacity={0.3}/>
                    <XAxis 
                        dataKey="date" 
                        interval="preserveEnd" 
                        ticks={[FIRST_YEAR, LAST_YEAR]} 
                        tick={{fontSize: 12, fill: "#a1a1a1",fontFamily: 'monospace'}} 
                        tickLine={false} 
                        axisLine={false}
                    />
                    
                    <YAxis 
                        domain={['auto', 'auto']} 
                        tick={{fontSize: 12, fill: "#a1a1a1",fontFamily: 'monospace'}} 
                        tickLine={false} 
                        tickFormatter={formatter}
                        axisLine={false}
                    />

                    <Area type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={1} fill="url(#areafill)" dot={false} activeDot={false} ></Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
