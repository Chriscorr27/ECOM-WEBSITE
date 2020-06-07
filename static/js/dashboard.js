var removebtn = document.getElementsByClassName('remove')
for(i=0 ; i<removebtn.length ;i++)
{
    removebtn[i].addEventListener('click',function(){
        var itemid = this.dataset.item
        console.log('itemid:',itemid)
        
        if(superuser == 'False')
        {
            alert('you are not allowed here')
            location.replace('/')
        }
        else
        {
            remove_item(itemid)
        }
    })
}

function remove_item(itemid)
{
    console.log('user in fuction, removing data')
    var url = '/remove_item/'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken ,
        },
    body:JSON.stringify({'itemid' : itemid})
    })

    .then((Response) => {
        return Response.json();
    })
    .then((data) => {
        location.reload()
    });
}


var rorder = document.getElementsByClassName('rorder')
for(i=0 ; i<rorder.length ;i++)
{
  rorder[i].addEventListener('click',function(){
      var orderid = this.dataset.order
      console.log('orderid:',orderid)
      if(superuser == 'False')
        {
            alert('you are not allowed here')
            location.replace('/')
        }
        else
        {
            remove_order(orderid)
        }
  })  
}
  function remove_order(orderid)
  {
      console.log('inside remove order')
      var url = '/remove_order/'
      fetch(url,{
        method:'POST',
        headers:{
                    'Content-Type':'application/json',
                    'X-CSRFToken': csrftoken ,
                },
        body:JSON.stringify({'orderid' : orderid})
      })
        .then((Response) => {
        return Response.json();
        })
        .then((data) => {
        location.reload()
        });
  }

  var rcustomer = document.getElementsByClassName('rcustomer')
  for(i=0 ; i<rcustomer.length ;i++)
  {
    rcustomer[i].addEventListener('click',function(){
        var userid = this.dataset.user
        console.log('userid:',userid)
        if(superuser == 'False')
          {
              alert('you are not allowed here')
              location.replace('/')
          }
          else
          {
              remove_user(userid)
          }   
    }) 
  }
  function remove_user(userid)
  {
    console.log('inside remove order')
    var url = '/remove_customer/'
    fetch(url,{
      method:'POST',
      headers:{
                  'Content-Type':'application/json',
                  'X-CSRFToken': csrftoken ,
              },
      body:JSON.stringify({'userid' : userid})
    })
      .then((Response) => {
      return Response.json();
      })
      .then((data) => {
      location.replace('/dashboard/')
      }); 
  }