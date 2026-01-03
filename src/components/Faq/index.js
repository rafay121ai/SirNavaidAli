import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const Faq = () => {

    return (
        <div class="accordion__wrapper1">
            <Accordion className="accordion" preExpanded={'a'}>
                <AccordionItem className="accordion-item" uuid="a">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            What types of physics courses are available?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Sir Navaid offers comprehensive courses for AS-Level Physics, A2-Level Physics, and O-Level Physics. Each course covers the complete Cambridge curriculum with detailed video lessons, practice problems, past paper solutions, and exam preparation materials designed specifically for Pakistani students.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="b">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            What makes Sir Navaid different from other physics teachers?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Sir Navaid's teaching style is unique! He makes physics fun and engaging with relatable Pakistani examples, uses humor to keep students interested, and breaks down complex concepts in a way that makes sense. His energetic and friendly approach makes learning physics enjoyable rather than intimidating.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="c">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            What courses does Sir Navaid offer?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Sir Navaid offers comprehensive courses for AS-Level Physics, A2-Level Physics, and O-Level Physics. Each course includes detailed video lessons, practice problems, past paper solutions, and step-by-step explanations designed specifically for Pakistani students following the Cambridge curriculum.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="d">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            How will Sir Navaid help me improve my physics grades?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Sir Navaid's courses are designed to help Pakistani students achieve A* grades. With clear explanations, practical examples, comprehensive coverage of the syllabus, and exam-focused teaching, thousands of students have improved their grades significantly. The fun teaching style also helps you stay motivated and actually enjoy learning physics!</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Faq;