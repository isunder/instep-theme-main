const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

const slidercreate = expressAsyncHandler(async (req, res) => {

    try {
        const imagesFilenames = req.files["sliderimg"].map(
            (file) => file.filename
        );
        console.log("Images  Filenames:", imagesFilenames);
        const sildername = JSON.parse(req.body.sildername);
        console.log(sildername, "sildername");

        const sliderphotos = new slidertable({
            images: imagesFilenames,
            name: sildername.name,
            url: sildername.url,
        });
        await sliderphotos.save();
        res.status(200).send("Success: slider images uploaded." + sliderphotos);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }

})


module.exports = {
    slidercreate

};
