

class EditorJsApi{
    getSaveImageUrl(){
        if(process.env.VITE_API_URL){
            return process.env.VITE_API_URL.concat('/api/image/save');
        }
    }

    getLinkUrl(){
        if(process.env.VITE_API_URL){
            return process.env.VITE_API_URL.concat('/api/fetchUrl');
        }
    }
}
export default new EditorJsApi();