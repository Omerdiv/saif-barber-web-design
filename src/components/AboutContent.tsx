
import React from "react";
import { Heart, Star, Award, Smile } from "lucide-react";

const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="heading-secondary mb-8">نبذة عن صالون سيف للحلاقة</h2>
            <p className="text-lg mb-6">
              منذ أكثر من 3 سنوات، يقدّم صالون سيف للحلاقة في غبيرة تجربة فريدة
              لمجتمع الرجال في الرياض. نؤمن بأن كل زيارة تحمل قصة، لذا نحرص على
              توفير بيئة مريحة وأداء احترافي يلبي تطلعاتك.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden h-80 shadow-lg">
            <img 
              src="/lovable-uploads/78faf805-d573-4c90-b6be-e12161a792ec.png" 
              alt="صالون سيف للحلاقة" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-6">رؤيتنا وقيمنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="backdrop-blur-lg bg-white/50 p-6 rounded-lg shadow-glow border border-red-500">
            <div className="text-primary mb-4 flex justify-center">
              <Award className="h-12 w-12" />
            </div>
            <h4 className="font-bold mb-2 text-center">الجودة أولاً</h4>
            <p className="text-center">أدوات معقمة وأعلى معايير النظافة.</p>
          </div>
          <div className="backdrop-blur-lg bg-white/50 p-6 rounded-lg shadow-glow border border-red-500">
            <div className="text-primary mb-4 flex justify-center">
              <Star className="h-12 w-12" />
            </div>
            <h4 className="font-bold mb-2 text-center">الابتكار</h4>
            <p className="text-center">مواكبة أحدث القصات والتقنيات.</p>
          </div>
          <div className="backdrop-blur-lg bg-white/50 p-6 rounded-lg shadow-glow border border-red-500">
            <div className="text-primary mb-4 flex justify-center">
              <Award className="h-12 w-12" />
            </div>
            <h4 className="font-bold mb-2 text-center">الاحترافية</h4>
            <p className="text-center">حرفيون ذوو خبرة عالية.</p>
          </div>
          <div className="backdrop-blur-lg bg-white/50 p-6 rounded-lg shadow-glow border border-red-500">
            <div className="text-primary mb-4 flex justify-center">
              <Smile className="h-12 w-12" />
            </div>
            <h4 className="font-bold mb-2 text-center">الود والترحاب</h4>
            <p className="text-center">أجواء أسرية تناسب الصغار والكبار.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-6">فريق العمل</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-lg bg-white/50 p-4 rounded-lg shadow-glow border border-red-500 overflow-hidden h-72">
            <img 
              src="/lovable-uploads/43a25d28-cf84-49ff-84a3-916788e49ba9.png" 
              alt="فريق العمل" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="backdrop-blur-lg bg-white/50 p-4 rounded-lg shadow-glow border border-red-500 overflow-hidden h-72">
            <img 
              src="/lovable-uploads/511dc986-62d2-4c4c-b107-1c71880847cf.png" 
              alt="فريق العمل" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-6">جولة افتراضية</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-lg bg-white/50 p-4 rounded-lg shadow-glow border border-red-500 overflow-hidden h-64">
            <img 
              src="/lovable-uploads/78faf805-d573-4c90-b6be-e12161a792ec.png" 
              alt="الصالون من الداخل" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="backdrop-blur-lg bg-white/50 p-4 rounded-lg shadow-glow border border-red-500 overflow-hidden h-64">
            <img 
              src="/lovable-uploads/2374055e-516a-467a-9df9-a493e7e2a8d9.png" 
              alt="الصالون من الداخل" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="backdrop-blur-lg bg-white/50 p-4 rounded-lg shadow-glow border border-red-500 overflow-hidden h-64">
            <img 
              src="/lovable-uploads/429a519e-ac2f-4d0f-ad78-e4e90ce136be.png" 
              alt="الصالون من الداخل" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
