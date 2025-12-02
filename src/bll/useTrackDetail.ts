import { useState } from "react";
import { useEffect } from "react";
import { getTrack, type TrackDetailsData } from "../dal/api";

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] = useState<TrackDetailsData | null>(
    null
  );

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }
    getTrack(trackId).then((json) => setTrackDetails(json.data));
  }, [trackId]);

  return { trackDetails };
}
