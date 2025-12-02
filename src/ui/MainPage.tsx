import TracksList from "./TracksList.tsx";
import TrackDetails from "./TrackDetails.tsx";
import { useTrackSelection } from "../bll/useTrackSelection.ts";

function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  };
  return (
    <div className="page-wrapper">
      <div className="tracks-wrapper">
        <TracksList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails trackId={trackId} />
      </div>
    </div>
  );
}
export default MainPage;
