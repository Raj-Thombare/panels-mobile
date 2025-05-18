import { WallpaperList } from "@/components/WallpaperList";
import { useSuggestedWallpapers } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Wallpaper } from "@/hooks/useWallpapers";
import DownloadPicture from "@/components/DownloadPicture";
import { ThemedView } from "@/components/ThemedView";

export default function SuggestedTab() {
  const wallpapers = useSuggestedWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );

  return (
    <ThemedView style={{ flex: 1, marginTop: 10 }}>
      <WallpaperList
        wallpapers={wallpapers}
        onSelectWallpaper={setSelectedWallpaper}
      />

      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </ThemedView>
  );
}
