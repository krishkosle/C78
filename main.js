var images = ["father.png","mother.jpg","brother.jpg","sister.png"];
var names = ["Father","Mother","Brother","Sister" ];
var i = 0;
function update()
{
    i++;
    var family=4;
    if(i >family)
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("family_member_image").src= updateImage;
    document.getElementById("family_member_name").innerHTML= updateName;
}