import { useState } from "react";
import { useEffect } from "react";

function TrackDetails() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const selectedTrackId = "40941736-77b7-4bb0-b3b2-ca1e31e1f4a6";

  useEffect(() => {
    if (!selectedTrackId) return;

    // fetch(
    //   "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
    //     selectedTrackId,
    //   {
    //     headers: {
    //       "api-key": "be366aef-78ba-4c70-b7f6-046b71b0dd9b",
    //     },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((json) => setSelectedTrack(json.data));
  }, [selectedTrackId]);

  return (
    <div className="track-details">
      <h3>Details:</h3>
      {!selectedTrack && !selectedTrackId && "Track is not selected"}

      {!selectedTrack && selectedTrackId && "Loading..."}

      {selectedTrack &&
        selectedTrackId &&
        selectedTrack.id !== selectedTrackId &&
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
