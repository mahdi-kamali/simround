const paginateQuery = async (model, pageNumber = 1, itemsPerPage = 10) => {



    


    const skip = (pageNumber - 1) * itemsPerPage;
    const query = model.find().skip(skip).limit(itemsPerPage);

    const totalItems = await model.countDocuments();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const results = await query.exec();

    return {
        totalItems,
        currentPage: pageNumber,
        totalPages,
        itemsPerPage,
        data: results
    };
};


module.exports = { paginateQuery }
