import PropTypes from 'prop-types';
const Artistcard = (props) => {
  return (
    <section className='flex items-center gap-x-3.5 mt-4 my-2.5'>
        <img  className='w-10 h-10 rounded-full' src={props.image} alt="" />
        <div>
            <p className='text-xs text-[--richBlack] font-extrabold'>{props.name}</p>
            <p className='text-xs text-[--pigmentGreen] font-bold'>{props.followers}</p>
        </div>
    </section>
  )
}

Artistcard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    image: PropTypes.image,
    followers: PropTypes.string.isRequired
  };

export default Artistcard
