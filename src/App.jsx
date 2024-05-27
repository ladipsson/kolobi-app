import Nav from './Components/Nav.jsx'
import Leftpanel from './Components/Leftpanel.jsx'
import Content from './Components/Cardcontent.js'
import Cards from './Components/Cards.jsx'
// import Artistcontent from './Components/Artistcontent.js'
// import Artistcard from './Components/Artistcard.jsx'
import AudioPlay from './Components/Controls/AudioPlay.jsx'
import { useRef, useState } from 'react'

const App = () => {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % Content.length);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1) % Content.length);
    setIsPlaying(true)
  };

  const handleCardClick = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const togglePlayPauseBtn = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className='main-section bg-[--crimson] absolute rounded-2xl overflow-hidden inset-0 mx-auto my-auto h-[44rem] w-3/6'>
      <main className='main bg-[--babyPowder] h-[36rem] shadow-2xl  overflow-hidden rounded-t-2xl rounded-b-3xl '>
        <header className='header'>
          <Nav />
        </header>
        <section className=' card-area flex justify-between items-center gap-x-1.5 h-full '>
          <Leftpanel />
          <section className='card-container w-9/12 h-full pr-2'>
            <h1 className='title uppercase text-2xl text-center text-[--crimson] font-bold'>Click and Listen to songs</h1>
            <div className='card grid grid-cols-3'>
              {Content.map((content, index) => (
                <Cards
                  key={content.id}
                  id={content.id}
                  image={content.image}
                  name={content.name}
                  totalSongs={content.totalSongs}
                  song={content.song}
                  audioRef={audioRef}
                  isCurrentSong={index === currentSongIndex}
                  onCardClick={() => handleCardClick(index)}
                />
              ))}
              {/* <AudioPlay audioRef={audioRef} controls style={{ display: 'none' }}/> */}
            </div>
          </section>
          {/* <section className='mb-3'>
            <h2 className='capitalize text-[--pigmentGreen] font-semibold'>Featured Artists</h2>
            <div>
              {Artistcontent.map(artist => (
                <Artistcard
                  key={artist.id}
                  image={artist.image}
                  name={artist.name}
                  followers={artist.followers}
                />
              ))}
            </div>
          </section> */}
        </section>
      </main>
      <AudioPlay audioRef={audioRef} isPlaying={isPlaying} togglePlayPause={togglePlayPauseBtn} onPrevSong={handlePrevSong} onNextSong={handleNextSong} currentSong={Content[currentSongIndex]}/>
    </section>
  )
}

export default App