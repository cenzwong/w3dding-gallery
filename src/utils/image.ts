/**
 * Optimizes Google User Content URLs to dynamically request downscaled image resolutions.
 *
 * @param url The image URL to optimize.
 * @param size The target size (longest edge length, corresponding to `=s{size}`).
 * @returns The optimized URL if it is a Google User Content endpoint, otherwise the original URL.
 */
export function getOptimizedImageUrl(url: string | null | undefined, size?: number): string {
  if (!url) return "";

  // Check if it matches Google User Content hostnames or structures
  if (
    url.includes("googleusercontent.com") ||
    url.includes("lh3.googleusercontent.com") ||
    url.includes("photos.googleusercontent.com")
  ) {
    // Strip trailing legacy size configuration /0 if present
    let cleanUrl = url;
    if (cleanUrl.endsWith("/0")) {
      cleanUrl = cleanUrl.slice(0, -2);
    }

    // Strip any existing =w, =s size parameters if present
    cleanUrl = cleanUrl.split("=")[0];

    // If size parameter is specified, append modern scale flag
    if (size) {
      return `${cleanUrl}=s${size}`;
    }
    return cleanUrl;
  }

  return url;
}
