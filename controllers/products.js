const Product = require("../models/product")

const getAllProducts = async(req ,res) => {
    const {company,name,sort,select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    
    }
    if(name){
        queryObject.name = {$regex:name,$options:"i"};
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.replace(","," ");
        apiData = apiData.select(selectFix);
    }
   
    
  
    const myData = await apiData
    res.status(200).json({ myData});
};

const getAllProductsTesting = async(req ,res)=>{

    const myData = await Product.find(req.query).select('name  company');;
    

    res.status(200).json({myData});
};

module.exports = {getAllProductsTesting , getAllProducts}; 