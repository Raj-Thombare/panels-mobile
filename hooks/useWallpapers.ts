
export interface Wallpaper {
    url: string;
    name: string;
}

export interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers() {

    const wallpapers = useWallpapers();
    return wallpapers.filter((wallpaper) => wallpaper.suggested)
}

export function useLikedWallpapers() {

    const wallpapers = useWallpapers();
    return wallpapers.filter((wallpaper) => wallpaper.liked)
}

export function useLibraryWallpapers() {

    const wallpapers = useWallpapers();
    return wallpapers.filter((wallpaper) => wallpaper.library)
}

export function useWallpapers(): FullWallpaper[] {
    return [{
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/M1el2CbDQ6Ws-Erfom_CtQ",
        name: "Dark Lord",
        liked: true,
        suggested: false,
        library: true
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/wD9SojXEQGe_T0BWLucRpA",
        name: "Beach",
        liked: true,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/jGxVI96tSdGdwgICEhr5fw",
        name: "Walker Backpack",
        liked: true,
        suggested: false,
        library: true
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/rXhBNn4zRpqc3zSZ3CcrbQ",
        name: "Dream Big",
        liked: false,
        suggested: true,
        library: false
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/NTwb3tTiQNmlMCXRY1sBWg",
        name: "GYMZILLA",
        liked: false,
        suggested: true,
        library: false
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Xy99ypuPS6eMkOO2xfCX8w",
        name: "Linor",
        liked: false,
        suggested: true,
        library: false
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/58jLhP0MThyATzN8JvJedA",
        name: "Neon Girl",
        liked: true,
        suggested: true,
        library: false
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/79GknZKnQTuf7UEqO7dteg",
        name: "Orange Glass",
        liked: true,
        suggested: true,
        library: true
    }
    ]
}