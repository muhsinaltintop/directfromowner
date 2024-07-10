export default async function handler(req, res) {
  // or a secret from an environment variable
  if (req.query.secret !== process.env.SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const { event, entry, model } = req.body;
    switch (event) {
      case "entry.update":
      case "entry.create":
      case "entry.publish":
        await res.revalidate(
          `${model !== "page" ? "/" + model : ""}/${entry?.slug ?? ""}`
        );
        break;
      default:
        return res.status(500).send(`Invalid event "${event}"`);
        break;
    }
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
