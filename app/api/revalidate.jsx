export default async function handler(req, res) {
  // Validate the secret token
  if (req.query.secret !== process.env.SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const { event, entry, model } = req.body;

    // Handle different Strapi events
    switch (event) {
      case "entry.update":
      case "entry.create":
      case "entry.publish":
        // Construct the path to revalidate
        const path =
          model === "page"
            ? `/${entry?.slug ?? ""}`
            : `/${model}/${entry?.slug ?? ""}`;
        await res.revalidate(path);
        return res.json({ revalidated: true, path });

      default:
        return res.status(400).json({ message: `Invalid event "${event}"` });
    }
  } catch (err) {
    console.error("Revalidation error:", err);
    return res.status(500).json({ message: "Error revalidating" });
  }
}
