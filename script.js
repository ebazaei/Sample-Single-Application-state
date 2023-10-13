/*
در اینجا یک اپلیکیشن تک صفحه بسیار ساده را طراحی کرده ایم به روش State

در قدم اول میخوایم به المنت دکمه ها دست پیدا کنیم و روی هر دکمه که کلیک شد متوجه شیم اما به جای 4ایونت لیسنار
فقط 1 ایونت لیسنار برای "nav" تعریف میکنیم و بعد با چک کردن ایتم آی دی که بک اتریبیود شخصی است 
متوجه میشم کدام کلیک شده
*/
document.querySelector("nav").addEventListener("click",(e)=>{
    //در شرط زیر تارگت، المنت را برمیگگردونه و نودنیم نوع المنت رو و اگر نوع المنت آی نباشه کلا ریترن میشه و عملی صورت نمیگیره چون میخوایم فقط روی آی ها کلیک شه
    if(e.target.nodeName != "I") return

    //درون متغییر دیتا اطلاعات لازم قرار داده خواهد شد . مثلا اینکه متن درون بشه جستجو و رنگ زمینه ابی شه
    let data;

    //خط اول سوییچ مقدار اتریبیودی که روش کلیک شده را برمیگردونه و بعد با کیس ها بررسی ها انجام میشه
    switch (e.target.getAttributeNode("item-id").value) {

        case "home":
            data = {title: "HOME",color: "red",itemId: "home"}
            //به روز رسانی با استفاده از فانکشن اپدیت که نوشته ایم با استفاده از محتوای متغییر دیتا
            update(data)
            //ساختن پشته با استفاده از پوش استیت هیستوری که در درس پراپرتی هیستوری بام دیدیم - ورودی اول ای دی  - ورودی دوم برای تایتل که قعلا ساپورت نمیکنن مرورگرها و ورودی سوم ایدرس بالا در مرورگر یو ار ال
            history.pushState(data, "home", "home")
            break;

        case "search":
            data = {title: "SEARCH",color: "blue",itemId: "search"}
            update(data)
            history.pushState(data, "search", "search")
            break;

        case "likes":
            data = {title: "LIKE",color: "yellow",itemId: "likes"}
            update(data)
            history.pushState(data, "likes", "likes")
            break;

        case "profile":
            data = {title: "PROFILE",color: "green",itemId: "profile"}
            update(data)
            history.pushState(data, "profile", "profile")
            break;

    }
})


//تعریف فعال شدن دکمه های برگشت مروگر 
window.addEventListener("popstate", e=>{
    //اول میخوایم چک کنیم که اگر پشته ای وجود داره و روی دکمه ای کلیک شده، استیت رو هماهنگ کنه با استیت موجود در دیتا
    if(history.state){
        update(history.state)
    }else{
        update({title: "HOME",color: "red",itemId: "home"})
    }
})

//26:07
function update(data){
    //دسترسی به اچ 1 و تغییر محتوا مطابق تایتل دیتا
    document.querySelector("h1").innerText = data.title;
    //دسترسی به مین و تغییر رنگ بکگراند مطابق رنگ متغییر دیتا
    document.querySelector("main").style.backgroundColor = data.color;
    //کمرنگ کردن همه دکمه ها و پر رنگ کردن دکمه کلیک شده
    document.querySelectorAll("i").forEach(element=>{
        element.style.color= "#666"
    })

     //بوسیله ایتم ای دی دکمه کلیک شده را یافته و پررنگ میکنیم.
    document.querySelector(`i[item-id=${data.itemId}]`).style.color = "black"

}