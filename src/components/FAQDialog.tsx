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
      <DialogContent className="sm:max-w-[425px] mx-auto mt-10 sm:mt-0 p-4 sm:p-8 max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">FAQ</DialogTitle>
        </DialogHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Tekathon 3.0?</AccordionTrigger>
            <AccordionContent>
              Tekathon 3.0 is the second iteration of the Internal Hackathon, a
              preliminary to the Smart India Hackathon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Who can participate in the Tekathon 3.0?
            </AccordionTrigger>
            <AccordionContent>
              Students from different branches are allowed to form a team and
              participate but not from different colleges. No fresher is
              allowed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              I am in my first year (Fresher). Can I participate?
            </AccordionTrigger>
            <AccordionContent>
              No, 1st-year students are not allowed in the team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              I am pursuing Distance/Part-Time Education and am currently
              employed as a working Professional, can I participate?
            </AccordionTrigger>
            <AccordionContent>
              No, the students should be pursuing and enrolled in a regular
              course.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What is the team size?</AccordionTrigger>
            <AccordionContent>
              6 members and one female member (included) is compulsory.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Is one female mandatory for forming a team?
            </AccordionTrigger>
            <AccordionContent>
              Yes, without a female participant, the team cannot register, which
              may lead to disqualification.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Are students allowed to participate in more than one team?
            </AccordionTrigger>
            <AccordionContent>
              No, participation through more than one team will lead to
              disqualification of all the teams consisting of that participant.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              How many problem statements can a team work on?
            </AccordionTrigger>
            <AccordionContent>
              Only one problem statement is allowed per team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              What is the convention regarding the name of the team?
            </AccordionTrigger>
            <AccordionContent>
              The name of the team should be unique and bear no resemblance to
              the Institution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Is it compulsory to have a mentor for the team?
            </AccordionTrigger>
            <AccordionContent>
              Yes, it is compulsory for each team to have a mentor in SIH 2024.
              For the Internal Hackathon, it is not compulsory.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>
              How many teams will qualify for Round 2 of the Internal Hackathon?
            </AccordionTrigger>
            <AccordionContent>
              The team selection process entirely depends on the evaluator. If
              the evaluator feels that no team should proceed in a particular
              domain, then no team will be selected from that domain. Similarly,
              if the evaluator believes that there are strong ideas in a
              specific domain, those will be considered.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              How many teams will be nominated for SIH 2024?
            </AccordionTrigger>
            <AccordionContent>
              As per the ministry, only 30 teams will be shortlisted and 5 will
              be on the waitlist.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default FAQDialog;
