
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "كيف أحجز موعداً؟",
    answer: "يمكنك الحجز عبر زر الحجز في الموقع أو بالتواصل معنا على رقم +966 50 189 9860.",
  },
  {
    question: "هل الصالون مناسب للأطفال؟",
    answer: "نعم، لدينا كرسي مزخرف وأجواء مرحة للأطفال.",
  },
  {
    question: "ماذا أفعل إذا ألغيت موعدي؟",
    answer: "نرجو إعلامنا قبل 3 ساعات عبر الهاتف أو الرسائل.",
  },
  {
    question: "هل يجب دفع عربون عند الحجز؟",
    answer: "لا، لا يلزم دفع عربون عند الحجز. يتم الدفع بعد الانتهاء من الخدمة في الصالون مباشرة.",
  },
  {
    question: "هل يمكنني التأجيل لوقت لاحق في نفس اليوم؟",
    answer: "نعم، يمكنك ذلك مع إشعارنا مسبقًا، وسنحاول جدولة موعدك الجديد بحسب توفر المواعيد في ذلك اليوم.",
  },
  {
    question: "ما هي خدمات الحلاقة التي تقدمونها؟",
    answer: "نقدم مجموعة متنوعة من خدمات الحلاقة تشمل قص الشعر بأنواعه (كلاسيكي، عصري، قص للأطفال)، وحلاقة اللحية (تشذيب، تحديد، حلاقة كاملة)، وصبغ الشعر واللحية باستخدام منتجات آمنة وعالية الجودة.",
  },
  {
    question: "هل لديكم مواقف سيارات؟",
    answer: "نعم، يتوفر مواقف سيارات بالقرب من الصالون لراحة عملائنا.",
  },
];

const FAQAccordion = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-right">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-right">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion;
