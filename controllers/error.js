exports.error = (req, res) =>{
    res.status(404).render('404' , {pageTitle:"صفحه ی مورد نظر پیدا نشد"})
}
