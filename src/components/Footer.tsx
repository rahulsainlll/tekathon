import { Instagram, Mail } from "lucide-react";
import footerimg from "./../assets/footer.png";
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

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center py-12 md:py-20 text-white"
      style={{ backgroundImage: `url(${footerimg})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-lg md:text-xl mb-4">#YourHacktheCU • What will you create?</h2>
        <nav className="mb-8">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/Guidance.pdf" className="hover:underline">
                Guideline
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:underline">
                Timeline
              </a>
            </li>
            <li>
            <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer hover:underline">
          <p className="capitalize">FAQ</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] mx-auto mt-10 sm:mt-0 p-4 sm:p-8 max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-[2rem] text-[#495e57]">FAQ</DialogTitle>
        </DialogHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger><div className="pl-20">What is Tekathon 3.0?</div></AccordionTrigger>
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
            <AccordionTrigger><div className="pl-20">What is the team size?</div></AccordionTrigger>
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
              Only three problem statement is allowed per team.
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
              Only 60 teams will be shortlisted for round two rest the team selection process entirely depends on the evaluator. If
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
              As per the ministry, only 25 teams will be shortlisted and 5 will
              be on the waitlist.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>
           <div className="relative left-[100px]"> For more details </div>
            </AccordionTrigger>
            <AccordionContent>
              <b>Contact:</b><br />
              📞 Atul Raj<br />
+91 62031 11384<br />
Student Secretary<br />
<br />
📞 Shivansh Tiwari<br />
+91 72759 94641<br />
Student Joint Secretary<br />
<br />
<svg width="20px" height="20px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"/>
<path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"/>
<path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"/>
<path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"/>
<path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"/>
<path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"/>
<path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"/>
<path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"/>
</svg><b>Gmail:</b>tekathon.cu@gmail.com
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center mb-8 space-x-20">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tekathon.cu@gmail.com" target="_blank" rel="noopener noreferrer">
  <Mail className="text-2xl cursor-pointer" />
</a>
<a href="https://www.instagram.com/cac.cuchd/">
          <Instagram className="text-2xl cursor-pointer" /></a>
        </div>

        <p className="text-sm mb-8">
          Made with 💛 by Connecting All Circles - Chandigarh University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
