const OpenAI = require('openai')
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const generateImage = async (req, res) => {
    try {
        const response = await openai.images.generate({
            prompt: 'cute girl indian',
            n: 1,
            size: '512x512'
        })
        console.log(response)
        const imageUrl = response.data[0].url
        res.status(200).json({
            success: true,
            data: imageUrl
        })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        res.status(400).json({
            success: false,
            error: 'The image could not be generated'
        })
    }
}
module.exports = { generateImage }