"use client";
import {motion} from "framer-motion";

export default function Dots(){
    return (
        <div className="flx w-full h-screen items-center justify center">
            <div className="grid grid-cols-8 gap-24">
                {Array.from({ length: 64}, (_,i) => (
                    <Dot
                    key={i}
                    color={getRandomColor()}
                    time={2000}
                    />
                ))}
            </div>
        </div>
    )
}

function getRandomColor() {
    const colors = ["#f43f5e", "#8b5cf6", "#0ea5e9", "#10b981"];
    return colors[Math.floor(Math.random() * colors.length)];
}

const OFFSET = 4;
const ANIMATION_DURACTION = 0.7;
const PAUSE_DURATION = 0.3;

function Dot({color, time}: {color: string, time: number}){
    return (
        <div className="relative">
            <motion.div 
                initial={{x: 0, y:0}}
                animate={{x:OFFSET, y:OFFSET}}
                transition={{
                    duration: ANIMATION_DURACTION,
                    repeat: Infinity,
                    repeatType: "reverse",
                    case: "CaseInOut",
                    delay: time/1000,
                    repeatDelay: PAUSE_DURATION
                }}
                className="absolute w-8 h-8 rounded-full"
                style={{background: color}}
            />

            <motion.div
                initial={{x:0, y:0}}
                animate={{x:-OFFSET, y:-OFFSET}}
                transition={{
                    duration: ANIMATION_DURACTION,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: time / 1000,
                    repeatDelay: PAUSE_DURATION
                }}
                className="absolute w-8 h-8 rounded-full border"
                style={{ borderColor: color, backgroundColor: "#ffedd5"}}
            
            />
        </div>
    )
}