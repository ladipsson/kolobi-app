
const Leftpanel = () => {
  return (
    <section className=" left-panel w-1/4 flex flex-col flex-1 items-center text-center pt-7 bg-[--gunmetal] h-full">
      <div className="top-listen">
        <h2 className="capitalize text-[--pigmentGreen] font-semibold">Music</h2>
        <ul className="text-[--babyPowder] text-sm font-semibold">
          <li className="my-2" >Home</li>
          <li className="my-2" >Trending Songs</li>
          <li className="my-2" >Trending Albums</li>
        </ul>
      </div>
      <div className="faves my-6">
        <h2 className="capitalize text-[--pigmentGreen] font-semibold">Charts</h2>
        <ul className="text-[--babyPowder] text-sm font-semibold">
          <li className="my-2" >Top Songs</li>
          <li className="my-2" >Top Albums</li>
          <li className="my-2" >Recommended</li>
        </ul>
      </div>
      <div className="faves my-6">
        <h2 className="capitalize text-[--pigmentGreen] font-semibold">Library</h2>
        <ul className="text-[--babyPowder] text-sm font-semibold">
          <li className="my-2" >Add Playlist</li>
          <li className="my-2" >Favourites</li>
          <li className="my-2" >My Playlists</li>
        </ul>
      </div>
    </section>
  )
}

export default Leftpanel
