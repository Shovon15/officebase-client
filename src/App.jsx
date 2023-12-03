import { ToastContainer } from "react-toastify";
import ScrollButton from "./components/button/ScrollButton";
import MainRoutes from "./routes/mainRoutes/MainRoutes";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<>
			<MainRoutes />
			<ScrollButton />
			<ToastContainer />
		</>
	);
}

export default App;
