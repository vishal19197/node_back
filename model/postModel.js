const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const postTable = mongoose.model('Posts', postSchema);

saveNewPost = (post) => {
    if (post != null) {
        let postData = new postTable(post)
        postData.save().then(data => {
            console.log("Save Successfuy..! ", data)
        }).catch(
            error => {
                console.log("Somting Wants Wrong..!", error)
            }
        )
    }
}
getAllPost = async () => {
    let postData = await postTable.find();
    return postData;
}

getOnePost = async (postId) => {
    let getPost = await postTable.findById({ _id: postId });
    return getPost;
}
editPostData = async (id, body) => {
    let upadte = await postTable.updateOne(
        { _id: id },
        {
            title: body.title,
            comment: body.comment
        })
    return upadte;
}
deletePostData = async (id) => {
    let deleteData = await postTable.deleteOne({_id:id})
    return deleteData;
}

module.exports = {
    postTable,
    saveNewPost,
    getAllPost,
    getOnePost,
    editPostData,
    deletePostData

}