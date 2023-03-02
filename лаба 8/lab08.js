//элемент получает фокус, когда пользователь нажимает на поле(вызыв в момент фокусировки)
$(".tab2").focus(function()
{
    $(this).parent().addClass("focus");
}).blur(function()  //вызывается когда элемент теряет фокус
{
    if($(this).val()==='')
    {
        $(this).parent().removeClass("focus")
    }
})

$(document).ready(function()
{
    document.querySelector('#email').addEventListener('blur', function()  
    {
        if (!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(this.value))
        {
            alert("Некорректный email");
        }
    })
    $(".dws-form").on("click",".tab",function()
    { 
        $(".dws-form ").find(".active").removeClass("active");   //удаление класса active 
        $(this).addClass("active");                              //добавляем active 
        $(".tab-form").eq($(this).index()).addClass("active");   //выборка элемента по индексу 
    })
});

