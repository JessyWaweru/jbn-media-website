import Seo from '../components/Seo';
import { Link } from 'react-router-dom';
import { SITE } from '../config';

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy policy" description="How JBN Media collects, uses and protects your personal information." />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">Legal</span><h1>Privacy policy</h1><p className="muted">Last updated: November 2026</p></div></section>
      <section className="section pt-0">
        <div className="container narrow prose">
          <p>JBN Media ("we", "us") respects your privacy and handles personal data in line with the Kenya Data Protection Act, 2019. This policy explains what we collect and how we use it.</p>
          <h2>What we collect</h2>
          <ul>
            <li>Details you give us when you contact us: name, business name, phone number, email and your message.</li>
            <li>Information you share while we work together, such as content for your website or marketing.</li>
            <li>Payment confirmations for M‑Pesa payments made to us.</li>
          </ul>
          <p>This website does not use advertising cookies or require you to create an account. The enquiry form does not store your details on our servers; it opens WhatsApp or your email app so you can send the message yourself.</p>
          <h2>The chat assistant on this website</h2>
          <p>The chat bubble on this website, and on our demo pages at assistant.jbnmedia.org, is an automated assistant powered by artificial intelligence (AI). It is not a person. It answers from the services and prices we publish, but it can make mistakes; see our <Link to="/terms">terms</Link>.</p>
          <ul>
            <li><strong>What it collects:</strong> the messages you type, a random chat ID saved in your browser, and your IP address, which is used only to stop spam and is not stored.</li>
            <li><strong>Who processes it:</strong> your messages are sent to our AI provider, Anthropic, to write the replies, and are kept on our hosting provider, Render. Both are in the United States.</li>
            <li><strong>How long we keep it:</strong> chats are kept on our server only briefly, so the assistant can follow the conversation, and are deleted when the server restarts, usually within a day. Your browser keeps its own copy of the chat on this website until you clear your browser's site data. On demo pages nothing is kept once you leave or reload the page.</li>
            <li><strong>Talking to a person:</strong> if you ask for a person, the assistant gives you a WhatsApp link to our team. Nothing is sent to WhatsApp until you open it and send the message yourself.</li>
          </ul>
          <p>Please don't type sensitive information, such as passwords, ID numbers or M‑Pesa PINs, into the chat.</p>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry and prepare quotes.</li>
            <li>To deliver the services you have paid for and send you reports.</li>
            <li>To keep records required for accounting and tax.</li>
          </ul>
          <p>We do not sell your data. When we work with a partner agency on your project, we only share what they need to do the work, and only with your agreement.</p>
          <h2>Your customers' data</h2>
          <p>Where we build a system that handles your customers' or members' data (for example a Chama/SACCO system, M‑Pesa payments or a WhatsApp or website assistant), you remain the data controller and we act as a processor on your instructions.</p>
          <p>The WhatsApp and website assistants we build for clients are automated AI assistants, not people. Their customers' messages are processed by our AI provider (Anthropic) and hosting provider (Render) to write the replies, and payments go through Paystack and M‑Pesa.</p>
          <h2>Your rights</h2>
          <p>You can ask to see, correct or delete the personal data we hold about you at any time by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          <h2>Third parties</h2>
          <p>WhatsApp (Meta), Safaricom M‑Pesa, Paystack, Anthropic (AI replies), Render (hosting) and our email provider process data under their own privacy policies.</p>
        </div>
      </section>
    </>
  );
}
