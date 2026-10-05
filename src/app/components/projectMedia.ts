// Tamaño real de cada captura de proyecto (para next/image y para saber si es vertical).
const sizes: Record<string, { width: number; height: number }> = {
  "/agrovet-preview-actual.png": { width: 1899, height: 884 },
  "/agrovet-panel.png": { width: 1440, height: 900 },
  "/pag-taller-preview.png": { width: 1366, height: 900 },
  "/hnv-preview.png": { width: 1897, height: 911 },
  "/latin-prospects-preview.png": { width: 1600, height: 870 },
  "/mareflota-preview.png": { width: 1600, height: 800 },
  "/forza-preview.png": { width: 738, height: 1505 },
  "/forza-pdf-preview.png": { width: 700, height: 982 },
};

export function imageSize(src: string) {
  return sizes[src] ?? { width: 1600, height: 1000 };
}

export function isPortrait(src: string) {
  const { width, height } = imageSize(src);
  return height > width;
}
