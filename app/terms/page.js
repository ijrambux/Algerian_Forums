// app/terms/page.js
"use client";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
        شروط الاستخدام
      </h1>

      <div className="space-y-6 leading-7 text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            1. قبول الشروط
          </h2>
          <p>
            باستخدامك لموقع <span className="text-blue-400">Algerian Forums</span>، فإنك توافق على الالتزام بجميع الشروط والسياسات المذكورة في هذه الصفحة. إذا كنت لا توافق على أي جزء، فالرجاء التوقف عن استخدام المنصة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            2. حساب المستخدم
          </h2>
          <p>
            عند إنشاء حساب، يجب عليك تقديم معلومات صحيحة ودقيقة. أنت مسؤول عن حماية كلمة مرورك وعن أي نشاط يحدث في حسابك.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            3. المحتوى المنشور
          </h2>
          <p>
            يتحمل المستخدم المسؤولية الكاملة عن أي منشور أو تعليق يقوم به. يمنع نشر المحتوى المخالف للقوانين أو المسيء أو الذي ينتهك حقوق الآخرين.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            4. حقوق الملكية
          </h2>
          <p>
            جميع الحقوق محفوظة لـ <span className="text-blue-400">Algerian Forums</span>. يمنع نسخ أو إعادة نشر أي جزء من المنصة بدون إذن.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            5. التعديلات على الشروط
          </h2>
          <p>
            يحق للمنصة تعديل شروط الاستخدام في أي وقت. استمرارك في تصفح الموقع بعد التعديل يعني موافقتك على الشروط الجديدة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            6. إخلاء المسؤولية
          </h2>
          <p>
            المنصة غير مسؤولة عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع أو أي محتوى منشور من قبل المستخدمين.
          </p>
        </section>
      </div>
    </div>
  );
}

