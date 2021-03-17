export default async (req, res) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/tickets.json`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CMSIFY_API_SECRET}`
    },
    body: JSON.stringify(req.body) // body data type must match "Content-Type" header
  });
  res.status(200).json({ status: response.status })
 
};