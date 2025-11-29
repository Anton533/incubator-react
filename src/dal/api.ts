export type TrackDetailsData = {
  id: string;
  attributes: {
    title: string;
    user: { name: string | null };
  };
};
type GetTrackDetailsOutput = {
  data: TrackDetailsData;
};

export function getTrack(trackId: string) {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: {
        "api-key": "be366aef-78ba-4c70-b7f6-046b71b0dd9b",
      },
    }
  ).then((res) => res.json());

  return promise;
}

/////////////////////////////

type AttachmentDto = {
  url: string;
};
type TrackListItemDataAttributes = {
  title: string;
  attachments: Array<AttachmentDto>;
  images: { main: Array<{ url: string }> };
};
export type TrackListItemData = {
  id: string;
  attributes: TrackListItemDataAttributes;
};
type GetTrackListOutput = {
  data: Array<TrackListItemData>;
};

export function getTracks() {
  const promise: Promise<GetTrackListOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: {
        "api-key": "be366aef-78ba-4c70-b7f6-046b71b0dd9b",
      },
    }
  ).then((res) => res.json());

  return promise;
}
