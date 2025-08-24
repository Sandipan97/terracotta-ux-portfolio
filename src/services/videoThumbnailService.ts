
/**
 * Video thumbnail extraction service for Vimeo videos
 */

export interface VideoThumbnail {
  small: string;  // 200x150
  medium: string; // 640x480
  large: string;  // 1280x720
}

/**
 * Generates thumbnail URLs for a Vimeo video ID
 */
export function getVimeoThumbnails(videoId: string): VideoThumbnail {
  return {
    small: `https://vumbnail.com/${videoId}_200x150.jpg`,
    medium: `https://vumbnail.com/${videoId}_640x480.jpg`,
    large: `https://vumbnail.com/${videoId}_1280x720.jpg`
  };
}

/**
 * Extracts video ID from various Vimeo URL formats
 */
export function extractVimeoId(url: string): string | null {
  const regex = /vimeo\.com\/(?:video\/)?(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

/**
 * Project-specific video mappings
 */
export const PROJECT_VIDEOS = {
  'cyclops-ar-manual': {
    heroVideoId: '1112617166',
    demoVideoId: '1107501121'
  },
  'farm-monitoring': {
    workshopVideoId: '1112591814'
  }
} as const;

/**
 * Gets the best thumbnail for a project
 */
export function getProjectThumbnail(projectSlug: string): string | null {
  const projectVideo = PROJECT_VIDEOS[projectSlug as keyof typeof PROJECT_VIDEOS];
  
  if (!projectVideo) return null;
  
  // Get the first available video ID for the project
  const videoId = Object.values(projectVideo)[0];
  if (!videoId) return null;
  
  return getVimeoThumbnails(videoId).large;
}
