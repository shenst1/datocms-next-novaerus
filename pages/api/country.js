export default async (req, res) => {
  
  const response = await fetch("https://telize-v1.p.rapidapi.com/location", {
    headers: {
      ...(req.connection.remoteAddress !== "127.0.0.1" && {
        "x-forwarded-for": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      }),
      "x-rapidapi-key": process.env.TELIZE_RAPID_API_KEY,
      "x-rapidapi-host": "telize-v1.p.rapidapi.com",
      "useQueryString": true
    }
  });
  const data = await response.json()
  res.status(200).json(data)
 
};
