export type TrackListItemData = {
  id: string;
  attributes: {
    title: string;
    attachments: Array<{ url: string }>;
    images: { main: Array<{ url: string }> };
  };
};

type Props = {
  track: TrackListItemData;
  onSelect: (id: string | null) => void;
  isSelected: boolean;
};

function TrackItem({ track, onSelect, isSelected }: Props) {
  const handleClick = () => onSelect?.(track.id);

  return (
    <li
      key={track.id}
      style={{
        border: isSelected ? "1px solid tomato" : "none",
      }}
      className="track">
      <div className="track__top" onClick={handleClick}>
        <img
          src={
            track.attributes.images.main[0]
              ? track.attributes.images.main[0].url
              : "play.svg"
          }
          alt="Track img"
          className="track-img"
        />
        <h4 className="track-title">{track.attributes.title}</h4>
      </div>

      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}

export default TrackItem;
