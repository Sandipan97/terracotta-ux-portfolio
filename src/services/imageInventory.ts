
// Comprehensive image inventory for all lovable-uploads references
export const IMAGE_INVENTORY = {
  // Hero and profile images - highest priority
  hero: [
    '/lovable-uploads/c6d0389c-5302-42f4-bcd2-ed57dd41c370.jpg',
    '/lovable-uploads/d6f8c20d-1961-4552-a823-c9c0b12a8f05.jpg'
  ],

  // Project showcase images - high priority
  welbiltShowcase: [
    '/lovable-uploads/Welbilt showcase.png',
    '/lovable-uploads/Welbilt New Design.png'
  ],

  pgDatalogger: [
    '/lovable-uploads/PG hero1.svg',
    '/lovable-uploads/PG Light frame.svg', 
    '/lovable-uploads/PG hero.svg.svg',
    '/lovable-uploads/Frame.svg',
    '/lovable-uploads/PG hero.png',
    '/lovable-uploads/PG header.png',
    '/lovable-uploads/PG before.png',
    '/lovable-uploads/PG after.png',
    '/lovable-uploads/PG after dark.png',
    '/lovable-uploads/pg heuristic 1.png'
  ],

  o2cProject: [
    '/lovable-uploads/O2C competitors.png'
  ],

  dripometer: [
    '/lovable-uploads/Drip-steal.png',
    '/lovable-uploads/7fd5c57c-a8aa-4fc9-af30-aaa2cce4294b.png'
  ],

  farmMonitoring: [
    '/lovable-uploads/nurses.png',
    '/lovable-uploads/Ward panic.png'
  ],

  toyAnatomy: [
    '/lovable-uploads/Occupy hangers.png'
  ],

  cyclopsAR: [
    '/lovable-uploads/UX audit.png'
  ],

  // Video thumbnails from project hero sections
  videoThumbnails: [
    'https://vumbnail.com/1112617166_1280x720.jpg', // Cyclops AR Manual hero video
    'https://vumbnail.com/1107501121_1280x720.jpg', // Cyclops AR Manual demo video
    'https://vumbnail.com/1112591814_1280x720.jpg'  // Farm Monitoring workshop video
  ],

  // Design process and methodology images - medium priority
  designProcess: [
    '/lovable-uploads/0a2bbc05-480f-4072-9af3-2a444df422b3.png',
    '/lovable-uploads/22388cee-cdb0-44ca-8862-878f24beb27e.png',
    '/lovable-uploads/3b7054fd-1060-42b5-afa3-890c44d9991f.png',
    '/lovable-uploads/3bdac146-79d0-44ef-94a1-7d74bb713e7c.png',
    '/lovable-uploads/505f2f45-6f54-4a4d-8c73-1250a62a132c.png',
    '/lovable-uploads/5df3f20d-3a84-4f8a-a055-7374725f634c.png',
    '/lovable-uploads/7d63b5b2-54c2-4921-8b8e-9f45e54d8b27.png',
    '/lovable-uploads/7ec12b6e-4bb0-4156-9c80-af6841ee6304.png',
    '/lovable-uploads/865a85d4-746b-4cbf-a739-52820a467786.png',
    '/lovable-uploads/87dd02b2-69e7-47bd-a68d-7039d244594e.png',
    '/lovable-uploads/98b03f40-5c59-4e85-a4d7-13c27d611bac.png',
    '/lovable-uploads/9bda1bc6-6d7d-4fe3-abb6-b1ce6f1516d4.png',
    '/lovable-uploads/a1e84a40-6817-4ce4-abc1-4787e93897cf.png',
    '/lovable-uploads/b4c2ae55-67cd-4940-9279-f65e91d622c6.png',
    '/lovable-uploads/c2dfb2fc-13e4-4095-a586-8bbe9a0d451f.png',
    '/lovable-uploads/d7004b56-b3d9-4f38-b006-2c629ba78879.png',
    '/lovable-uploads/dae41123-d04f-42cb-88b1-ea0426569c84.png',
    '/lovable-uploads/dbd16053-1353-4d40-bd87-5c80add05d77.png',
    '/lovable-uploads/dd07be3f-2cc0-4b77-88d1-b75d1bec6cfb.png',
    '/lovable-uploads/e1affce8-133c-4851-af10-6bc8eab24477.png',
    '/lovable-uploads/eedc0627-f4b4-4046-be1c-9710e8c88510.png',
    '/lovable-uploads/f4433b81-09ec-4d52-a0ec-dc9ac7ee5cd4.png',
    '/lovable-uploads/f628cb87-2104-4eb3-882f-325953ed5dd3.png',
    '/lovable-uploads/faef07c9-7f2d-4518-ab38-262c70cf4199.png',
    '/lovable-uploads/07eb7894-fcab-4496-9406-38bc0f679e93.png'
  ]
};

// Get all images flattened
export const getAllImages = () => {
  return Object.values(IMAGE_INVENTORY).flat();
};

// Get critical images (hero + showcase + video thumbnails)
export const getCriticalImages = () => {
  return [
    ...IMAGE_INVENTORY.hero,
    ...IMAGE_INVENTORY.welbiltShowcase,
    ...IMAGE_INVENTORY.pgDatalogger.slice(0, 2), // First 2 PG images
    ...IMAGE_INVENTORY.o2cProject,
    ...IMAGE_INVENTORY.dripometer.slice(0, 1), // First Dripometer image
    ...IMAGE_INVENTORY.videoThumbnails // Include video thumbnails in critical images
  ];
};

// Get project-specific images
export const getProjectImages = (projectSlug: string) => {
  const projectMap: Record<string, string[]> = {
    'welbilt-kitchen-connect': IMAGE_INVENTORY.welbiltShowcase,
    'pg-datalogger': IMAGE_INVENTORY.pgDatalogger,
    'o2c-project': IMAGE_INVENTORY.o2cProject,
    'dripometer': IMAGE_INVENTORY.dripometer,
    'farm-monitoring': [...IMAGE_INVENTORY.farmMonitoring, 'https://vumbnail.com/1112591814_1280x720.jpg'],
    'toy-anatomy': IMAGE_INVENTORY.toyAnatomy,
    'cyclops-ar-manual': [...IMAGE_INVENTORY.cyclopsAR, 'https://vumbnail.com/1112617166_1280x720.jpg', 'https://vumbnail.com/1107501121_1280x720.jpg']
  };
  
  return projectMap[projectSlug] || [];
};

// Get video thumbnails specifically
export const getVideoThumbnails = () => {
  return IMAGE_INVENTORY.videoThumbnails;
};
