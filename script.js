function afficher(ele){
    if(ele =='agrandir'){
        document.getElementById('ulist').style.display="block";
        document.getElementById('agrandir').src="icon_reduire.png";
        document.getElementById('agrandir').name="reduire";
    } else if(ele =='reduire'){
        document.getElementById('ulist').style.display="none";
        document.getElementById('agrandir').src="icon_agrandir.png";
        document.getElementById('agrandir').name="agrandir";
    }
    document.getElementById(ele).style.display="block";
}

function added(ele){
    ele.style.color = "blue";
    document.getElementById('title').style.display="inline-block";
    setTimeout(cache,1500);  
}

function cacher(ele){
    document.getElementById(ele).style.display="none";
}

function cache(){
    document.getElementById('title').style.display="none";				
}

setInterval(slid, 3000);

function slid(){
    slide();
}

const slide = (function () {
  let i = 1;
  return function () {
    /*let j=1;
     for (j ; j <10; j++)
    {
        document.getElementById(j).style.backgroundColor="none";
    }*/

   i += 1;

    if (i>6) {i=1;}

    /*document.getElementById(i).style.backgroundColor="thistle";*/
    document.getElementById('slide1').src=i+'.jpg'; }
})();


copy = () => {
            navigator.clipboard.writeText('rifkiahmed.91@gmail.com').then(() => {
                afficher('copy');

            })};