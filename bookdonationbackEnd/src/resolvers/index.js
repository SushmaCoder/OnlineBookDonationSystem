
const {getbooksData,updatebooksinfo} = require("./booksinfo");

const resolvers = {
    Query:{
        getbooks: (_,args) => {
            return getbooksData();
        }
    },
    Mutation:{
        updatebooks: (_,args) => {
            return updatebooksinfo(args.bookname,args.author,args.ISBN);
        }
    }
}
      
exports.resolvers = resolvers;