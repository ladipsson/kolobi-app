import PropTypes from 'prop-types';
import cardContent from '../Components/Cardcontent.js'
import { useEffect } from 'react';

const Cards = ({ id, name, image, song, totalSongs, audioRef, isCurrentSong, onCardClick }) => {

  useEffect(() => {
    if (isCurrentSong && audioRef.current) {
      audioRef.current.src = song;
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }
  }, [isCurrentSong, song, audioRef]);


  const handleCardClick = () => {
    onCardClick();
    if (audioRef.current) {
      audioRef.current.src = cardContent.find(card => card.id === id).song;
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }
  };


  const cardData = cardContent.find(card => card.id === id);
  const audioSource = cardData ? cardData.song : '';


  console.log('Audio Source:', audioSource);

  return (
    <section className='w-48 h-48 flex justify-center items-center'>
      <div onClick={handleCardClick} className='each-card flex duration-700 w-48 h-48 justify-center cursor-pointer hover:bg-[--babyPowderLight] rounded-xl items-center flex-col text-center' key={id}>
        <div className='img-container w-32 h-32 my-3 shadow-xl rounded-xl duration-700 hover:scale-90'>
          <img onClick={handleCardClick} src={image} className='card-img w-32 h-32 rounded-xl  border-solid border-2 border-[--pigmentGreen] object-cover' alt="Genre photo" />
        </div>
        <p className='song-title cursor-pointer text-xs pt-1 font-extrabold text-[--richBlack] hover:text-[--pigmentGreen]-600'>{name}</p>
        <p className='song-artist text-xs w-10/12 pb-1 text-wrap font-semibold text-[--crimson]'>{totalSongs}</p>
      </div>
      <audio ref={audioRef} src={audioSource} type='audio/mpeg' controls style={{ display: 'none' }} />
    </section>
  )
};


Cards.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  totalSongs: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  audioRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  isCurrentSong: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Cards
