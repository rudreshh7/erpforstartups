import { getUploadAuthParams } from "@imagekit/next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  // Check if user is authenticated
  const { userId } = await auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Validate environment variables
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;

  if (!privateKey || !publicKey) {
    console.error("Missing ImageKit credentials:", {
      hasPrivateKey: !!privateKey,
      hasPublicKey: !!publicKey,
      privateKeyLength: privateKey?.length || 0,
      publicKeyLength: publicKey?.length || 0,
    });
    return new Response("ImageKit credentials not configured", { status: 500 });
  }

  // Validate key formats
  if (!privateKey.startsWith("private_")) {
    console.error(
      "Invalid private key format. Private key should start with 'private_'"
    );
    return new Response("Invalid private key format", { status: 500 });
  }

  if (!publicKey.startsWith("public_")) {
    console.error(
      "Invalid public key format. Public key should start with 'public_'"
    );
    return new Response("Invalid public key format", { status: 500 });
  }

  try {
    // Generate expire timestamp: current time + 30 minutes (in seconds)
    const currentTime = Math.floor(Date.now() / 1000);
    const expireTimestamp = currentTime + 30 * 60; // 30 minutes from now

    console.log(
      `Current time: ${currentTime}, Expire time: ${expireTimestamp}, Difference: ${
        expireTimestamp - currentTime
      } seconds`
    );

    const { token, expire, signature } = getUploadAuthParams({
      privateKey,
      publicKey,
      expire: expireTimestamp,
    });

    console.log("Generated auth params:", {
      token: token.substring(0, 10) + "...",
      expire,
      signatureLength: signature.length,
      publicKey: publicKey.substring(0, 15) + "...",
    });

    return Response.json({
      token,
      expire,
      signature,
      publicKey,
    });
  } catch (error) {
    console.error("Error generating upload auth params:", error);
    return new Response(
      `Internal Server Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      { status: 500 }
    );
  }
}
