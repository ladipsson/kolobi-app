
import Profile from '../assets/profile/shadcode.jpg'
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import { pink } from '@mui/material/colors';
import SearchBar from '../Components/Search/SearchBar.jsx'

const Nav = () => {
    return (
        <nav className=" nav-bar relative flex justify-between items-center p-6 inset-0">
            <p className=" logo-area text-[--forestGreen] text-xl font-extrabold"><JoinInnerIcon fontSize="large" sx={{ color: pink[500] }} /> Kolobi <span className="text-[--pigmentGreen]">Play</span> </p>
            <div className="searchInput p-1">
                <SearchBar/>
            </div>
            <div className="h-16 w-16">
                <img className="rounded-full border-2 border-[--crimson] w-14 h-14 object-fill" src={Profile} alt="profile photo" />
            </div>
        </nav>
    )
}

export default Nav
