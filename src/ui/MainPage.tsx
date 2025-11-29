import TracksList from "./TracksList.tsx";
import TrackDetails from "./TrackDetails.tsx";
import { useState } from "react";

function MainPage() {
  const [trackId, setTrackId] = useState<string | null>(null);

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
