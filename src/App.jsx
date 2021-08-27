import {
  Navbar,
  Header,
  Tagline,
  ActionButton,
  Brands,
  BoostProductivity,
  AutomatedTasks,
  Features,
  Team,
  Blog,
  BottomNav
} from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="App ">
      <Navbar />
      <Header />
      <Tagline />
      <ActionButton />
      <Brands />
      <BoostProductivity />
      <AutomatedTasks />
      <Features />
      <Team/>
      <Blog/>
      <BottomNav/>
    </div>
  );
};

export default App;
