 //原创音乐定制
 const arrMp3Original=[
    {
        mp3Url:'index2/mp3/original/寻回主题歌.mp3', //mp3路径
        mp3Title:'《寻回》主题歌' ,                     //你描述的内容
        mp3Background:'index2/mp3/img/寻回.jpeg'    //背景图片
    },
    {
        mp3Url:'index2/mp3/original/爱与被爱的权力MIX.mp3',
        mp3Title:'爱与被爱的权力MIX'   ,
        mp3Background:'index2/mp3/img/爱与被爱的权利.JPG'
    },
    {
        mp3Url:'index2/mp3/original/巴厘MIX3.mp3',
        mp3Title:'巴厘MIX3'   ,
        mp3Background:'index2/mp3/img/巴里.png'
    },
    {
        mp3Url:'index2/mp3/original/bzaw.mp3',
        mp3Title:'别再爱我 MIX0519',
        mp3Background:'index2/mp3/img/别再爱我.JPG'   
    },
    {
        mp3Url:'index2/mp3/original/差旅篇1122.mp3',
        mp3Title:'差旅篇1122',
        mp3Background:'index2/mp3/img/commun.jpg'   
    },
    {
        mp3Url:'index2/mp3/original/剪掉.mp3',
        mp3Title:'剪掉',
        mp3Background:'index2/mp3/img/commun.jpg'   
    },
    {
        mp3Url:'index2/mp3/original/whh.mp3',
        mp3Title:'娃哈哈 MIX',
        mp3Background:'index2/mp3/img/娃哈哈实现梦想.png'     
    },
    {
        mp3Url:'index2/mp3/original/万象城主题歌《最美声音》.mp3',
        mp3Title:'万象城主题歌《最美声音》',
        mp3Background:'index2/mp3/img/最美声音.png'     
    },
    {
        mp3Url:'index2/mp3/original/我们是新时代的移民管理警察Final Mix.mp3',
        mp3Title:'我们是新时代的移民管理警察FinalMix' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    },
    {
        mp3Url:'index2/mp3/original/我在兰溪等你成品MIX.mp3',
        mp3Title:'我在兰溪等你 成品MIX' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    },
    {
        mp3Url:'index2/mp3/original/向阳之歌MIX.mp3',
        mp3Title:'向阳之歌 MIX' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    },
    {
        mp3Url:'index2/mp3/original/协会篇.mp3',
        mp3Title:'协会篇' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    },
    {
        mp3Url:'index2/mp3/original/缘落mix.mp3',
        mp3Title:'缘落mix' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    },
    {
        mp3Url:'index2/mp3/original/中国公安纪录片.mp3',
        mp3Title:'中国公安纪录片主题歌《责任》'  ,
        mp3Background:'index2/mp3/img/commun.jpg'   
    },
    {
        mp3Url:'index2/mp3/original/brokenbaedDEMPMIX.mp3',
        mp3Title:'brokenbaedDEMPMIX'  ,
        mp3Background:'index2/mp3/img/brokenbaed.JPG'   
    },
    {
        mp3Url:'index2/mp3/original/WBK开场.mp3',
        mp3Title:'WBK开场',
        mp3Background:'index2/mp3/img/commun.jpg'   
    },
    
   ];

//录音翻唱
const arrMp3Reprie=[
    {
        mp3Url:'index2/mp3/reprise/爱要怎么说出口.mp3',
        mp3Title:'爱要怎么说出口',
        mp3Background:'index2/mp3/img/commun.jpg'     
    },
    {
        mp3Url:'index2/mp3/reprise/匆匆那年.mp3',
        mp3Title:'匆匆那年' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    },
    {
        mp3Url:'index2/mp3/reprise/房间MIX.mp3',
        mp3Title:'房间 MIX',
        mp3Background:'index2/mp3/img/commun.jpg'     
    },
    {
        mp3Url:'index2/mp3/reprise/gnzw.mp3',
        mp3Title:'光年之外 MIX',
        mp3Background:'index2/mp3/img/commun.jpg'     
    },
    {
        mp3Url:'index2/mp3/reprise/那些你很冒险的梦MIX.mp3',
        mp3Title:'那些你很冒险的梦MIX' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    },
    {
        mp3Url:'index2/mp3/reprise/同花顺.mp3',
        mp3Title:'同花顺'  ,
        mp3Background:'index2/mp3/img/commun.jpg'   
    },
    {
        mp3Url:'index2/mp3/reprise/再见录音.mp3',
        mp3Title:'再见录音' ,
        mp3Background:'index2/mp3/img/commun.jpg'    
    }];
   

function arrList(arrMp3,classHtml){
    
    
    let bg_center=localStorage.getItem("bgCenterSrc");
    if(!bg_center){
        localStorage.setItem('bgCenterSrc','index2/mp3/img/commun.jpg');
        bg_center=localStorage.getItem("bgCenterSrc");
    }


    var iHtml='';
    for(let i=0;i<arrMp3.length;i++){
        // console.log("123");
        // iHtml = '<tr>'+
        // console.log(iHtml);
        let mp3Url=arrMp3[i].mp3Url;
        // console.log(arrMp3[i].mp3Url);


        iHtml = '<tr>' +
                '<td style="width:130px;height:150px">'+
                    '<div class="btns-bg">'+
                        '<div class="PlayEy PlayEyBack" style="background: url('+arrMp3[i].mp3Background+'),url('+bg_center+') no-repeat center;  background-size:100% 100%; "></div>'+
                        '<div class="Btn"></div>'+
                        '<div class="Play">'+
                            '<audio src="'+mp3Url+'" preload="none" type="audio/mp3"></audio>'+
                        '</div>'+
                    '</div>'+

                '</td>'+
                '<td>'+
                    '<p class="textOverflow">'+
                        arrMp3[i].mp3Title+
                    '</p>'+
                '</td>'+
                
            '</tr>';
            


            $("."+classHtml).append(iHtml);
    }

    
}

   

arrList(arrMp3Reprie,'mp3Reprise');
    
arrList(arrMp3Original,'Mp3Original');





$('.Play').each(function (index,value) {
      let MUSIC_LENGTH =$('.Play').length;
      
        $(this).children('audio').attr('id','audiosList'+index);

        $(this).click(function () {
            $('.Play').css('backgroundImage',"url(index2/img/vidio/pause.png)");
            let oPlayEy=$(this).prev('.Btn').prev('.PlayEy');
            let oPlay=$(this);
           
            let audios=document.getElementById($(this).children('audio').attr('id'));
           
            
                var seii = setInterval(function() {
                    (i == 360) ? i = 0 : i++;
                    oPlayEy.css('transform',"rotate(" + i + "deg)");
                    // oPlayEy.style.transform = "rotate(" + i + "deg)";
                    if(audios.paused) {
                        clearInterval(seii);
                    }
                }, 30);
                if(audios.paused) {
                    for(let i=0;i<MUSIC_LENGTH;i++){
                        
                        if(i==index){
                            console.log("12313");
                            oPlay.css('backgroundImage',"url(index2/img/vidio/play.png)");
                            oPlay.css('width',"32px");
                            oPlay.css('height',"32px");
                             audios.play();
                        }
                        else {
                            
                                document.getElementById("audiosList"+i).pause();

                            

                        }

                    }

                    
                } 
                else {
                    audios.pause();
                    oPlay.css('backgroundImage',"url(index2/img/vidio/pause.png)");
                    oPlay.css('width',"29px");
                    oPlay.css('height',"36px");
                    
                }


        })


})


