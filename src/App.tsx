import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        "api-key": "be366aef-78ba-4c70-b7f6-046b71b0dd9b",
      },
    })
      .then((res) => res.json())
      .then((json) => setTracks(json.data));
  }, []);

  if (tracks === null) {
    return <div>Loading...</div>;
  }

  if (tracks.length === 0) {
    return <div>No tracks available</div>;
  }

  return (
    <>
      <h1>Musicfun Player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
        }}>
        Resset selection
      </button>
      <ul>
        {tracks.map((track) => {
          return (
            <li
              key={track.id}
              style={{
                border:
                  track.id === selectedTrackId ? "1px solid tomato" : "none",
              }}
              className="track">
              <div
                className="track-title"
                onClick={() => {
                  setSelectedTrackId(track.id);
                }}>
                {track.attributes.title}
              </div>
              <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
