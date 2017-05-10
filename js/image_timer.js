
 var images = new Array()

 images[0] = "./images/images.jpg";
 images[1] = "./images/desktop-rose-hd-wallpapers.jpg";
 images[2] = "./images/24_4368x2912.jpg";
 images[3] = "./images/Two-roses-two-ring-at-bed-1296203742_78.jpg"

 setInterval("changeImage()", 7000);
 var x=0;

 function changeImage()
    {
    document.getElementById("background_img").src=images[x]
    x++;
    if (images.length == x) 
        {
        x = 0;
        }
    }
