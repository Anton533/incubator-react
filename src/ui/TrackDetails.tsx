import { useState } from "react";
import { useEffect } from "react";
import { getTrack, type TrackDetailsData } from "../dal/api";

type Props = {
  trackId: string | null;
};

function TrackDetails({ trackId }: Props) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsData | null>(
    null
  );

  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null);
      return;
    }
    getTrack(trackId).then((json) => setSelectedTrack(json.data));
  }, [trackId]);

  return (
    <div className="track-details">
      <h3>Details:</h3>
      {!selectedTrack && !trackId && "Track is not selected"}
      {!selectedTrack && trackId && "Loading..."}
      {selectedTrack &&
        trackId &&
        selectedTrack.id !== trackId &&
        "loading new track"}

      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Name</h4>
          <p>{selectedTrack.attributes.user.name ?? "no lurics"}</p>
        </div>
      )}
    </div>
  );
}

export default TrackDetails;
