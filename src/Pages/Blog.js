// import React from "react";
// import { contactDetails } from "../Details";

// function Contact() {
//   const { email, phone } = contactDetails;
//   return (
//     <main className="container mx-auto max-width section">
//       <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
//         For any questions please drop a mail
//       </h1>
//       <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
//         <a href={`mailto:${email}`}>{email}</a>
//       </h3>
//       <span className="text-center text-content text-xl font-light block">or</span>
//       <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
//         <a href={`tel:${phone}`}>{phone}</a>
//       </h3>
//     </main>
//   );
// }

// export default Contact;

import React from "react";

function Blog() {
  return (
    <main className="container mx-auto max-width section pb-10 md:pb-20 lg:pb-32">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
      Addressing Bias in AI: A Crucial Challenge for the IT Industry
      </h1>
      <p className="text-left text-content text-lg md:text-xl lg:text-2xl font-light block mt-4 md:mt-6">
      Artificial Intelligence (AI) is rapidly becoming a big part of the IT world, making things more efficient. AI systems, however, are also capable of displaying bias, which might lead to unethical hiring or customer service procedures. The IT sector faces a great problem, but it also has an opportunity to set the standard for ethical AI use. </p>
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-gradient font-semibold md:font-bold pt-5 md:pt-8">
      How to Fix Bias in AI
      </h2>
      <ul className="text-left text-content text-lg md:text-xl lg:text-2xl font-light block mt-4 md:mt-6">
        <li>
          <strong>IInclude More Diversity - </strong> Having different kinds of people on AI teams helps catch biases that a more similar group might miss.
        </li><br></br>
        <li>
          <strong>Test AI Systems Carefully - </strong> Regularly checking and testing AI systems can stop biased algorithms from being used and fix any biases that come up..
        </li><br></br>
        <li>
          <strong>Be Open About How AI Works - </strong> Being clear about how AI makes decisions builds trust. It helps identify and correct biases and allows everyone to observe how decisions are made.
        </li>
      </ul>
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-gradient font-semibold md:font-bold pt-5 md:pt-8">
      Conclusion
      </h2>
      <p className="text-left text-content text-lg md:text-xl lg:text-2xl font-light block mt-4 md:mt-6">
      For the IT industry to keep growing and help everyone equally, using AI in a fair way is key. By taking these steps, businesses can ensure that AI benefits every member of society and eliminate discrimination.
      </p>
    </main>
  );
}

export default Blog;

