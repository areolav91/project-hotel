import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import LoginPage from "../login/LoginPage";
import DestinationPage from "../destinations/Dest";
import Navigation from "./Navigation";
import {AuthProvider} from "../context/AuthContext";
import Admin from "../admin/Admin";
import HotelInfo from "../hotels/hotelInfo";




function Layout() {



	return (
		<AuthProvider >
		<Router>
		
			<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={LoginPage} />
					<Route path="/destinations" component={DestinationPage} />
					<Route path="/admin" component={Admin} />
					<Route path="/hotels/:id" component={HotelInfo} />
				</Switch>
			
		</Router>
		</AuthProvider>
	);
}

export default Layout;