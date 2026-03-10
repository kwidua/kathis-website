export async function searchItunes(book: string) {
const encodedTerm = encodeURIComponent(book);

try {
    const res = await fetch(
    `https://itunes.apple.com/search?term=${encodedTerm}&limit=5`
    );

    if (!res.ok) {
    throw new Error(`HTTP-Fehler: ${res.status}`);
    }

    const data = await res.json();
    console.log("Ergebnis:", data);
    return data;
    } catch (error) {
    console.error("Fehler beim Fetch:", error);

    }
}
searchItunes("The Beatles")