// cmd - node src/pages/apis-example/services/ItunesService.ts

export interface ItunesItem {
    wrapperType: string;
    artistId: number;
    collectionId: number;
    artistName: string;
    collectionName: string;
    collectionCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    collectionExplicitness: string;
    trackCount: number;
    country: string;
    currency: string;
    releaseDate: string;
    primaryGenreName: string;
    previewUrl: string;
    description: string;
    trackName?: string;
    trackPrice?: number;
}

// Basic fetch request
export async function searchItunesBasic(term: string) {
    const encodedTerm = encodeURIComponent(term);

    try {
        const res = await fetch(
            `https://itunes.apple.com/search?term=${encodedTerm}&limit=5`
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data.results || [];
    } catch (error) {
        console.error("Error fetching results:", error);
        return [];
    }
}

// Request with interface ItunesItem
export async function searchItunes(term: string): Promise<ItunesItem[]> {
    const encodedTerm = encodeURIComponent(term);
    try {
        const res = await fetch(
            `https://itunes.apple.com/search?term=${encodedTerm}&limit=5`
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data.results as ItunesItem[] || [];
    } catch (error) {
        console.error("Error fetching results:", error);
        return [];
    }
}

searchItunesBasic("The Beatles");
// searchItunesErrorHandling("The Beatles");