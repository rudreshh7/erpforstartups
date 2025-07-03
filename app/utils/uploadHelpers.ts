export interface UploadError {
  type: "auth" | "upload" | "network" | "server" | "unknown";
  message: string;
}

export const getErrorMessage = (error: Error | unknown): UploadError => {
  if (error.message && error.message.includes("Authentication")) {
    return {
      type: "auth",
      message: "Failed to authenticate. Please try again.",
    };
  }

  if (error.message && error.message.includes("Network")) {
    return {
      type: "network",
      message: "Network error. Please check your connection and try again.",
    };
  }

  if (error.message && error.message.includes("Server")) {
    return {
      type: "server",
      message: "Server error. Please try again later.",
    };
  }

  if (error.name === "ImageKitAbortError") {
    return {
      type: "upload",
      message: "Upload was cancelled.",
    };
  }

  return {
    type: "unknown",
    message: "An unexpected error occurred. Please try again.",
  };
};
