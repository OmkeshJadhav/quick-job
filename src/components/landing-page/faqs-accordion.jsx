import faqs from "@/data/faq.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FaqAccordion = () => {
    return (
        <section>
            <h2 className='text-2xl sm:4xl lg:6xl font-extrabold'>FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                    return (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </section>
    )
}

export default FaqAccordion