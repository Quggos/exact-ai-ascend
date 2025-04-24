import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { useState, useEffect, useRef } from 'react';

const TermsOfService = () => {
	const [isSticky, setIsSticky] = useState(false);
	const topRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);

		window.scrollTo(0, 0);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div
			className="min-h-screen bg-black text-foreground overflow-x-hidden"
			ref={topRef}
		>
			<Header isSticky={isSticky} scrollToSection={scrollToSection} />

			<main className="container mx-auto px-4 sm:px-8 py-16 sm:py-24">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
						Terms of Service
					</h1>

					<div className="prose prose-invert max-w-none">
						<p className="text-lg mb-8 text-gray-300">
							Last updated: 11th Mar 2025
						</p>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								1. Acceptance of Terms
							</h2>
							<p className="text-gray-300 leading-relaxed">
								By accessing or using EXACT AI's website and services, you agree
								to be bound by these Terms of Service. If you do not agree to
								all the terms and conditions, you must not access or use our
								services.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								These Terms of Service constitute a legally binding agreement
								between you and EXACT AI regarding your use of our website and
								AI text chat assistant services. By registering for an account,
								accessing our platform, or using any of our services, you
								acknowledge that you have read, understood, and agree to be
								bound by these terms.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								2. Description of Services
							</h2>
							<p className="text-gray-300 leading-relaxed">
								EXACT AI provides AI-powered text chat assistants for business
								communication. Our services include customer support AI, sales
								AI assistants, and custom AI solutions. We reserve the right to
								modify, suspend, or discontinue any part of our services at any
								time without notice.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								Our AI assistants are designed to enhance customer engagement,
								automate routine interactions, and provide personalized
								responses based on your business needs and data. The
								effectiveness of our AI solutions depends on various factors,
								including but not limited to, the quality of training data,
								specific use cases, and integration with your existing systems.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								While we strive to ensure the accuracy and appropriateness of
								our AI assistants' responses, please note that as an AI-based
								service, our technology has limitations. We cannot guarantee
								that our AI will always generate perfect or error-free responses
								in all contexts.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								3. User Accounts
							</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								Some features of our services may require you to create an
								account. You are responsible for:
							</p>
							<ul className="list-disc pl-6 space-y-4 mt-4 text-gray-300">
								<li>
									<strong className="text-white">Account Information:</strong>{' '}
									Providing accurate, current, and complete information during
									the registration process and keeping your account information
									updated.
								</li>
								<li>
									<strong className="text-white">Account Security:</strong>{' '}
									Maintaining the confidentiality of your account credentials,
									including your password, and restricting access to your
									account.
								</li>
								<li>
									<strong className="text-white">Account Activity:</strong> All
									activities that occur under your account, whether authorized
									by you or not.
								</li>
								<li>
									<strong className="text-white">Unauthorized Access:</strong>{' '}
									Notifying us immediately of any unauthorized use of your
									account or any other breach of security.
								</li>
							</ul>
							<p className="text-gray-300 leading-relaxed mt-6">
								We reserve the right to disable any user account, at any time,
								if we believe you have violated these Terms of Service or if we
								determine, in our sole discretion, that your use of the account
								poses a security risk to our services or other users.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								4. Intellectual Property Rights
							</h2>
							<p className="text-gray-300 leading-relaxed">
								All content, features, and functionality of our services,
								including but not limited to text, graphics, logos, icons,
								images, audio clips, and software, are owned by EXACT AI and are
								protected by copyright, trademark, and other intellectual
								property laws.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								You may not reproduce, distribute, modify, create derivative
								works of, publicly display, publicly perform, republish,
								download, store, or transmit any of our materials without our
								express written consent.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								The EXACT AI name, logo, and all related names, logos, product
								and service names, designs, and slogans are trademarks of EXACT
								AI or its affiliates. You may not use such marks without our
								prior written permission. All other names, brands, and marks are
								used for identification purposes only and may be the trademarks
								of their respective owners.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								Our AI technology, algorithms, and machine learning models
								remain our exclusive property. While we may customize solutions
								based on your requirements and data, the underlying technology
								and any improvements made to our AI systems as a result of your
								usage remain our intellectual property.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								5. User Content
							</h2>
							<p className="text-gray-300 leading-relaxed">
								By submitting content to our services, you grant EXACT AI a
								worldwide, non-exclusive, royalty-free, sublicensable, and
								transferable license to use, reproduce, distribute, prepare
								derivative works of, display, and perform the content in
								connection with our services.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								You represent and warrant that you own or have the necessary
								rights to all content you submit, and that such content does not
								violate the rights of any third party.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								This license includes the right to use your content to train and
								improve our AI models. However, we will never publicly disclose
								your specific business data or personally identifiable
								information without your consent, except as required by law or
								as described in our Privacy Policy.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								You acknowledge that any feedback, suggestions, ideas, or other
								information you provide regarding our services may be used by us
								without any obligation to compensate you. We will own exclusive
								rights, including all intellectual property rights, to any such
								feedback, suggestions, ideas, or other information.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								6. Prohibited Uses
							</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								You agree not to use our services:
							</p>
							<ul className="list-disc pl-6 space-y-4 mt-4 text-gray-300">
								<li>
									<strong className="text-white">Legal Compliance:</strong> In
									any way that violates any applicable federal, state, local, or
									international law or regulation.
								</li>
								<li>
									<strong className="text-white">Harmful Content:</strong> To
									transmit, or procure the sending of, any advertising or
									promotional material, including any "junk mail," "chain
									letter," "spam," or any other similar solicitation, or any
									material that contains viruses, trojan horses, worms, or other
									harmful or disruptive codes.
								</li>
								<li>
									<strong className="text-white">Security Violations:</strong>{' '}
									To attempt to gain unauthorized access to, interfere with,
									damage, or disrupt any parts of our services, the server on
									which our services are stored, or any server, computer, or
									database connected to our services.
								</li>
								<li>
									<strong className="text-white">Service Integrity:</strong> To
									interfere with the proper working of our services, including
									by implementing excessive automated requests that could
									overburden our infrastructure.
								</li>
								<li>
									<strong className="text-white">Disruptive Activities:</strong>{' '}
									To engage in any activity that could disable, overburden, or
									impair the proper functioning of our services, such as a
									denial-of-service attack.
								</li>
								<li>
									<strong className="text-white">Misuse of AI:</strong> To use
									our AI assistants for generating content that is illegal,
									harmful, deceptive, discriminatory, or otherwise
									objectionable, including content that infringes on
									intellectual property rights, violates privacy rights, or
									promotes hatred or violence.
								</li>
								<li>
									<strong className="text-white">Reverse Engineering:</strong>{' '}
									To decompile, disassemble, reverse engineer, or attempt to
									discover the source code or underlying algorithms of our
									services.
								</li>
							</ul>
							<p className="text-gray-300 leading-relaxed mt-6">
								We reserve the right to terminate your access to our services
								for violations of these prohibited uses. Additionally, we may
								report illegal activities to relevant law enforcement
								authorities.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								7. Limitation of Liability
							</h2>
							<p className="text-gray-300 leading-relaxed">
								In no event shall EXACT AI, its directors, employees, partners,
								agents, suppliers, or affiliates be liable for any indirect,
								incidental, special, consequential, or punitive damages,
								including without limitation, loss of profits, data, use,
								goodwill, or other intangible losses, resulting from your access
								to or use of or inability to access or use our services.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								To the maximum extent permitted by applicable law, EXACT AI and
								its affiliates, officers, employees, agents, partners, and
								licensors disclaim all warranties, express or implied, including
								but not limited to implied warranties of merchantability,
								fitness for a particular purpose, and non-infringement.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								We do not warrant that our services will function without
								interruption or errors, that defects will be corrected, or that
								our servers are free of viruses or other harmful components. You
								use our services at your own risk.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								In jurisdictions that do not allow the exclusion or limitation
								of liability for certain damages, our liability will be limited
								to the maximum extent permitted by law.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								8. Indemnification
							</h2>
							<p className="text-gray-300 leading-relaxed">
								You agree to defend, indemnify, and hold harmless EXACT AI and
								its licensees and licensors, and their employees, contractors,
								agents, officers, and directors, from and against any and all
								claims, damages, obligations, losses, liabilities, costs, and
								expenses arising from your use of our services.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								This indemnification includes, but is not limited to, claims
								arising from:
							</p>
							<ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
								<li>Your violation of these Terms of Service</li>
								<li>Your violation of any rights of a third party</li>
								<li>Your misuse of our services</li>
								<li>
									Content you submit, post, or transmit through our services
								</li>
								<li>Your violation of any applicable laws or regulations</li>
							</ul>
							<p className="text-gray-300 leading-relaxed mt-4">
								We reserve the right, at your expense, to assume the exclusive
								defense and control of any matter for which you are required to
								indemnify us, and you agree to cooperate with our defense of
								these claims.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								9. Governing Law
							</h2>
							<p className="text-gray-300 leading-relaxed">
								These Terms shall be governed by and construed in accordance
								with the laws of the jurisdiction in which EXACT AI is
								established, without regard to its conflict of law provisions.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								Any legal action or proceeding arising out of or related to
								these Terms or your use of our services shall be brought
								exclusively in the federal or state courts located in San
								Francisco, California, and you consent to the personal
								jurisdiction of such courts.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								If any provision of these Terms is held to be invalid or
								unenforceable by a court, the remaining provisions of these
								Terms will remain in effect. These Terms constitute the entire
								agreement between us regarding our services and supersede any
								prior agreements we might have had between us regarding the
								services.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								10. Dispute Resolution
							</h2>
							<p className="text-gray-300 leading-relaxed">
								In the event of any dispute, claim, or controversy arising out
								of or relating to these Terms or the breach, termination,
								enforcement, interpretation, or validity thereof, you and EXACT
								AI agree to first attempt to resolve the dispute informally by
								contacting each other.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								If we are unable to resolve a dispute through informal means,
								any dispute, claim, or controversy arising out of or relating to
								these Terms shall be resolved by binding arbitration, rather
								than in court, except that you may assert claims in small claims
								court if your claims qualify.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								The arbitration shall be conducted by JAMS under its applicable
								rules, and judgment on the award rendered by the arbitrator(s)
								may be entered in any court having jurisdiction thereof. The
								place of arbitration shall be San Francisco, California. The
								language of the arbitration shall be English.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								You agree that any arbitration will be conducted on an
								individual basis and not as a class, consolidated, or
								representative action. If for any reason a claim proceeds in
								court rather than in arbitration, you and EXACT AI waive any
								right to a jury trial.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								11. Changes to Terms
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We reserve the right to modify these Terms at any time. If we
								make material changes, we will notify you by email or through
								our services. Your continued use of our services after such
								modifications constitutes your acceptance of the revised Terms.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								We may provide notification of changes through a banner on our
								website, by sending an email to the address associated with your
								account, or through other reasonable means. It is your
								responsibility to review the Terms periodically to stay informed
								of updates.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								If you do not agree to the new terms, you are free to reject
								them; however, that means you will no longer be able to use our
								services. Your continued use of our services following the
								posting of revised Terms means that you accept and agree to the
								changes.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								12. Subscription and Billing
							</h2>
							<p className="text-gray-300 leading-relaxed">
								Certain features of our services may require a subscription. By
								subscribing to our services, you agree to pay all fees
								associated with the subscription plan you choose.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								We may change our subscription fees at any time. If we do change
								fees, we will provide notice of the change on our website or by
								email, at our option, at least 30 days before the change takes
								effect. If you do not agree with the fee changes, you have the
								right to reject the change by canceling your subscription before
								the change takes effect.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								Unless otherwise stated, all fees are quoted in U.S. Dollars.
								You are responsible for paying all fees and applicable taxes
								associated with your subscription in a timely manner with a
								valid payment method. If your payment method fails or your
								account is past due, we may suspend or cancel your access to our
								services.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								13. Contact Us
							</h2>
							<p className="text-gray-300 leading-relaxed">
								If you have any questions about these Terms, please contact us
								at:
							</p>
							<div className="mt-6 space-y-2 text-gray-300">
								<p>
									<strong className="text-white">Email:</strong>{' '}
									hello@exactai.com
								</p>
								<p>
									<strong className="text-white">Postal Address:</strong> EXACT
									AI Headquarters, 123 Innovation Drive, San Francisco, CA
									94105, USA
								</p>
								<p>
									<strong className="text-white">Phone:</strong> +1 (555)
									123-4567
								</p>
							</div>
							<p className="text-gray-300 leading-relaxed mt-6">
								Our team is available Monday through Friday, 9:00 AM to 5:00 PM
								Pacific Time, excluding holidays.
							</p>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default TermsOfService;
