import { config } from "./config";

// Add a collection here and reference videos from the shared library by ID.
// Each existing video belongs to one collection; original titles and links stay intact.
const collections = [
    { id: "business", title: "Business & startup stories", description: "Company stories, business explainers, and a closer look at how startups work.", videoIds: ["2", "6", "15", "17", "19", "38"] },
    { id: "conversations", title: "Podcasts & conversations", description: "Longer conversations with founders, creators, and people sharing their experiences.", videoIds: ["3", "5", "30", "31", "32", "34"] },
    { id: "brand", title: "Brand & product films", description: "Campaigns, product introductions, customer guides, and films from live events.", videoIds: ["8", "7", "9", "12", "13", "18", "22", "24", "33", "37", "42"] },
    { id: "explainers", title: "Culture & explainers", description: "Videos exploring cinema, history, public affairs, and the context behind a story.", videoIds: ["10", "11", "21", "25", "26", "28"] },
    { id: "learning", title: "Technology & learning", description: "Educational videos, career stories, and explainers about technology and work.", videoIds: ["16", "4", "14", "23", "29"] },
    { id: "studio", title: "From the editing room", description: "A selection of studio samples, animation, short-form edits, music, and poetry.", videoIds: ["27", "1", "20", "35", "36", "39", "40", "41"] },
];

export const contentSeries = collections.map(({ videoIds, ...collection }) => ({
    ...collection,
    videos: videoIds.map(id => {
        const video = config.playlist.videos.find(video => video.id === id);
        if (!video) throw new Error(`Unknown video ${id} in collection ${collection.id}`);
        return video;
    }),
}));
