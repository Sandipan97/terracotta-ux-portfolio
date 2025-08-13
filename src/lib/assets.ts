
/**
 * Asset URL utilities for handling public assets and image paths
 */

/**
 * Builds a proper public URL for assets, handling base URL and encoding
 */
export function buildPublicUrl(path: string): string {
  if (!path) return path;
  
  // For external URLs (http/https), return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // For data URLs, return as-is
  if (path.startsWith('data:')) {
    return path;
  }
  
  // Handle relative paths and public assets
  let normalizedPath = path;
  
  // Remove leading ./ if present
  if (normalizedPath.startsWith('./')) {
    normalizedPath = normalizedPath.slice(2);
  }
  
  // Ensure path starts with / for public assets
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = '/' + normalizedPath;
  }
  
  // URL encode the filename part to handle spaces and special characters
  const pathParts = normalizedPath.split('/');
  const filename = pathParts[pathParts.length - 1];
  const encodedFilename = encodeURIComponent(filename);
  pathParts[pathParts.length - 1] = encodedFilename;
  normalizedPath = pathParts.join('/');
  
  // Get base URL from Vite environment
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Combine base URL with path, avoiding double slashes
  if (baseUrl === '/') {
    return normalizedPath;
  }
  
  return baseUrl.replace(/\/$/, '') + normalizedPath;
}

/**
 * Checks if a URL is a local/public asset
 */
export function isLocalAsset(url: string): boolean {
  if (!url) return false;
  
  // External URLs are not local
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return false;
  }
  
  // Data URLs are not local files
  if (url.startsWith('data:')) {
    return false;
  }
  
  // Everything else is considered local
  return true;
}

/**
 * Normalizes image URL for consistent handling
 */
export function normalizeImageUrl(url: string): string {
  if (!url) return url;
  
  if (isLocalAsset(url)) {
    return buildPublicUrl(url);
  }
  
  return url;
}
