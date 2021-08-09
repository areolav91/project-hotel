import Heading from "../layout/Heading";
import HotelSearch from "./SearchBar";
import logo from "../images/logo.png";


export default function HomePage() {
	return (
		<>
			
			<div className="homepage">
			<Heading content="Home" />
			<div className="logo">
			<img src= { logo } alt="logo-image" />
			</div>
			<div className="searchbar">
			<HotelSearch />
			</div>
			</div>
		</>
	);
}

