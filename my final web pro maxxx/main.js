function viewdetails(productname,productdesc,productprice,productimage)
{
    var obj = {
        "ProductName":productname,
        "ProductDesc":productdesc,
        "ProductPrice":productprice,
        "ProductImage":productimage
    }
    localStorage.setItem('Details',JSON.stringify(obj))
    window.location.href="details.html"
}
//Add to Cart Wala Kaam
var list = JSON.parse(localStorage.getItem('AddtoCartItems')) || [] // doosri change

function addtocart()
{
   var ab = JSON.parse(localStorage.getItem('Details')) // pehli Changes
   list.push(ab) // list mein record dalwaya
   localStorage.setItem('AddtoCartItems',JSON.stringify(list)) //permenant save
   window.location.href='checkout.html'
}
