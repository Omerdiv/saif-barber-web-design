
import React from "react";

const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-secondary mb-8">نبذة عن صالون سيف للحلاقة</h2>
        <p className="text-lg mb-6">
          منذ أكثر من 3 سنوات، يقدّم صالون سيف للحلاقة في غبيرة تجربة فريدة
          لمجتمع الرجال في الرياض. نؤمن بأن كل زيارة تحمل قصة، لذا نحرص على
          توفير بيئة مريحة وأداء احترافي يلبي تطلعاتك.
        </p>

        <h3 className="text-xl font-bold mt-12 mb-6">رؤيتنا وقيمنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-accent p-6 rounded-lg">
            <h4 className="font-bold mb-2">الجودة أولاً</h4>
            <p>أدوات معقمة وأعلى معايير النظافة.</p>
          </div>
          <div className="bg-accent p-6 rounded-lg">
            <h4 className="font-bold mb-2">الابتكار</h4>
            <p>مواكبة أحدث القصات والتقنيات.</p>
          </div>
          <div className="bg-accent p-6 rounded-lg">
            <h4 className="font-bold mb-2">الاحترافية</h4>
            <p>حرفيون ذوو خبرة عالية.</p>
          </div>
          <div className="bg-accent p-6 rounded-lg">
            <h4 className="font-bold mb-2">الود والترحاب</h4>
            <p>أجواء أسرية تناسب الصغار والكبار.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-6">فريق العمل</h3>
        <div className="bg-accent p-8 rounded-lg text-center">
          <p className="text-lg">صورة المؤسس / صورة فريق الصالون</p>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-6">جولة افتراضية</h3>
        <div className="bg-accent p-8 rounded-lg text-center">
          <p className="text-lg">▶️ صور تعرض الصالون من الداخل</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
