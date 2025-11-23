"use client"

import {cn} from "@/lib/utils";
import {IconPlayerPauseFilled, IconPlayerPlayFilled} from "@tabler/icons-react";
import * as React from "react";
import {useRef, useState} from "react";

interface Track extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    src: string;
    duration: number;
}

export function AudioPlayer({ track, ...props }: { track : Track}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    }

    const handleSeek = (e : React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    const progress = (currentTime / track.duration) * 100;

    return (
        <div
            className={cn(
                "relative flex w-full max-w-3xl items-center gap-6 rounded-4xl bg-[#04071D] px-4 py-4 shadow-2xl md:px-6 border-[#363749]"
            )}
            {...props}
        >
            <audio
                ref={audioRef}
                src={track.src}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
            />

            <button
                onClick={togglePlay}
                className="group relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#1E1E30] transition-all hover:bg-[#2A2A40] focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-95"
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? (
                    <IconPlayerPauseFilled className="h-8 w-8 fill-white text-white" />
                ) : (
                    <IconPlayerPlayFilled className="ml-1 h-8 w-8 fill-white text-white" />
                )}
            </button>

            <div className="flex flex-1 flex-col justify-center gap-2">
                <h3 className="text-lg font-inter font-semibold text-white">{track.title}</h3>
                    <div className="relative">
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-100"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <input
                            type="range"
                            min="0"
                            max={track.duration}
                            value={currentTime}
                            onChange={handleSeek}
                            className="absolute inset-0 h-4 w-full cursor-pointer opacity-0"
                        />
                    </div>
                <div className="flex items-center justify-between font-inter font-medium text-white">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(track.duration)}</span>
                </div>
            </div>
        </div>
    );
}