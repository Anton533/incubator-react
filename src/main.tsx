import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import PageTitle from "./components/PageTitle.tsx";
import TracksList from "./components/TracksList.tsx";
import TrackDetails from "./components/TrackDetails.tsx";
import Footer from "./components/Footer.tsx";

const rootEle = document.getElementById("root");
const reactRoot = createRoot(rootEle!);

reactRoot.render(<MainPage />);

function MainPage() {
  return (
    <div>
      <Header />
      <PageTitle />
      <div className="tracks-wrapper">
        <TracksList />
        <TrackDetails />
      </div>
      <Footer />
    </div>
  );
}
