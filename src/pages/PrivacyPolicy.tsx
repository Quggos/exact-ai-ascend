import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { useState, useEffect, useRef } from 'react';

const PrivacyPolicy = () => {
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
						Privacy Policy
					</h1>

					<div className="prose prose-invert max-w-none">
						<p className="text-lg mb-8 text-gray-300">
							Last updated: 11th Mar 2025
						</p>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								1. Introduction
							</h2>
							<p className="text-gray-300 leading-relaxed">
								At NEXT APP, we take your privacy seriously. This Privacy Policy
								explains how we collect, use, disclose, and safeguard your
								information when you visit our website or use our AI text chat
								assistant services. We are committed to protecting your personal
								information and your right to privacy. Please read this privacy
								policy carefully as it will help you understand what we do with
								the information that we collect.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								2. Information We Collect
							</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								We may collect information about you in various ways, including:
							</p>
							<ul className="list-disc pl-6 space-y-4 mt-4 text-gray-300">
								<li>
									<strong className="text-white">Personal Data:</strong> We
									collect personal information that you voluntarily provide to
									us when you register with us, express an interest in obtaining
									information about us or our products and services, participate
									in activities on our services, or otherwise when you contact
									us. This includes names, email addresses, phone numbers, job
									titles, and company information.
								</li>
								<li>
									<strong className="text-white">Usage Data:</strong> We
									automatically collect information about how you interact with
									our website and services, including pages visited, features
									used, time spent on pages, navigation paths, as well as
									information about your device and internet connection.
								</li>
								<li>
									<strong className="text-white">Chat Data:</strong> When you
									interact with our AI assistants, we collect and process the
									content of those conversations to provide our services,
									improve our AI models, and enhance your experience. This may
									include questions asked, responses received, and any
									information you share during chats.
								</li>
								<li>
									<strong className="text-white">Technical Data:</strong>{' '}
									Information collected automatically may include IP addresses,
									browser types and versions, device types, operating systems,
									geographic location information, language preferences,
									referring URLs, and other technical information.
								</li>
								<li>
									<strong className="text-white">
										Cookies and Similar Technologies:
									</strong>{' '}
									We use cookies and similar tracking technologies to collect
									and store information. These technologies help us analyze
									usage patterns, remember your preferences, and provide
									personalized experiences.
								</li>
							</ul>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								3. How We Use Your Information
							</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								We use the collected information for various purposes,
								including:
							</p>
							<ul className="list-disc pl-6 space-y-4 mt-4 text-gray-300">
								<li>
									<strong className="text-white">
										Providing and Maintaining Our Services:
									</strong>{' '}
									To deliver the functionality of our AI text chat assistants,
									process transactions, manage your account, and provide
									customer support.
								</li>
								<li>
									<strong className="text-white">
										Improving Our AI Systems:
									</strong>{' '}
									To train, update, and enhance our AI models and algorithms
									based on interactions, feedback, and performance data.
								</li>
								<li>
									<strong className="text-white">
										Personalizing User Experience:
									</strong>{' '}
									To understand how you use our services, optimize user
									interfaces, and deliver more relevant and tailored content.
								</li>
								<li>
									<strong className="text-white">Communication:</strong> To send
									you product updates, technical notices, security alerts,
									administrative messages, and marketing communications about
									our services.
								</li>
								<li>
									<strong className="text-white">
										Analytics and Research:
									</strong>{' '}
									To analyze usage patterns, conduct research, and gather
									demographic information to better understand how our services
									are used.
								</li>
								<li>
									<strong className="text-white">Legal Compliance:</strong> To
									comply with applicable laws, regulations, legal processes, or
									enforceable governmental requests.
								</li>
								<li>
									<strong className="text-white">Security:</strong> To detect,
									prevent, and address technical issues, fraudulent activities,
									and security breaches.
								</li>
							</ul>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								4. Data Security
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We implement appropriate technical and organizational security
								measures designed to protect the security of any personal
								information we process. These measures include encryption of
								data both in transit and at rest, regular security assessments,
								access controls, and employee training on data protection best
								practices.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								However, please be aware that despite our best efforts, no
								security measures are perfect or impenetrable. No method of data
								transmission over the Internet or method of electronic storage
								is 100% secure. Therefore, while we strive to use commercially
								acceptable means to protect your personal information, we cannot
								guarantee its absolute security. In the event of a data breach
								that affects your personal information, we will notify you in
								compliance with applicable laws.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								5. Third-Party Services
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We may use third-party services that collect, monitor, and
								analyze data to improve our service functionality. These may
								include cloud hosting providers, analytics services, customer
								relationship management systems, and AI infrastructure
								providers.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								These third parties have their own privacy policies addressing
								how they use such information. We review the privacy practices
								of these third parties before engaging with them and require
								them to process your information only for specified purposes and
								in accordance with our instructions and applicable data
								protection laws.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								We do not sell your data to third parties. When we share data
								with service providers, it is only to the extent necessary to
								provide our services and with appropriate safeguards in place.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								6. Your Data Rights
							</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								Depending on your location, you may have certain rights
								regarding your personal data. These rights may include:
							</p>
							<ul className="list-disc pl-6 space-y-4 mt-4 text-gray-300">
								<li>
									<strong className="text-white">The Right to Access:</strong>{' '}
									You have the right to request copies of your personal data
									that we hold.
								</li>
								<li>
									<strong className="text-white">
										The Right to Rectification:
									</strong>{' '}
									You have the right to request that we correct any information
									you believe is inaccurate or complete information you believe
									is incomplete.
								</li>
								<li>
									<strong className="text-white">The Right to Erasure:</strong>{' '}
									You have the right to request that we erase your personal
									data, under certain conditions.
								</li>
								<li>
									<strong className="text-white">
										The Right to Restrict Processing:
									</strong>{' '}
									You have the right to request that we restrict the processing
									of your personal data, under certain conditions.
								</li>
								<li>
									<strong className="text-white">
										The Right to Data Portability:
									</strong>{' '}
									You have the right to request that we transfer the data we
									have collected to another organization, or directly to you,
									under certain conditions.
								</li>
								<li>
									<strong className="text-white">The Right to Object:</strong>{' '}
									You have the right to object to our processing of your
									personal data, under certain conditions.
								</li>
							</ul>
							<p className="text-gray-300 leading-relaxed mt-6">
								If you wish to exercise any of these rights, please contact us
								using the contact information provided below. We will respond to
								your request within the timeframe required by applicable data
								protection laws.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								7. Data Retention
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We will retain your personal information only for as long as is
								necessary for the purposes set out in this Privacy Policy. We
								will retain and use your information to the extent necessary to
								comply with our legal obligations, resolve disputes, and enforce
								our policies.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								When we no longer need to process your personal data for the
								purposes outlined in this Privacy Policy, we will either delete
								or anonymize such information, or, if this is not possible (for
								example, because your personal data has been stored in backup
								archives), then we will securely store your personal data and
								isolate it from any further processing until deletion is
								possible.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								8. International Data Transfers
							</h2>
							<p className="text-gray-300 leading-relaxed">
								Your information, including personal data, may be transferred to
								and maintained on computers located outside of your state,
								province, country, or other governmental jurisdiction where the
								data protection laws may differ from those in your jurisdiction.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								If you are located outside of the United States and choose to
								provide information to us, please note that we transfer the
								data, including personal data, to the United States and process
								it there. Your consent to this Privacy Policy followed by your
								submission of such information represents your agreement to that
								transfer.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								We will take all the steps reasonably necessary to ensure that
								your data is treated securely and in accordance with this
								Privacy Policy, and no transfer of your personal data will take
								place to an organization or a country unless there are adequate
								controls in place, including the security of your data and other
								personal information.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								9. Children's Privacy
							</h2>
							<p className="text-gray-300 leading-relaxed">
								Our services are not intended for use by children under the age
								of 16. We do not knowingly collect personally identifiable
								information from children under 16. If we become aware that a
								child under 16 has provided us with personal information, we
								will take steps to remove such information and terminate the
								child's account.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								If you are a parent or guardian and you are aware that your
								child has provided us with personal information, please contact
								us so that we can take necessary actions.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								10. Changes to This Privacy Policy
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We may update our Privacy Policy from time to time. We will
								notify you of any changes by posting the new Privacy Policy on
								this page and updating the "Last updated" date at the top of
								this Privacy Policy.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								You are advised to review this Privacy Policy periodically for
								any changes. Changes to this Privacy Policy are effective when
								they are posted on this page. For significant changes, we will
								make reasonable efforts to provide a more prominent notice, such
								as an email notification of Privacy Policy changes.
							</p>
						</section>

						<section className="mb-12 p-8 rounded-lg bg-gray-900/40 border border-gray-800">
							<h2 className="text-2xl font-semibold mb-6 text-white">
								11. Contact Us
							</h2>
							<p className="text-gray-300 leading-relaxed">
								If you have any questions about this Privacy Policy, please
								contact us at:
							</p>
							<div className="mt-6 space-y-2 text-gray-300">
								<p>
									<strong className="text-white">Email:</strong>{' '}
									hello@NEXT APPai.com
								</p>
								<p>
									<strong className="text-white">Postal Address:</strong> NEXT APP
									AI Headquarters, 123 Innovation Drive, San Francisco, CA
									94105, USA
								</p>
								<p>
									<strong className="text-white">Phone:</strong> +1 (555)
									123-4567
								</p>
							</div>
							<p className="text-gray-300 leading-relaxed mt-6">
								We will respond to your inquiries as soon as possible, typically
								within 30 days.
							</p>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default PrivacyPolicy;
