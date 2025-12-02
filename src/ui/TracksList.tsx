import { useTracks } from "../bll/useTracks.ts";
import TrackItem from "./TrackItem.tsx";

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

function TracksList({ selectedTrackId, onTrackSelect }: Props) {
  const { tracks } = useTracks();

  if (tracks === null) {
    return <div>Loading...</div>;
  }
  if (tracks.length === 0) {
    return <div>No tracks available</div>;
  }

  const handleClick = (trackId: string | null) => {
    onTrackSelect?.(trackId);
  };

  return (
    <ul>
      {tracks.map((track) => {
        return (
          <TrackItem
            key={track.id}
            track={track}
            onSelect={handleClick}
            isSelected={track.id === selectedTrackId}
          />
        );
      })}
    </ul>
  );
}

export default TracksList;
