// about gambar

$(window).scroll(function(){
    const scroll = $(this).scrollTop()


    //gambar
    if(scroll> $('.about').offset().top -200){
        $('.box-2 .gambar').each(function(i){
            setTimeout(function(){
                $('.box-2 .gambar').eq(i).addClass('muncul');
            },500 * (i+1));
        });
    }

    //tulisan
    if(scroll > $('.about').offset().top -200){
        $('.tulisan').each(function(j){
            setTimeout(function(){
                $('.tulisan').eq(j).addClass('ada');
            }, 500 * (j+1));
        })
    }

    if(scroll > $('.about').offset().top -290){
        $('.about .judula').each(function(i){
            setTimeout(function(){
                $('.about .judula').eq(i).addClass('amuncul');
            }, 500 * (i+1));
        });
    }

    //galeri

    if(scroll > $('.galeri').offset().top -200){
        $('.galeri .image').each(function(i){
            setTimeout(function(){
                $('.galeri .image').eq(i).addClass('gmuncul');
            }, 500 * (i+1));
        });
    }



    //h1 galeri
    if(scroll > $('.galeri').offset().top -330){
        $('.galeri .judul').each(function(i){
            setTimeout(function(){
                $('.galeri .judul').eq(i).addClass('jmuncul');
            }, 500 * (i+1));
        });
    }


    if(scroll > $('.galeri').offset().top -250){
        $('.galeri input').each(function(i){
            setTimeout(function(){
                $('.galeri input').eq(i).addClass('imuncul');
            }, 100 * (i+1));
        });
    }


    if(scroll > $('.service').offset().top -200){
        $('.service .box-4').each(function(i){
            setTimeout(function(){
                $('.service .box-4').eq(i).addClass('smuncul');
            }, 500 * (i+1));
        });
    }

    if(scroll > $('.service').offset().top -250){
        $('.service .jdl').each(function(i){
            setTimeout(function(){
                $('.service .jdl').eq(i).addClass('jmuncul');
            }, 500 * (i+1));
        });
    }

})


$(window).on('load',function(){
    $('.nav .container ul li').addClass('nmuncul');
    $('.text').addClass('kiri');
})
