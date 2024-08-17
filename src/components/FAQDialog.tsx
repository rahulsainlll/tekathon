import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-32 flex justify-center md:text-[20px] hover:scale-110 hover:bg-[#495e57] transition-all items-center h-10 rounded-full cursor-pointer">
          <p className="capitalize">FAQ</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] mx-auto mt-10 sm:mt-0 p-4 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-center">FAQ</DialogTitle>
        </DialogHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other components'
              aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default FAQDialog;
