const { dbcon } = require('../../services')

exports.getbooksData = async () => {
    try{
        const books =await  dbcon.get().collection('tata');
        let ans=await books.find().toArray();
        console.log(ans);
        return ans;
    }catch(e){
        throw (e)
    }
}


exports.updatebooksinfo = async(bkname, athr, ISBN) => {
    try{ 
        // console.log("what is dbcon ",dbcon.get())
        const books = await  dbcon.get().collection('tata');
        if(books==undefined){
            return "relax"
        }
        let res=await books.findOne({bookname:bkname,author:athr,ISBN:ISBN});
        if(res==null){
            books.insertOne({bookname:bkname,author:athr,ISBN:ISBN,bookscount:1})
            return "inserted successfully"
        }else{
            books.updateOne({bookname:bkname,author:athr,ISBN:ISBN},{$inc:{bookscount:1}})
            return "updated successfully"
        }
            // console.log("res",res);
       
         
        
    }catch(e){
        throw(e)
    }
}

