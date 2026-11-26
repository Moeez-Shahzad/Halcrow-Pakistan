import { Check } from 'lucide-react';

const principles = [
  'Is befitting our purpose, values and code of conduct',
  'Brings value to our clients, shareholders and delivery partners',
  'Is socially responsible',
  'Is committed to meeting health and safety responsibilities to its employees, its clients and the wider public',
  'Is environmentally sustainable',
  'Does not involve corruption, bribery or unethical practices',
];

const standards = [
  'ISO 9001 - Quality management systems',
  'ISO 14001 - Environmental management systems',
  'BS OHSAS 18001 - Occupational health and safety management systems',
];

export default function AboutBusiness() {
  return (
    <>
      <div className="bg-white py-16 dark:bg-gray-900 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-12 lg:px-8">
          <section aria-labelledby="our-clients">
            <h2 id="our-clients" className="mb-5 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Clients
            </h2>
            <div className="max-w-prose space-y-5 leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                Clients remain at the centre of HPK's operations and we ensure that HPK contributes in projects as a stake-holder. With a staff strength of over 150, HPK has and continues to deliver projects for clients that include donor agencies, international funding institutions, international oil and gas companies, international consulting and construction companies, planners and architects, private infrastructure developers, private property developers, contractors, industrial conglomerates, non-government organizations and selected local and government authorities. Some of our key clients include USAID, DFID, Asian Development Bank, The World Bank, Japan International Cooperation Agency, CDM Smith, Tourism Promotion Services (Serena Hotels), Hutchison Port Holdings, Halcrow Group Limited, Mott McDonald International, CH2M HILL, OMV, BHP, MOL, Premier Oil, Petronas, KUFPEC and ENI.
              </p>
              <p>
                Our key to success is our ability to work closely with our clients; understand their
                challenges; and deliver timely, innovative, sustainable and effective solutions.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="remote-design"
            className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8"
          >
            <h2 id="remote-design" className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">
              Remote Design
            </h2>
            <div className="max-w-prose leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                HPK's design capabilities include offering engineering design and CAD services remotely from Pakistan to its clients based in countries including UAE, Qatar, Saudi Arabia and UK. With state-of-the-art communication facilities including connectivity via telephone, high speed internet, communication software and video conferencing, HPK remains integrated with its clients' design management teams no matter where they are located. HPK's strategy to locate its core design teams in Islamabad enables it to reach out to its clients' offices on short notice.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section aria-labelledby="business-principles" className="bg-gray-50 py-16 dark:bg-gray-800 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="business-principles" className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Business Principles
          </h2>
          <p className="mb-8 text-gray-700 dark:text-gray-300">Conducting our business in a manner that:</p>
          <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 leading-relaxed text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              >
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="business-management-system" className="bg-white py-16 dark:bg-gray-900 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="business-management-system" className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Business Management System
          </h2>
          <div className="max-w-[72ch] space-y-5 leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              HPK integrates its requirements for safety, health, environmental and quality management with
              other business requirements, into a single system - BMS. This governs our business processes
              and employee responsibilities enabling us to deliver services efficiently, effectively,
              consistently and safely, with due regard to sustainable development and the environment whilst
              meeting the relevant local legislative requirements.
            </p>
            <p>
              BMS establishes and maintains an economic and effective framework to provide assurance that
              the services provided by HPK will meet the requirements of clients, international
              standards, legislation and HPK's management. It takes account of the fact that
              each commission is unique and demands an individually planned approach by the project team,
              driven by a competent Project Manager.
            </p>
          </div>

          <div className="my-10 rounded-2xl bg-blue-50 px-6 py-7 dark:bg-gray-800 sm:px-8">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Standards and certification</h3>
            <p className="mb-5 leading-relaxed text-gray-700 dark:text-gray-300">BMS is designed to meet the requirements of the following three standards, without exclusions:</p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-gray-700 marker:text-blue-600 dark:text-gray-300 dark:marker:text-blue-400">
              {standards.map((standard) => <li key={standard}>{standard}</li>)}
            </ul>
          </div>

          <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
            Health, Safety, Environment and Quality Policy
          </h3>
          <div className="max-w-[72ch] space-y-5 leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              HPK's policy in managing its business is embodied within the
              HPK vision which defines the principles of our Company together with our goal. Our principles,
              which are made up of our purpose, values and conduct ensure that our goal 'to be recognized as
              the consultant that clients and partners naturally seek out when addressing their greatest
              challenges' is delivered through following processes that provide services in a highly
              professional manner.
            </p>
            <p>
              Our policy for Health, Safety, Environment and Quality applies to all projects through the
              implementation of the HPK Business Management System, which meets in an integrated manner the
              requirements of relevant standards, in particular ISO 9001, ISO 14001and OHSAS 18001, in
              pursuit of its primary objectives & the purpose and the context of the organization.
            </p>
            <p>
              HPK’s management will ensure continual improvement encompassing all facets of the organization
              by committing to providing satisfaction to all of our clients, our employees, our partners,
              other stakeholders, interested parties and the communities we work in by meeting the agreed
              requirements, applying best practice, incorporating the required degree of skill and care,
              complying with legislation and seeking continual improvement, whilst making appropriate
              profits. Therefore, we continually strive to understand and meet and whenever possible exceed
              their needs and expectations.
            </p>
            <p>
              HPK is committed to meeting its health and safety responsibilities to its employees, its
              clients and the wider public. We seek to minimize the health and safety risks for all
              employees whilst at work and for all other people arising out of our work. In particular, we
              are committed to ensuring that construction works emanating from studies or designs prepared
              by us can be safely built, properly used and maintained in a safe manner and without undue
              risk for the life cycle of the asset.
            </p>
            <p>
              HPK is committed to reduce the negative impacts of its operations through proactive energy
              efficiency, sustainable resource use, waste avoidance & reduction, water conservation, re-use
              and recycling initiatives, prevention of injury and ill health, protection of the environment,
              prevention of pollution, climate change mitigation and adaptation, the protection of
              biodiversity and ecosystems and any other specific commitments which are relevant to the
              context of the organization.
            </p>
            <p>
              HPK is fully committed to providing services that are consistent with all compliance
              obligations, codes of practice and all other requirements applicable to our activities
              including the nature, scale and environmental impacts of its activities and services. With our
              purpose of ‘sustaining and improving the quality of people's lives' at the heart of our
              business, we seek to achieve our business objectives in a manner that cause least harm to the
              environment and, as far as is reasonably practicable, achieve environmental benefits.
              Appropriate information and training is provided to enable employees to apply the business
              measures. Effectiveness is regularly monitored and action taken to address any shortcomings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
