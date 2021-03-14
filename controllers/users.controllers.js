const {response} = require ('express');

const usersGet = (req,res=response)=>{

    const query = req.query;

    res.json({      
        msg:'get API- controller',
        query
    });
}

const usersPost= (req, res = response) => {

    // const body = req.body
    const { name } = req.body;

    res.json({      
        msg:'post API - controller',
        name
    });
}

const usersPut= (req, res) => {

    const body = req.body;
    const {id} = req.params;

    res.json({    
        msg:'put API - controller',
        body,
        id
    });
}

const usersDelete= (req, res) => {

    res.json({       
        msg:'delete API - controller'
    });
}


module.exports={
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}