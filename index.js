async function sendData() {
    // 1. استخراج القيم من الحقول باستخدام الـ id الموجود بالصورة
    const nameWebsite = document.getElementById('namewebsite').value;
    const phone = document.getElementById('textnum').value;
    const text = document.getElementById('text').value;
    const photoCount = document.getElementById('photo').value;

    // 2. معلومات البوت الخاصة بك (ضع معلوماتك هنا)
    const token = '8334604696:AAGQZZAPIiYMIyWewlqs9fo-rmmsDGiVt38';
    const chatId = '7429914322';

    // 3. تجهيز نص الرسالة بشكل مرتب

    if (!nameWebsite || !phone || !text || !photoCount) {
        alert('❌ الرجاء ملء جميع الحقول قبل الإرسال.');
        return;
    }
    const fullMessage = 
`طلب تصميم موقع جديد
                                 ------------------------------------------
👤 اسم الموقع: ${nameWebsite}
📞 رقم التواصل: ${phone}
📝 الوصف: ${text}
🖼️ عدد الصور: ${photoCount} `
    ;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // 4. إرسال البيانات/
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: 7429914322,
                text: fullMessage,
                parse_mode: 'Markdown' // عشان يطلع الخط عريض ومرتب
            })
        });

        if (response.ok) {
            alert('✅ تم إرسال طلبك بنجاح!');
        } else {
            alert('❌ فشل الإرسال.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ حدث خطأ أثناء الإرسال.');
    }
}