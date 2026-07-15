const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
const IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

export interface ImgBBResponse {
  data: {
    url: string;
    display_url: string;
  };
  success: boolean;
}

export const imageService = {
  async uploadToImgBB(file: File): Promise<string> {
    if (!IMGBB_API_KEY) {
      throw new Error('ImgBB API key is not configured');
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', IMGBB_API_KEY);

    try {
      const response = await fetch(`${IMGBB_API_URL}?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to upload image');
      }

      const data: ImgBBResponse = await response.json();
      return data.data.url;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to upload image to ImgBB');
    }
  },

  validateImageFile(file: File): { valid: boolean; error?: string } {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

    if (file.size > maxSize) {
      return {
        valid: false,
        error: `File size exceeds 5MB limit. Current size: ${(file.size / 1024 / 1024).toFixed(2)}MB`,
      };
    }

    if (!allowedTypes.includes(file.type)) {
      return {
        valid: false,
        error: 'Only JPG, PNG, WebP, and GIF formats are allowed',
      };
    }

    return { valid: true };
  },
};
