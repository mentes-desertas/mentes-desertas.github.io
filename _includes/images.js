function imagem()
          {
           return "/assets/imgs/{{ page.categories }}/" + Math.ceil(Math.random()*{% if page.imgs) %} {{ page.imgs }}{% else %}1 {% endif %}) + ".jpg"
          };

          
        $(document).ready(function(){
             $("img#{% if page.categories) %}{{ page.categories }}{% else %}1 {% endif %}").attr("src", imagem);
        });
    