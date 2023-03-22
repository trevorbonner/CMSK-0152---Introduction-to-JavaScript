document.getElementById('submitButton').addEventListener('click', function()
{
    //get value from newListItem   
    //call addItem
});

document.getElementById('setListColorButton').addEventListener('click', function()
{
    //get value from newListColor
    //call updateListColor
});


function addItem(newItemValue)
{
    var list;// = get itemCollection
    var newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(newItemValue));
    list.appendChild(newItem);
}

function updateListColor(newColor)
{
    //get itemCollection
    //set style color with newColor
}
