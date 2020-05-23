const joi = require('joi');
const postModel = require('../model/postModel');


module.exports.savePostControler = (req, res) => {
    const redData = req.body
    const validateData = joi.object().keys({
        title: joi.strict().required(),
        comment: joi.string().required()
    })
    joi.validate(redData, validateData).then(
        data => {
            let mydata = postModel.saveNewPost(data);
            res.json({ data: mydata, code: 200, message: _response.SUCCESS });
        }
    ).catch(
        error => {
            res.json({ data: error, code: 404, message: _response.VALIDATION_ERROR });
            console.log(error);
        }
    )

}
module.exports.getAllPostControler = (req, res) => {
    postModel.getAllPost().then(data => {
        res.json({ data: data, code: 200, message: _response.SUCCESS });

    }).catch(error => {
        res.json({ data: error, code: 404, message: _response.NOT_FOUND })
    })
}
module.exports.getOnePostControler = (req, res) => {
    let postId = req.query.id;
    postModel.getOnePost(postId).then(data => {
        res.json({ data: data, code: 200, message: _response.SUCCESS });
    }).catch(error => {
        res.json({ data: error, code: 404, message: _response.NO_DATA_FOUND });
    })
}
module.exports.updatePostControler = (req, res) => {
    let id = req.query.id;
    let bodydata = req.body;
    postModel.editPostData(id, bodydata).then(data => {
        res.json({ data: data, code: 200, message: _response.SUCCESS });
    }).catch(error => {
        res.json({ data: error, code: 404, message: _response.NO_DATA_FOUND });
    })
}
module.exports.deletePostControler = (req, res) => {
    let id = req.query.id;
    postModel.deletePostData(id).then(data => {
        res.json({ data: data, code: 200, message: _response.SUCCESS });
    }).catch(error => {
        res.json({ data: error, code: 404, message: _response.NO_DATA_FOUND });
    })
    // console.log(id)
}