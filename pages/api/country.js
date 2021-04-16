export default async (req, res) => {

  const response = await fetch("https://telize-v1.p.rapidapi.com/location", {
    headers: {
      "x-rapidapi-key": "ee75ee8f33msh36c6e21354d4f83p1ff754jsnb9dda40ec23e",
      "x-rapidapi-host": "telize-v1.p.rapidapi.com",
      "useQueryString": true
    }
  });
  const data = await response.json()
  res.status(200).json({ countryCode: data.country_code })
 
};