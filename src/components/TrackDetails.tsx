import { useState } from "react";
import { useEffect } from "react";

type TrackDetailsData = {
  id: string;
  attributes: {
    title: string;
    user: { name: string | null };
  };
};

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

    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
      {
        headers: {
          "api-key": "be366aef-78ba-4c70-b7f6-046b71b0dd9b",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data));
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
