import { useState } from "react";
import { useEffect } from "react";

import { getTracks, type TrackListItemData } from "../dal/api.ts";

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemData> | null>(null);

  useEffect(() => {
    getTracks().then((json) => setTracks(json.data));
  }, []);

  return { tracks };
}
