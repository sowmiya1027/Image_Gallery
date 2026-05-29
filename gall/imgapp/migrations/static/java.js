let Index=0;
var Images=[
    {source: "Switzerland.jpeg",caption:"SWITZERLAND"},
    {source: "Japan.jpeg",caption:"JAPAN"},
    {source: "Singapore.jpeg",caption:"SINGAPORE"},
    {source: "US.jpeg",caption:"UNITED STATES"},
    {source: "France.jpeg",caption:"FRANCE"}
];
function display()
{
    document.getElementById("editid").src=Images[Index].source;
    document.getElementById("headid").innerHTML=Images[Index].caption;
}
function prev()
{
    Index--;
    if(Index<0)
        Index=Images.length-1;
    display();
}
function next()
{
    Index++;
    display();
    if(Index>=Images.length-1)
        Index=0;
    
}