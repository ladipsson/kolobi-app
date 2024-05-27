
const Leftpanel = () => {
  return (
    <section className=" left-panel w-1/4 flex flex-col flex-1 items-center text-center pt-7 rounded-tr-3xl bg-[--crimson] h-full">
      <div className="top-listen">
        <h2 className="capitalize text-[--pigmentGreen] font-semibold">Top Listen</h2>
        <ul className="text-[--babyPowder] text-sm font-semibold">
          <li className="my-2" >Gospel Music</li>
          <li className="my-2" >Kids Music</li>
          <li className="my-2" >Adult Music</li>
        </ul>
      </div>
      <div className="faves my-6">
        <h2 className="capitalize text-[--pigmentGreen] font-semibold">Favorites</h2>
        <ul className="text-[--babyPowder] text-sm font-semibold">
          <li className="my-2" >Naija Vibes</li>
          <li className="my-2" >Chill Out</li>
          <li className="my-2" >Dance Hall</li>
        </ul>
      </div>
    </section>
  )
}

export default Leftpanel
