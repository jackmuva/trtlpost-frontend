

class EditorJsApi{
    getSaveImageUrl(){
        if(process.env.API_URL){
            return process.env.API_URL.concat('/api/image/save');
        }
    }

    getLinkUrl(){
        if(process.env.API_URL){
            return process.env.API_URL.concat('/api/fetchUrl');
        }
    }
}
export default new EditorJsApi();