var Telegram = require("node-telegram-bot-api")
var Token = "5921421008:AAHwhpLuJM_xWL1Ao_k1Ji8yoBUxynAgTBE"
var fs = require("fs")

var opt = {polling:true}

var bot = new Telegram(Token,opt)


bot.on("message", function(msg){

    console.log(msg)
    var chatid = msg.chat.id
    var text = msg.text

    if(text ==   "بوت" ){
                bot.sendMessage(chatid,
        `
        التطبيقات الاساسيه لمجموعة الفيصل

👇👇👇👇
تطبيق الفيصل الرسمي

https://play.google.com/store/apps/details?id=ssh.alfaisal.lite


تطبيق تونيل بلس

https://play.google.com/store/apps/details?id=app.ovpninject5.vpn



الفيصل سوكس

https://play.google.com/store/apps/details?id=com.alfaisalsocks.apps


الفيصل برو

https://play.google.com/store/apps/details?id=sshssl.faisalvpn.ovpn




اليوتيوب لا يعمل

ايقاف ايزي نت سوا

ايقاف ايزي نت زين

ايقاف ايزي نت موبايلي

ايقاف ايزي نت ليبارا

بث شبكه من vpn

اشتراك موبايلي

اشتراك زين

اشتراك سوا

باقات زين

باقه موبايلي ببجي

موبايلي 60

باقة 25 و 39
        `)
    }


    if(text == "الفيصل"){
        bot.sendMessage(chatid,
            "ALFAISALVPN² \n تطبيق socks \n\n حاقن \n\n اليوتيوب لا يعمل \n\n ايقاف ايزي نت سوا \n\n ايقاف ايزي نت زين \n\n ايقاف ايزي نت موبايلي \n\n ايقاف ايزي نت ليبارا \n\n بث شبكه من vpn \n\n اشتراك موبايلي \n\n اشتراك زين \n\n اشتراك سوا \n\n باقات زين \n\n باقه موبايلي ببجي \n\n موبايلي 60 \n\n\n\n ")
    }
    if(text == "تطبيق socks"){
        bot.sendMessage(chatid,
            ` 
             تطبيق socks 

            https://play.google.com/store/apps/details?id=com.alfaisalsocks.apps
            
            `)    }
    if(text == "حاقن"){
        bot.sendMessage(chatid,
            ` 
             تطبيق حاقن 

            https://play.google.com/store/apps/details?id=com.alfaisalsocks.apps
            
            `)    }

    if(text == "اليوتيوب لا يعمل"){
        bot.sendPhoto(chatid, 
            "https://telegra.ph/file/2695bc4634aea6c8d94a1.mp4"
            )}
            
    if(text == "ايقاف ايزي نت سوا" ){
        bot.sendMessage(chatid,
            ` 
ارسل الى 900  الرمز 2001   
ولتشغيل خدمة الدفع حسب الاستخدام  ارسل 2002 الى 900            
            `)}

    if(text == "ايقاف ايزي نت زين" ){
        bot.sendMessage(chatid,
            ` 
ارسل الى 900  الرمز 2001   
ولتشغيل خدمة الدفع حسب الاستخدام  ارسل 2002 الى 900            
            `)}

    if(text == "ايقاف ايزي نت موبايلي" ){
        bot.sendMessage(chatid,
            ` 
لتفعيل خدمة الدفع بحسب الاستخدام للإنترنت بتعرفة الميجابايت للباقة، أرسل 4099 إلى 1100.

كما يمكنك ايقاف الخدمة في أي وقت عبر إرسال 4000 إلى 1100.

            `)}
    if(text == "ايقاف ايزي نت ليبارا" ){
        bot.sendMessage(chatid,
            ` 
لاستخدام البيانات من رصيدك ارسل تفعيل د1 الى 1755

لإيقاف استخدام البيانات من رصيدك  أرسل د1 الى 1755
            `)}
    if(text == "بث شبكه من vpn" ){
        bot.sendVideo(chatid,
            "alfisal.mp4")}
    if(text == "اشتراك موبايلي" ){
        bot.sendPhoto(chatid,
            "https://telegra.ph/file/3fdd4f314a9ca8cf07d85.jpg"
            )}
    if(text == "اشتراك زين" ){
        bot.sendPhoto(chatid,
            "https://telegra.ph/file/4f8029013005a012230e9.jpg")}
    if(text == "اشتراك سوا" ){
        bot.sendMessage(chatid,
            ` 
لمشاهدة العروض المتوفره لديك 
ارسل برساله نصيه الى  الرقم  900 الرقم  888
وستصلك جميع الباقات المتوفره على خطك اذى ظهر عندك اشتراك سوشل لامحدود 👍


او اتصل على نجمه 888 مربع 
وستضهر لديك الباقات المتوفره لخطك
            `)}
    if(text == "باقات زين" ){
        bot.sendMessage(chatid,
            ` 
========@========
*قائمة بباقات زين *

-------------------------------------
★★★
*باقة زين 60 ريال شهر*
ارسل---312
الى---959
--------------------------------
★★★
*باقة زين 50 ريال شهر*
ارسل : Adedu
الى : 959
----------------------------------
★★★
*(15 ريال 30 يوم)*
ارسل - VB3
الى - 959
-------------------------------------
★★★
*(25 ريال 30 يوم)*
ارسل - Y25
الى - 959
---------------------------------------
★★★
*(25 ريال 30 يوم)*
ارسل - SM3
الى - 959
---------------------------------------
★★★
*(15 ريال 30 يوم)*
ارسل - SN3
الى - 959
----------------------------------------
★★★
*(25 ريال 30 يوم)*
ارسل - NX2
الى - 959
------------------------------------
★★★
*(10 ريال 30 يوم)*
ارسل - RWP
الى - 959
-------------------------------------
★★★
*(10 ريال 30 يوم)*
ارسل - SN2
الى - 959
-------------------------------------
★★★
*(28 يوم 25 ريال)*
ارسل - VB3T 
إلى - 959
            `)}
    if(text == "باقه موبايلي ببجي" ){
        bot.sendPhoto(chatid,
"https://telegra.ph/file/3cf8a4fdfd89ef1724525.jpg"
)}

    if(text == "باقة 25 و 39" ){
        const photo1 = bot.sendPhoto(chatid, "https://telegra.ph/file/bb94068a42d2bda0c560d.jpg") 
        bot.sendMessage(chatid, photo1 +
            ` 
اختر من القائمه باقة 39 وستعمل على باقتي 25 و 39


https://play.google.com/store/apps/details?id=app.ovpninject5.vpn
            `)}

        if(text == "موبايلي 60" ){
        const photo2 = bot.sendPhoto(chatid, "https://telegra.ph/file/a1052188a9b6834b71080.jpg") 
        bot.sendMessage(chatid, photo2 +
            `

اختار من الاعدادات باقة 60 


https://play.google.com/store/apps/details?id=ssh.alfaisal.lite
            `)}


if(text== "g" ){
var chat_id = msg.chat.id;
        console.log("This is the user's chat id"+chat_id.photo);

	
bot.sendPhoto({
    chat_id : msg.chat.id,
    caption: 'This is my test image',
    photo: 'https://telegra.ph/file/3cf8a4fdfd89ef1724525.jpg'//replace your image url here
}).then(function(data){});
}



})