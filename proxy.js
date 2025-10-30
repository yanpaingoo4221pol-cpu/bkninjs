export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.bigwinqaz.com/api/webapi/GetNoaverageEmerdList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageNo: 1, pageSize: 10 }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
