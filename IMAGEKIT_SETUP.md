# ImageKit Integration

This project now includes ImageKit integration for image uploads and optimization.

## Features

- ✅ Secure image uploads using ImageKit
- ✅ Real-time upload progress tracking
- ✅ Image preview before posting
- ✅ Automatic image optimization and transformations
- ✅ Error handling with user-friendly messages
- ✅ Images displayed in posts with ImageKit transformations

## Setup

The following environment variables are configured in `.env`:

```
IMAGEKIT_PUBLIC_KEY="your_public_key"
IMAGEKIT_PRIVATE_KEY="your_private_key"
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_id"
IMAGEKIT_ID="your_imagekit_id"
```

## How it works

1. **Upload Authentication**: Server-side API route generates secure authentication parameters
2. **File Upload**: Client uploads files to ImageKit with progress tracking
3. **Image Storage**: Uploaded image URLs are stored in the database
4. **Display**: Images are displayed using ImageKit's optimized delivery with transformations

## Components

- `PostInputs.tsx` - Enhanced with image upload functionality
- `PostCard.tsx` - Displays posts with images
- `upload-auth/route.ts` - Server-side authentication for uploads

## Database Schema

Posts now include an `imageUrl` field to store ImageKit URLs:

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  imageUrl  String?  // New field for ImageKit URLs
  published Boolean  @default(false)
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
}
```

## Usage

1. Create a new post
2. Optionally select an image to upload
3. Watch the upload progress
4. Submit the post
5. View the post with the optimized image
