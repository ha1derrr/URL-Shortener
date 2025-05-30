const shortId = require("shortid");
const url = require("../models/url");

async function generateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(404).json({ error: "URL is required" });
  }
    const id = shortId(8);
    await url.create({
      shortId: id,
      redirectUrl: body.url,
      visitHistory: [],
      // This line below is important
      createdBy:req.user._id
    });
      return res.render('home',{
        id:id
      })

}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const entry = await url.findOne({shortId});
  if(!entry){
    return res.send('Invalid shortId')
  }
  return res.json({totalClicks: entry.visitHistory.length,
    analytics: entry.visitHistory,
  });
}

module.exports = { generateShortUrl, getAnalytics };
