import { permanentRedirect } from "next/navigation";

export default function InvestorsPage() {
  permanentRedirect("/contact?interest=investment");
}
