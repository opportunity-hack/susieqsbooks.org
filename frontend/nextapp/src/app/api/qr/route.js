import QRCode from "qrcode";

// GET /api/qr?text=<urlencoded> -> SVG QR code.
// Used by the printable classroom flier so families can scan straight to
// the classroom's upload page. No login, no tracking, cacheable.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const text = (searchParams.get("text") || "").trim();
  if (!text) {
    return Response.json({ message: "Missing required query param: text" }, { status: 400 });
  }
  if (text.length > 2048) {
    return Response.json({ message: "text is too long" }, { status: 400 });
  }
  try {
    const svg = await QRCode.toString(text, {
      type: "svg",
      margin: 1,
      width: 512,
      errorCorrectionLevel: "M",
    });
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    return Response.json({ message: "Could not generate QR code" }, { status: 500 });
  }
}
