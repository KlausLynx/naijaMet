import { useState } from "react"; //eslint-disable-line
import HeroLogo from "../assets/hero.webp";
import{cards } from "../hooks/usemetrics.js";
import MetricsCard from "../components/cards/MetricCard";
import DualAxisChart from "./DualAxisChart";    

export default function HeroSection() {
    const NIGERIA = "Nigeria";
    const ArrayTitle = NIGERIA.split("")
    const COLORS = ['#22c55e', '#F0EDE6']

    const mapArrayTitle = ArrayTitle.map((letter, index) => (
        <span key={index}
        style={{
            color: COLORS[index & letter.length]
        }}>
            {letter}
        </span>
    ))
    return(
        <div>
            <div className="relative bg-cover bg-no-repeat bg-center"  style={
            {backgroundImage: `url(${HeroLogo})`, 
            minHeight: "350px",
            }}
            >
                <div className="absolute inset-0 bg-black/60 p-6">
                    <h1 className="font-['Merriweather'] font-extrabold text-4xl md:text-6xl mb-5 leading-snug ">{mapArrayTitle} is the 52nd  <strong className="text-[#F59E0B]">largest economy</strong> in the <span className="md:[text-shadow:_2px_2px_8px_rgba(255,247,247,0.8)]">World</span> </h1>
                    <span className="text-[#F0EDE6] text-shadow-lg text-shadow-black md:text-2xl">Yet it ranks  <strong className="text-[#D9534F]">161st in human development</strong>&mdash; the gap reveals how growth alone rarely lifts people out of poverty.</span>
                </div>
            </div>
            <div>
                <MetricsCard mockData={cards}/>
            </div>
            <div className="flex items-center justify-center w-full">
                <DualAxisChart />
            </div>
        </div>
        
    )
}