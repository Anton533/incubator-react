import { useTrackDetail } from "../bll/useTrackDetail";

type Props = {
  trackId: string | null;
};

function TrackDetails({ trackId }: Props) {
  const { trackDetails } = useTrackDetail(trackId);

  return (
    <div className="track-details">
      <h3>Details:</h3>
      {!trackDetails && !trackId && "Track is not selected"}
      {!trackDetails && trackId && "Loading..."}
      {trackDetails &&
        trackId &&
        trackDetails.id !== trackId &&
        "loading new track"}

      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Name</h4>
          <p>{trackDetails.attributes.user.name ?? "no lurics"}</p>
        </div>
      )}
    </div>
  );
}

export default TrackDetails;
