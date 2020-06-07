
var updatebtn = document.getElementsByClassName('update-cart')

for(i=0 ; i<updatebtn.length ;i++)
{
    updatebtn[i].addEventListener('click',function(){
        var productid = this.dataset.product
        var action = this.dataset.action
        console.log('productid:',productid , 'action:',action)
        console.log('USER:',user)
        if(user == 'AnonymousUser')
        {
            alert('you have not logged in')
            login()
        }
        else
        {
            updateuser_item(productid,action)
        }
    })

}


function  updateuser_item(productid,action)
{
    console.log('user in fuction, sending data')
    var url = '/update_item/'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken ,
        },
    body:JSON.stringify({'productid':productid, 'action':action })
    })

    .then((Response) => {
        return Response.json();
    })
    .then((data) => {
        location.reload()
    });
}
var buybtn = document.getElementsByClassName('buynow')
for(i=0 ; i<updatebtn.length ;i++)
{
    buybtn[i].addEventListener('click',function(){
       
        if(user == 'AnonymousUser')
        {
            alert('you have not logged in')
            login()
        }
        
    })
}
function login()
{
    var url = '/account/login/'
    location.replace(url)
}