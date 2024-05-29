import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
const AudioPlay = ({ audioRef, onNextSong, onPrevSong, currentSong, isPlaying, togglePlayPause }) => {
    const Max = 20;
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateDuration = () => setDuration(audio.duration);
            const updateCurrentTime = () => setCurrentTime(audio.currentTime);

            audio.addEventListener('loadedmetadata', updateDuration);
            audio.addEventListener('timeupdate', updateCurrentTime);

            return () => {
                audio.removeEventListener('loadedmetadata', updateDuration);
                audio.removeEventListener('timeupdate', updateCurrentTime);
            };
        }
    }, [currentSong, audioRef]);

    const handleSeek = (e) => {
        const time = Number(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolume = (e) => {
        const value = e.target.value;
        const volume = Number(value) / Max;
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }

    const handleNextSong = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        onNextSong();
    };

    const handlePrevSong = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        onPrevSong();
    };

    // const [play, setPlay] = useState(false)

    // const togglePlayPause = () => {
    //     if (audioRef.current) {
    //         if (play) {
    //             audioRef.current.pause();
    //         } else {
    //             audioRef.current.play().catch(error => {
    //                 console.error('Audio playback failed:', error);
    //             });
    //         }
    //         setPlay(!play);
    //     }
    // }

    return (
        <div className='audioplay-container flex justify-center items-center gap-x-3.5 py-2.5 px-2.5 mt-4'>

            <div className='songs-control flex flex-col  gap-2 justify-center items-center flex-1'>
                <div className='controls-btn  text-[--babyPowder] flex gap-x-6 justify-center'>
                    {/* <button className='shuffle' label='shuffle'>
                        <i className="fa-solid fa-shuffle text-xs"></i>
                    </button> */}
                    <button onClick={handlePrevSong} className='back' label="back">
                        <i className="fa-solid fa-backward-step text-xs"></i>
                    </button>
                    <button onClick={togglePlayPause} aria-label="play" className='play duration-700 hover:bg-[--pigmentGreen] bg-[--crimson] flex items-center justify-center rounded-full text-center w-10 h-10 p-6' label="play">
                        {!isPlaying ? (
                            <i className="fa-solid fa-play text-2xl" aria-hidden="true"></i>
                        ) : (
                            <i className="fa-solid fa-pause" aria-hidden="true"></i>
                        )}
                    </button>
                    <button onClick={handleNextSong} className='forward' label="skip">
                        <i className="fa-solid fa-forward-step text-xs"></i>
                    </button>
                    {/* <button className='repeat' label="repeat" >
                        <i className="fa-solid fa-repeat text-xs"></i>
                    </button> */}
                </div>
                <div className=" seek w-full">
                    <input onChange={handleSeek} type="range" min={0} max={duration} value={currentTime} className="progress mt-2.5 w-full" />
                </div>
            </div>
            <div className='songs-setting flex flex-col-reverse gap-y-6 justify-center items-center mt-2 w-30'>
                <input onChange={(e) => handleVolume(e)} type="range" min={0} max={Max} className="progress volume w-full" />
                <i className="fa-solid fa-volume-high text-[--babyPowder] text-lg cursor-pointer"></i>
            </div>

        </div>
    )

}

AudioPlay.propTypes = {
    audioRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    onNextSong: PropTypes.func.isRequired,
    onPrevSong: PropTypes.func.isRequired,
    currentSong: PropTypes.object.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    togglePlayPause: PropTypes.func.isRequired,
};


export default AudioPlay
