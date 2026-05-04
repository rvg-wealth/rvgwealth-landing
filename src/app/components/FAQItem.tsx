import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="glass-card luminous-border rounded-lg p-6">
      <details className="group">
        <summary className="list-none flex justify-between items-center cursor-pointer">
          <h4 className="font-headline-md text-primary text-lg">{question}</h4>
          <ChevronDown className="w-5 h-5 text-outline transition-transform group-open:rotate-180 shrink-0 ml-4" />
        </summary>
        <div className="pt-4 text-outline font-body-md">{answer}</div>
      </details>
    </div>
  );
}
